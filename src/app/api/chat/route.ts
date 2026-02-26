import { Anthropic } from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `あなたは「Blueish Agent」のメインAIエージェントです。HR（人事）業務を支援する専門AIとして回答してください。

【役割】
- 人事マネージャーの業務パートナー
- 採用、労務管理、組織開発に関する質問に対応
- データに基づいた具体的な提案を行う

【今日の状況（モックデータ）】
- 予定: 10:00 中途採用・一次面接（鈴木様）、13:00 採用チーム定例、15:30 就業規則改定レビュー会
- Slack未読: #採用チャネルで田中さんからROIレポート締切確認、#人事部全体で山田さんから新卒採用予算承認依頼
- 進行中タスク: JD差分分析(65%), 採用チャネルROI比較(40%), 就業規則変更点抽出(88%)
- 中途採用面接が先週比+60%増加中
- 営業職JDと実態の乖離率25%（データ分析業務が未記載）

【回答ルール】
- 日本語で回答
- 簡潔かつ具体的に（3〜5文程度）
- 数値やデータを積極的に含める
- 必要に応じて「エージェントを起動します」「レポートをご確認ください」等のアクション提案を行う
- 敬語で丁寧に対応
- ユーザーの名前は「Naitoさん」`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Invalid messages format", { status: 400 });
    }

    // ANTHROPIC_API_KEY がない場合はフォールバック応答
    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response(
        JSON.stringify({ fallback: true, content: generateFallback(messages) }),
        { headers: { "Content-Type": "application/json" } }
      );
    }

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

    const stream = await client.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
      stream: true,
    });

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return new Response("Internal server error", { status: 500 });
  }
}

function generateFallback(messages: { role: string; content: string }[]): string {
  const last = messages[messages.length - 1]?.content || "";
  const l = last.toLowerCase();

  if (l.includes("状況") || l.includes("概況") || l.includes("教えて"))
    return "おはようございます、Naitoさん。本日の概況をお伝えします。\n\n進行中の業務が4件あり、確認待ちが1件です。中途採用面接が先週比+60%と増加しています。10:00に鈴木様の一次面接、13:00に採用チーム定例、15:30に就業規則レビュー会が予定されています。\n\n何か優先的に確認したい事項はありますか？";

  if (l.includes("jd"))
    return "承知しました。JDの差分分析について報告します。\n\n現在、営業職のJDと実際の業務内容に25%の乖離が確認されています。特に「データ分析・レポート作成」業務がJDに未記載です。改定版JD_v2.docxを自動生成済みですので、レポート画面からご確認ください。";

  if (l.includes("面接"))
    return "今週の面接状況をお伝えします。\n\n合計8件の面接が予定されており、中途採用5件・新卒3件です。本日10:00に鈴木様の一次面接がGoogle Meetで行われます（参加者: 田中さん、山田さん）。\n\n面接評価シートの集計も並行して進めましょうか？";

  if (l.includes("分析") || l.includes("調べ"))
    return "承知しました。分析エージェントを起動します。\n\n現在のデータを元に分析を実行し、結果はレポート画面に出力します。完了まで約8分の見込みです。進捗はダッシュボードの右パネルでリアルタイムにご確認いただけます。";

  if (l.includes("レポート"))
    return "最新のレポートが2件生成されています。\n\n1. 「中途採用チャネルROI分析」— Indeed経由が最もROI高（320%）、リファラルが890%と突出\n2. 「JD vs 実態 差分レポート」— 営業職JDの乖離率25%、改定推奨\n\nレポート画面から詳細をご確認ください。";

  if (l.includes("slack") || l.includes("通知"))
    return "未読のSlack通知が2件あります。\n\n1. #採用チャネル — 田中さんから「来週のROIレポートの締切確認」（9:42）\n2. #人事部全体 — 山田さんから「新卒採用の予算承認依頼」（8:15）\n\nどちらから対応しますか？";

  return "承知しました。確認いたします。\n\n現在の業務状況やデータに基づいてサポートいたします。具体的にどのような情報が必要でしょうか？例えば「今日の業務状況を教えて」「採用データを分析して」などとお伝えください。";
}
