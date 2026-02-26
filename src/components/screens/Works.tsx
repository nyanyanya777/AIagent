"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

function getStatusColor(status: string): string {
  switch (status) {
    case "running":
      return "var(--violet-600)";
    case "waiting":
      return "var(--amber-700)";
    case "completed":
      return "var(--emerald-600)";
    case "error":
      return "var(--red-600)";
    default:
      return "var(--zinc-600)";
  }
}

function getStatusBgColor(status: string): string {
  switch (status) {
    case "running":
      return "var(--violet-50)";
    case "waiting":
      return "var(--amber-50)";
    case "completed":
      return "var(--emerald-50)";
    case "error":
      return "var(--red-50)";
    default:
      return "var(--zinc-50)";
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "running":
      return "実行中";
    case "waiting":
      return "待機中";
    case "completed":
      return "完了";
    case "error":
      return "エラー";
    default:
      return status;
  }
}

export default function Works({ onNavigate }: Props) {
  const { tasks, updateTask } = useApp();
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(tasks.length > 0 ? tasks[0].id : null);
  const selectedTask = tasks.find(t => t.id === selectedTaskId);

  const handleMarkComplete = (taskId: string) => {
    updateTask(taskId, { status: "completed", progress: 100 });
  };

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="works" onNavigate={onNavigate} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--zinc-200)", background: "#fff" }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "var(--zinc-900)" }}>業務</h1>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", gap: 16, padding: 16, overflow: "hidden" }}>
          {/* Left Panel: Task List */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--zinc-200)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>タスク一覧</h2>
            </div>
            <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
              {tasks.map((task, idx) => (
                <div
                  key={task.id}
                  onClick={() => setSelectedTaskId(task.id)}
                  style={{
                    padding: 12,
                    borderBottom: idx < tasks.length - 1 ? "1px solid var(--zinc-100)" : "none",
                    cursor: "pointer",
                    background: selectedTaskId === task.id ? "var(--blue-50)" : "transparent",
                    borderLeft: selectedTaskId === task.id ? "3px solid var(--blue-600)" : "3px solid transparent",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>{task.title}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                    <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>{task.category}</span>
                    <Badge color="#fff" bg={getStatusColor(task.status)}>{getStatusLabel(task.status)}</Badge>
                  </div>
                  {task.status === "running" && (
                    <div style={{ fontSize: 11, color: "var(--zinc-500)" }}>{task.eta}</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Center: Task Details */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            {selectedTask ? (
              <>
                {/* Task Header */}
                <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
                  <div style={{ marginBottom: 16 }}>
                    <h1 style={{ fontSize: 20, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 8 }}>{selectedTask.title}</h1>
                    <p style={{ fontSize: 14, color: "var(--zinc-600)" }}>{selectedTask.description}</p>
                  </div>

                  {/* Status Badge and Agent */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <Badge color="#fff" bg={getStatusColor(selectedTask.status)}>{getStatusLabel(selectedTask.status)}</Badge>
                    <span style={{ fontSize: 13, color: "var(--zinc-600)" }}>エージェント: {selectedTask.agent}</span>
                  </div>

                  {/* Progress Bar */}
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-900)" }}>進捗</span>
                      <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-900)" }}>{selectedTask.progress}%</span>
                    </div>
                    <div style={{ background: "var(--zinc-100)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                      <div
                        style={{
                          background: getStatusColor(selectedTask.status),
                          height: "100%",
                          width: `${selectedTask.progress}%`,
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>

                  {/* Complete Button */}
                  {selectedTask.status !== "completed" && (
                    <button
                      onClick={() => handleMarkComplete(selectedTask.id)}
                      style={{
                        padding: "10px 16px",
                        borderRadius: 6,
                        background: "var(--emerald-600)",
                        color: "#fff",
                        fontSize: 13,
                        fontWeight: 500,
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      完了にする
                    </button>
                  )}
                </div>

                {/* Additional Info */}
                <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <div style={{ fontSize: 12, color: "var(--zinc-500)", marginBottom: 4 }}>開始時刻</div>
                      <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>{selectedTask.startedAt}</div>
                    </div>
                    {selectedTask.eta && (
                      <div>
                        <div style={{ fontSize: 12, color: "var(--zinc-500)", marginBottom: 4 }}>予想完了</div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>{selectedTask.eta}</div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20, display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
                <span style={{ color: "var(--zinc-500)" }}>タスクを選択してください</span>
              </div>
            )}
          </div>

          {/* Right Panel: Related Issues */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--zinc-200)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>関連する課題</h2>
            </div>
            <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
              {/* Issue 1 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "start", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", flex: 1 }}>JDと実態の乖離</span>
                  <Badge color="#fff" bg="var(--red-500)">高</Badge>
                </div>
              </div>

              {/* Issue 2 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "start", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", flex: 1 }}>採用コスト最適化</span>
                  <Badge color="#fff" bg="var(--amber-700)">中</Badge>
                </div>
              </div>

              {/* Issue 3 */}
              <div style={{ padding: 12, cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "start", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", flex: 1 }}>面接プロセスの標準化</span>
                  <Badge color="#fff" bg="var(--zinc-400)">低</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
