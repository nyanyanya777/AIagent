"use client";

import { useState, useRef, useEffect } from "react";
import Sidebar from "./Sidebar";
import Badge from "./Badge";
import { useChat } from "@/hooks/useChat";
import { useApp, type ChatMessage } from "@/context/AppContext";

interface Props {
  onNavigate: (id: string) => void;
}

/* ── Message Renderers ── */
function AgentAvatar() {
  return (
    <div style={{ width: 36, height: 36, borderRadius: 8, background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontSize: 16 }}>🤖</span>
    </div>
  );
}

function UserAvatar() {
  return (
    <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--zinc-900)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>NK</span>
    </div>
  );
}

function TextMessage({ msg }: { msg: ChatMessage }) {
  const isUser = msg.role === "user";
  return (
    <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
      {isUser ? <UserAvatar /> : <AgentAvatar />}
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "var(--zinc-900)" }}>
            {isUser ? "Naito K" : "メインエージェント"}
          </span>
          {!isUser && <Badge color="var(--violet-600)" bg="var(--violet-50)">APP</Badge>}
          <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{msg.timestamp}</span>
        </div>
        <span style={{ fontSize: 15, color: "var(--zinc-900)", whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
          {msg.content || <span style={{ color: "var(--zinc-400)" }}>...</span>}
        </span>
      </div>
    </div>
  );
}

function SummaryMessage({ msg }: { msg: ChatMessage }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
      <AgentAvatar />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <div style={{ background: "var(--zinc-50)", borderRadius: 8, padding: "12px 16px", width: 360, display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>{msg.content}</span>
          {msg.summaryData?.map((row) => (
            <div key={row.label} style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>{row.label}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: row.color || "var(--zinc-900)" }}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskMessage({ msg }: { msg: ChatMessage }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
      <AgentAvatar />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェント</span>
          <Badge color="var(--violet-600)" bg="var(--violet-50)">APP</Badge>
          <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{msg.timestamp}</span>
        </div>
        <span style={{ fontSize: 15, color: "var(--zinc-900)" }}>{msg.content}</span>
        <div style={{ display: "flex", width: 380, borderRadius: 6, border: "1px solid var(--zinc-200)", overflow: "hidden", marginTop: 4 }}>
          <div style={{ width: 4, background: "var(--violet-600)", flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "10px 12px", flex: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--violet-600)" }}>{msg.taskTitle}</span>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>{msg.taskProgress === 100 ? "完了" : "実行中"}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 100, height: 6, background: "var(--secondary)", borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{ width: msg.taskProgress || 0, height: 6, background: msg.taskProgress === 100 ? "var(--emerald-500)" : "var(--primary)", borderRadius: 9999, transition: "width 0.5s ease" }} />
                </div>
                <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>{msg.taskProgress}%</span>
              </div>
              <span style={{ fontSize: 13, color: "var(--zinc-400)" }}>• {msg.taskEta}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetectMessage({ msg }: { msg: ChatMessage }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
      <AgentAvatar />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>メインエージェント</span>
          <Badge color="var(--violet-700)" bg="#ede9fe">検知</Badge>
          <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{msg.timestamp}</span>
        </div>
        <span style={{ fontSize: 14, color: "var(--zinc-700)" }}>{msg.content}</span>
        {msg.quickReplies && (
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            {msg.quickReplies.map((label) => (
              <span key={label} style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-700)", background: "var(--zinc-100)", borderRadius: 9999, padding: "6px 14px", cursor: "pointer" }}>
                {label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PermissionMessage({ msg, onRespond }: { msg: ChatMessage; onRespond: (id: string, action: "approved" | "rejected") => void }) {
  return (
    <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
      <AgentAvatar />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>メインエージェント</span>
          <Badge color="#92400e" bg="#fef3c7">許可</Badge>
          <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{msg.timestamp}</span>
        </div>
        <span style={{ fontSize: 14, color: "var(--zinc-700)" }}>{msg.content}</span>
        <div style={{ background: "#f5f3ff", border: "1px solid #8b5cf6", borderRadius: 8, padding: 16, width: 420, display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>{msg.permissionTitle}</span>
          <span style={{ fontSize: 13, color: "var(--zinc-600)" }}>{msg.permissionDesc}</span>
          {msg.permissionStatus === "pending" ? (
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => onRespond(msg.id, "approved")} style={{ padding: "8px 16px", background: "var(--primary)", color: "var(--primary-foreground)", borderRadius: 6, border: "none", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>許可する</button>
              <button onClick={() => onRespond(msg.id, "rejected")} style={{ padding: "8px 16px", background: "var(--background)", color: "var(--foreground)", borderRadius: 6, border: "1px solid var(--zinc-200)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>却下する</button>
            </div>
          ) : (
            <span style={{ fontSize: 13, fontWeight: 500, color: msg.permissionStatus === "approved" ? "var(--emerald-700)" : "var(--red-500)" }}>
              {msg.permissionStatus === "approved" ? "✓ 許可しました" : "✗ 却下しました"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function renderMessage(msg: ChatMessage, respondPermission: (id: string, action: "approved" | "rejected") => void) {
  switch (msg.kind) {
    case "summary": return <SummaryMessage key={msg.id} msg={msg} />;
    case "task": return <TaskMessage key={msg.id} msg={msg} />;
    case "detect": return <DetectMessage key={msg.id} msg={msg} />;
    case "permission": return <PermissionMessage key={msg.id} msg={msg} onRespond={respondPermission} />;
    default: return <TextMessage key={msg.id} msg={msg} />;
  }
}

/* ── Progress Panel ── */
function ProgressPanel() {
  const { calendar, slack, tasks } = useApp();
  const runningCount = tasks.filter((t) => t.status === "running").length + calendar.length + slack.filter((s) => s.unread).length;

  return (
    <div style={{ width: 400, borderLeft: "1px solid var(--zinc-200)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, height: 50, padding: "0 16px", borderBottom: "1px solid var(--zinc-200)" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--zinc-900)" }}>進行中</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--zinc-600)", background: "var(--zinc-100)", borderRadius: 9999, padding: "2px 8px" }}>{runningCount}</span>
      </div>
      <div style={{ flex: 1, overflow: "auto" }}>
        {/* Tasks */}
        {tasks.filter((t) => t.status === "running").length > 0 && (
          <>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "var(--zinc-50)", borderBottom: "1px solid var(--zinc-100)" }}>
              <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-500)" }}>タスク</span>
              <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{tasks.filter((t) => t.status === "running").length}</span>
            </div>
            {tasks.filter((t) => t.status === "running").map((t) => (
              <div key={t.id} style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>{t.title}</span>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>{t.progress}%</span>
                </div>
                <div style={{ width: "100%", height: 4, background: "var(--zinc-100)", borderRadius: 9999, overflow: "hidden" }}>
                  <div style={{ width: `${t.progress}%`, height: 4, background: "var(--violet-600)", borderRadius: 9999, transition: "width 0.5s" }} />
                </div>
              </div>
            ))}
          </>
        )}

        {/* Calendar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "var(--zinc-50)", borderBottom: "1px solid var(--zinc-100)" }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-500)" }}>Google カレンダー</span>
          <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{calendar.length}</span>
        </div>
        {calendar.map((e) => (
          <div key={e.id} style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>{e.title}</span>
              <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>{e.time}</span>
            </div>
            <div style={{ display: "flex", gap: 4, fontSize: 12, color: "var(--zinc-400)" }}>
              <span>{e.location}</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>{e.attendees}</span>
            </div>
          </div>
        ))}

        {/* Slack */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "var(--zinc-50)", borderBottom: "1px solid var(--zinc-100)" }}>
          <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-500)" }}>Slack</span>
          <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>{slack.filter((s) => s.unread).length}</span>
        </div>
        {slack.map((s) => (
          <div key={s.id} style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>{s.channel} でメンション</span>
              {s.unread && <span style={{ fontSize: 11, fontWeight: 600, color: "#ef4444", background: "#fef2f2", borderRadius: 9999, padding: "2px 8px" }}>未読</span>}
            </div>
            <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>{s.message}</span>
            <div style={{ display: "flex", gap: 4, fontSize: 11, color: "var(--zinc-400)" }}>
              <span>{s.from}</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>{s.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Empty Progress Panel ── */
function EmptyProgressPanel() {
  return (
    <div style={{ width: 400, borderLeft: "1px solid var(--zinc-200)", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, height: 50, padding: "0 16px", borderBottom: "1px solid var(--zinc-200)" }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--zinc-900)" }}>進行中</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "var(--zinc-600)", background: "var(--zinc-100)", borderRadius: 9999, padding: "2px 8px" }}>0</span>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center", gap: 8 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "var(--zinc-900)" }}>進行中のタスクはありません</span>
        <span style={{ fontSize: 13, color: "var(--zinc-500)", whiteSpace: "pre-line" }}>
          {"エージェントに指示を送ると、ここに\nタスクの進捗が表示されます。"}
        </span>
      </div>
    </div>
  );
}

/* ── Dashboard Component ── */
export default function Dashboard({ onNavigate }: Props) {
  const { messages, sendMessage, isStreaming, respondPermission } = useChat();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isEmpty = messages.length === 0;

  const suggestions = [
    { title: "今日の業務状況を教えて", desc: "進行中の業務と確認待ち項目をサマリー" },
    { title: "採用データを分析して", desc: "最新の採用チャネルROIを比較分析" },
    { title: "JDをレビューして", desc: "職務記述書と実際の業務内容の差分を確認" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || isStreaming) return;
    sendMessage(input);
    setInput("");
  };

  const handleSuggestion = (text: string) => {
    sendMessage(text);
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="dashboard" onNavigate={onNavigate} />
      <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
        {/* Chat Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Chat Header */}
          <div style={{ display: "flex", alignItems: "center", height: 50, padding: "0 16px", borderBottom: "1px solid var(--zinc-200)" }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェント</span>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "16px 20px", overflow: "auto" }}>
            {isEmpty ? (
              /* ── Empty State ── */
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 24 }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
                  <span style={{ fontSize: 22, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェントへようこそ 👋</span>
                  <span style={{ fontSize: 15, color: "var(--zinc-500)", whiteSpace: "pre-line" }}>
                    {"業務に関する質問や指示を入力してください。\nエージェントが自動で調査・分析・実行します。"}
                  </span>
                </div>
                <div style={{ display: "flex", gap: 12 }}>
                  {suggestions.map((s) => (
                    <div key={s.title} onClick={() => handleSuggestion(s.title)} style={{ padding: "12px 16px", background: "#fff", border: "1px solid var(--zinc-200)", borderRadius: 8, cursor: "pointer", width: 220, transition: "border-color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--violet-500)")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--zinc-200)")}>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: 13, color: "var(--zinc-400)" }}>{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* ── Messages ── */
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
                  <div style={{ flex: 1, height: 1, background: "var(--zinc-200)" }} />
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--zinc-400)" }}>今日</span>
                  <div style={{ flex: 1, height: 1, background: "var(--zinc-200)" }} />
                </div>
                {messages.map((msg) => renderMessage(msg, respondPermission))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <div style={{ padding: "12px 20px 16px 20px" }}>
            <div style={{ border: "1px solid var(--zinc-300)", borderRadius: 10, transition: "border-color 0.2s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px" }}>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
                  placeholder="メインエージェントにメッセージを送信"
                  disabled={isStreaming}
                  style={{ flex: 1, border: "none", outline: "none", fontSize: 14, color: "var(--zinc-900)", background: "transparent" }}
                />
                <button
                  onClick={handleSend}
                  disabled={isStreaming || !input.trim()}
                  style={{ padding: "6px 12px", background: input.trim() ? "var(--primary)" : "var(--zinc-200)", color: input.trim() ? "var(--primary-foreground)" : "var(--zinc-400)", borderRadius: 6, border: "none", fontSize: 13, fontWeight: 500, cursor: input.trim() ? "pointer" : "default", transition: "background 0.2s" }}
                >
                  {isStreaming ? "..." : "送信"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Panel */}
        {isEmpty ? <EmptyProgressPanel /> : <ProgressPanel />}
      </div>
    </div>
  );
}
