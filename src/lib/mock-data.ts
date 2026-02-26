// ============================================================
// モックデータ — バックエンド差し替えポイント
// 本番ではこのファイルの代わりにAPIコールに置き換える
// ============================================================

export interface CalendarEvent {
  id: string;
  title: string;
  time: string;
  location: string;
  attendees: string;
}

export interface SlackMention {
  id: string;
  channel: string;
  message: string;
  from: string;
  time: string;
  unread: boolean;
}

export interface Task {
  id: string;
  title: string;
  status: "running" | "waiting" | "completed" | "error";
  progress: number;
  agent: string;
  eta?: string;
  category: string;
  description: string;
  startedAt: string;
}

export interface Agent {
  id: string;
  name: string;
  category: string;
  status: "active" | "idle" | "completed";
  progress: number;
  taskCount: number;
  description: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  status: "new" | "reviewed" | "approved" | "rejected";
  summary: string;
  recommendation: string;
  roi: string;
  annualEffect: string;
  details: { label: string; value: string; trend?: "up" | "down" | "flat" }[];
  agentResults: string[];
}

export interface UserProfile {
  name: string;
  initials: string;
  email: string;
  workspace: string;
  role: string;
  plan: string;
  integrations: string[];
}

// ── カレンダー ──
export const calendarEvents: CalendarEvent[] = [
  { id: "cal-1", title: "中途採用・一次面接（鈴木様）", time: "10:00", location: "Google Meet", attendees: "田中, 山田" },
  { id: "cal-2", title: "採用チーム定例ミーティング", time: "13:00", location: "6F 会議室A", attendees: "採用G全員" },
  { id: "cal-3", title: "就業規則改定 レビュー会", time: "15:30", location: "Google Meet", attendees: "法務部, 人事部" },
];

// ── Slack ──
export const slackMentions: SlackMention[] = [
  { id: "slk-1", channel: "#採用チャネル", message: "@Naito 来週のROIレポートの締切確認です", from: "田中", time: "9:42", unread: true },
  { id: "slk-2", channel: "#人事部全体", message: "@Naito 新卒採用の予算承認お願いします", from: "山田", time: "8:15", unread: true },
];

// ── タスク ──
export const initialTasks: Task[] = [
  { id: "task-1", title: "JD vs 実態の差分分析", status: "running", progress: 65, agent: "分析エージェント", eta: "残り約5分", category: "採用", description: "営業職のJDと実際の業務内容を比較分析中", startedAt: "9:06" },
  { id: "task-2", title: "採用チャネルROI比較", status: "running", progress: 40, agent: "データエージェント", eta: "残り約12分", category: "採用", description: "各チャネルのコスト対効果を計算中", startedAt: "8:30" },
  { id: "task-3", title: "面接評価シート集計", status: "waiting", progress: 0, agent: "集計エージェント", category: "採用", description: "今週の面接評価を集計・レポート化", startedAt: "9:15" },
  { id: "task-4", title: "就業規則変更点抽出", status: "running", progress: 88, agent: "文書エージェント", eta: "残り約2分", category: "労務管理", description: "改定前後の差分を自動抽出中", startedAt: "8:00" },
];

// ── エージェント ──
export const initialAgents: Agent[] = [
  { id: "ag-1", name: "JD分析エージェント", category: "採用", status: "active", progress: 65, taskCount: 2, description: "職務記述書の分析と改善提案を行います" },
  { id: "ag-2", name: "採用ROIエージェント", category: "採用", status: "active", progress: 40, taskCount: 1, description: "採用チャネルごとのROIを分析します" },
  { id: "ag-3", name: "面接評価エージェント", category: "採用", status: "idle", progress: 0, taskCount: 0, description: "面接評価の集計と傾向分析を行います" },
  { id: "ag-4", name: "勤怠管理エージェント", category: "労務管理", status: "active", progress: 88, taskCount: 1, description: "勤怠データの異常検知と集計を行います" },
  { id: "ag-5", name: "規程管理エージェント", category: "労務管理", status: "completed", progress: 100, taskCount: 0, description: "社内規程の更新と差分管理を行います" },
  { id: "ag-6", name: "組織分析エージェント", category: "組織開発", status: "idle", progress: 0, taskCount: 0, description: "組織構造とパフォーマンスの分析を行います" },
];

// ── レポート ──
export const initialReports: Report[] = [
  {
    id: "rpt-1",
    title: "中途採用チャネルROI分析",
    date: "2025/01/15",
    status: "new",
    summary: "Indeed経由の採用が最もROIが高い。Wantedly経由は認知向上に寄与するがCPAが高め。",
    recommendation: "Go（実行推奨）",
    roi: "280%",
    annualEffect: "¥4,200,000",
    details: [
      { label: "Indeed", value: "ROI 320%", trend: "up" },
      { label: "Wantedly", value: "ROI 145%", trend: "down" },
      { label: "エージェント", value: "ROI 210%", trend: "flat" },
      { label: "リファラル", value: "ROI 890%", trend: "up" },
    ],
    agentResults: ["Indeedの掲載頻度を週3→5に増加推奨", "Wantedlyはブランディング目的に限定", "リファラル紹介インセンティブの増額を提案"],
  },
  {
    id: "rpt-2",
    title: "JD vs 実態 差分レポート",
    date: "2025/01/15",
    status: "new",
    summary: "営業職JDの業務記述が実態と25%乖離。特に「データ分析」業務が未記載。",
    recommendation: "Go（JD改定推奨）",
    roi: "—",
    annualEffect: "離職率 -8% 見込み",
    details: [
      { label: "乖離率", value: "25%", trend: "down" },
      { label: "未記載業務", value: "3件" },
      { label: "過剰記載", value: "1件" },
    ],
    agentResults: ["「データ分析・レポート作成」を追加", "「飛び込み営業」を削除（実態なし）", "改定版JD_v2.docx を自動生成済み"],
  },
  {
    id: "rpt-3",
    title: "月次勤怠サマリー（12月）",
    date: "2025/01/10",
    status: "reviewed",
    summary: "平均残業時間は前月比-12%。36協定超過リスクのある社員が2名。",
    recommendation: "要確認",
    roi: "—",
    annualEffect: "コンプライアンスリスク軽減",
    details: [
      { label: "平均残業", value: "18.5h/月", trend: "down" },
      { label: "36協定リスク", value: "2名", trend: "up" },
      { label: "有休取得率", value: "72%", trend: "up" },
    ],
    agentResults: ["対象2名の上長に自動アラート送信済み", "来月の予測: リスク0名（改善見込み）"],
  },
];

// ── ユーザープロフィール ──
export const defaultProfile: UserProfile = {
  name: "Naito K",
  initials: "NK",
  email: "naito@example.com",
  workspace: "naito's workspace",
  role: "人事マネージャー",
  plan: "Free",
  integrations: ["Gmail"],
};

// ── AI が参照するコンテキスト（システムプロンプト用） ──
export function buildAgentContext(profile: UserProfile): string {
  const now = new Date();
  const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}`;

  return `
あなたは「Blueish Agent」のメインエージェントです。
ユーザーは${profile.role}の${profile.name}さんです。

【今日の予定】
${calendarEvents.map((e) => `- ${e.time} ${e.title}（${e.location}、${e.attendees}）`).join("\n")}

【未読Slack通知】
${slackMentions.filter((s) => s.unread).map((s) => `- ${s.channel}: ${s.message}（${s.from}、${s.time}）`).join("\n")}

【進行中タスク】
${initialTasks.filter((t) => t.status === "running").map((t) => `- ${t.title}: ${t.progress}% ${t.eta || ""}`).join("\n")}

【最新レポート】
${initialReports.slice(0, 2).map((r) => `- ${r.title}: ${r.summary}`).join("\n")}

現在時刻: ${timeStr}
回答ルール:
- 日本語で回答
- 簡潔かつ具体的に
- データがある場合は数値を含める
- 必要に応じてタスク起動やレポート参照を提案
- 敬語で丁寧に対応
`.trim();
}
