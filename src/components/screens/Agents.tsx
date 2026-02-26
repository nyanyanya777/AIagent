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
    case "active":
      return "var(--blue-600)";
    case "idle":
      return "var(--zinc-400)";
    case "completed":
      return "var(--emerald-600)";
    default:
      return "var(--zinc-600)";
  }
}

function getStatusBgColor(status: string): string {
  switch (status) {
    case "active":
      return "var(--blue-50)";
    case "idle":
      return "var(--zinc-50)";
    case "completed":
      return "var(--emerald-50)";
    default:
      return "var(--zinc-50)";
  }
}

function getStatusLabel(status: string): string {
  switch (status) {
    case "active":
      return "実行中";
    case "idle":
      return "待機中";
    case "completed":
      return "完了";
    default:
      return status;
  }
}

export default function Agents({ onNavigate }: Props) {
  const { agents } = useApp();
  const [expandedAgentId, setExpandedAgentId] = useState<string | null>(null);

  // Group agents by category
  const groupedAgents = agents.reduce((acc, agent) => {
    const group = agent.category;
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(agent);
    return acc;
  }, {} as Record<string, typeof agents>);

  const categories = Object.keys(groupedAgents).sort();

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="agents" onNavigate={onNavigate} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--zinc-200)", background: "#fff" }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "var(--zinc-900)" }}>エージェント</h1>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: 24, overflow: "auto" }}>
          {categories.map((category) => (
            <div key={category} style={{ marginBottom: 32 }}>
              <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 12 }}>{category}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
                {groupedAgents[category].map((agent) => (
                  <div
                    key={agent.id}
                    onClick={() => setExpandedAgentId(expandedAgentId === agent.id ? null : agent.id)}
                    style={{
                      background: "#fff",
                      borderRadius: 8,
                      border: "1px solid var(--zinc-200)",
                      padding: 16,
                      display: "flex",
                      flexDirection: "column",
                      gap: 12,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                      opacity: agent.status === "completed" ? 0.7 : 1,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>{agent.name}</h3>
                      <Badge color="#fff" bg={getStatusColor(agent.status)}>
                        {agent.status === "completed" ? "✓ 完了" : getStatusLabel(agent.status)}
                      </Badge>
                    </div>

                    {/* Progress Bar */}
                    <div
                      style={{
                        background: getStatusBgColor(agent.status),
                        borderRadius: 6,
                        height: 8,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          background: getStatusColor(agent.status),
                          height: "100%",
                          width: `${agent.progress}%`,
                          transition: agent.status === "active" ? "width 0.3s ease" : "none",
                        }}
                      />
                    </div>

                    <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>
                      {agent.taskCount} タスク
                    </div>

                    {/* Expanded Details */}
                    {expandedAgentId === agent.id && (
                      <div style={{ borderTop: "1px solid var(--zinc-100)", paddingTop: 12 }}>
                        <p style={{ fontSize: 13, color: "var(--zinc-600)", lineHeight: 1.5 }}>
                          {agent.description}
                        </p>
                        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 11, color: "var(--zinc-500)" }}>進捗</div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>
                              {agent.progress}%
                            </div>
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 11, color: "var(--zinc-500)" }}>ステータス</div>
                            <div style={{ fontSize: 14, fontWeight: 600, color: getStatusColor(agent.status) }}>
                              {getStatusLabel(agent.status)}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
