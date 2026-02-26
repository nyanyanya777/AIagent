"use client";

import { useState, useCallback } from "react";
import { useApp, type ChatMessage } from "@/context/AppContext";

let msgCounter = 0;
function genId() {
  return `msg-${Date.now()}-${++msgCounter}`;
}

function now() {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function useChat() {
  const { messages, addMessage, updateMessage, profile, tasks, addTask, updateTask } = useApp();
  const [isStreaming, setIsStreaming] = useState(false);

  // ── ユーザーメッセージ送信 ──
  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || isStreaming) return;

    // 1. ユーザーメッセージ追加
    const userMsg: ChatMessage = {
      id: genId(),
      role: "user",
      kind: "text",
      content: text,
      timestamp: now(),
    };
    addMessage(userMsg);

    // 2. エージェント応答を開始
    const agentMsgId = genId();
    const agentMsg: ChatMessage = {
      id: agentMsgId,
      role: "agent",
      kind: "text",
      content: "",
      timestamp: now(),
    };
    addMessage(agentMsg);
    setIsStreaming(true);

    try {
      // 3. 特定キーワードで特殊カード生成
      const lowerText = text.toLowerCase();

      // 「分析して」→ タスク起動演出
      if (lowerText.includes("分析") || lowerText.includes("調べ") || lowerText.includes("レビュー")) {
        const taskTitle = extractTaskTitle(text);
        const newTaskId = `task-${Date.now()}`;

        // まず返答テキストをストリーミング
        await streamResponse(text, agentMsgId, messages.concat(userMsg));

        // タスクカードを追加
        setTimeout(() => {
          const taskMsg: ChatMessage = {
            id: genId(),
            role: "agent",
            kind: "task",
            content: `「${taskTitle}」エージェントを起動しました。`,
            timestamp: now(),
            taskId: newTaskId,
            taskTitle,
            taskProgress: 0,
            taskEta: "残り約8分",
          };
          addMessage(taskMsg);

          // タスクリストにも追加
          addTask({
            id: newTaskId,
            title: taskTitle,
            status: "running",
            progress: 0,
            agent: "分析エージェント",
            eta: "残り約8分",
            category: "採用",
            description: text,
            startedAt: now(),
          });

          // プログレス演出
          simulateProgress(newTaskId, taskMsg.id);
        }, 500);

      } else if (lowerText.includes("状況") || lowerText.includes("サマリー") || lowerText.includes("概況")) {
        // 「状況教えて」→ サマリーカード
        await streamResponse(text, agentMsgId, messages.concat(userMsg));

        setTimeout(() => {
          const runningTasks = tasks.filter((t) => t.status === "running");
          const waitingTasks = tasks.filter((t) => t.status === "waiting");
          const summaryMsg: ChatMessage = {
            id: genId(),
            role: "agent",
            kind: "summary",
            content: "📊 本日のサマリー",
            timestamp: now(),
            summaryData: [
              { label: "進行中の業務", value: `${runningTasks.length}件` },
              { label: "確認待ち", value: `${waitingTasks.length}件`, color: "#d97706" },
              { label: "全体進捗", value: `${Math.round(tasks.reduce((a, t) => a + t.progress, 0) / Math.max(tasks.length, 1))}%` },
            ],
          };
          addMessage(summaryMsg);
        }, 500);

      } else {
        // 通常テキスト応答
        await streamResponse(text, agentMsgId, messages.concat(userMsg));
      }
    } catch (err) {
      console.error("Chat error:", err);
      updateMessage(agentMsgId, { content: "申し訳ございません。一時的なエラーが発生しました。もう一度お試しください。" });
    } finally {
      setIsStreaming(false);
    }
  }, [isStreaming, messages, tasks, addMessage, updateMessage, addTask, profile]);

  // ── ストリーミング応答 ──
  const streamResponse = async (userText: string, msgId: string, allMessages: ChatMessage[]) => {
    try {
      const apiMessages = allMessages
        .filter((m) => m.kind === "text" && m.content)
        .map((m) => ({
          role: m.role === "user" ? "user" as const : "assistant" as const,
          content: m.content,
        }));

      // 最低限user→assistantの交互を保証
      const cleanMessages = apiMessages.filter((_, i) => {
        if (i === 0) return true;
        return apiMessages[i].role !== apiMessages[i - 1]?.role;
      });

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: cleanMessages }),
      });

      if (!res.ok) {
        // API失敗時はモック応答
        const fallback = generateFallbackResponse(userText);
        updateMessage(msgId, { content: fallback });
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        updateMessage(msgId, { content: generateFallbackResponse(userText) });
        return;
      }

      const decoder = new TextDecoder();
      let accumulated = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        updateMessage(msgId, { content: accumulated });
      }
    } catch {
      // ネットワークエラー等 → フォールバック
      updateMessage(msgId, { content: generateFallbackResponse(userText) });
    }
  };

  // ── タスクプログレス演出 ──
  const simulateProgress = (taskId: string, msgId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        updateTask(taskId, { status: "completed", progress: 100 });
        updateMessage(msgId, { taskProgress: 100, taskEta: "完了" });

        // 完了通知
        setTimeout(() => {
          addMessage({
            id: genId(),
            role: "agent",
            kind: "detect",
            content: "タスクが完了しました。結果をレポートに出力しました。",
            timestamp: now(),
            quickReplies: ["レポートを見る", "詳細を表示", "次のタスクへ"],
          });
        }, 800);
      } else {
        const remaining = Math.ceil((100 - progress) / 15);
        updateTask(taskId, { progress, eta: `残り約${remaining}分` });
        updateMessage(msgId, { taskProgress: progress, taskEta: `残り約${remaining}分` });
      }
    }, 2000);
  };

  // ── 許可応答 ──
  const respondPermission = useCallback((msgId: string, action: "approved" | "rejected") => {
    updateMessage(msgId, { permissionStatus: action });
    addMessage({
      id: genId(),
      role: "agent",
      kind: "text",
      content: action === "approved"
        ? "承知しました。処理を実行します。"
        : "了解しました。処理をキャンセルしました。",
      timestamp: now(),
    });
  }, [addMessage, updateMessage]);

  return { messages, sendMessage, isStreaming, respondPermission };
}

// ── ヘルパー ──
function extractTaskTitle(text: string): string {
  if (text.includes("JD")) return "JD差分分析";
  if (text.includes("ROI")) return "採用チャネルROI分析";
  if (text.includes("面接")) return "面接データ集計";
  if (text.includes("勤怠")) return "勤怠異常検知";
  if (text.includes("規則") || text.includes("規程")) return "規程変更点抽出";
  if (text.includes("採用")) return "採用データ分析";
  return "データ分析";
}

function generateFallbackResponse(text: string): string {
  const lower = text.toLowerCase();
  if (lower.includes("状況") || lower.includes("概況"))
    return "おはようございます。本日の概況をお伝えします。進行中の業務が4件、確認待ちが1件です。中途採用面接が先週比+60%と増加傾向にあります。";
  if (lower.includes("jd"))
    return "承知しました。JDの差分分析を開始します。営業職のJDと実際の業務内容を比較し、乖離点を抽出します。";
  if (lower.includes("分析"))
    return "承知しました。データ分析エージェントを起動します。結果はレポート画面でご確認いただけます。";
  if (lower.includes("面接"))
    return "今週の面接は合計8件です。中途採用が5件、新卒が3件となっています。本日は10:00に鈴木様の一次面接が予定されています。";
  if (lower.includes("レポート"))
    return "最新のレポートが2件あります。「中途採用チャネルROI分析」と「JD vs 実態 差分レポート」です。レポート画面からご確認ください。";
  return "承知しました。確認いたします。何か追加のご指示はありますか？";
}
