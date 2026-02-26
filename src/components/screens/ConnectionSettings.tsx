"use client";

import { useApp } from "@/context/AppContext";
import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

const services = [
  { name: "Gmail", icon: "📧", email: "naito.k@example.com" },
  { name: "Slack", icon: "💬", email: "" },
  { name: "Outlook", icon: "📬", email: "" },
  { name: "Teams", icon: "👥", email: "" },
];

export default function ConnectionSettings({ onNavigate }: Props) {
  const { connections, toggleConnection } = useApp();

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="connections" onNavigate={onNavigate} />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--zinc-200)", background: "#fff" }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "var(--zinc-900)" }}>連携設定</h1>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: 24, maxWidth: 800, overflow: "auto" }}>
          {/* Services Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>
              外部サービス連携
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {services.map((service) => {
                const isConnected = connections[service.name];
                return (
                  <div
                    key={service.name}
                    style={{
                      background: "#fff",
                      borderRadius: 8,
                      border: "1px solid var(--zinc-200)",
                      padding: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      opacity: isConnected ? 1 : 0.6,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ fontSize: 24 }}>{service.icon}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>
                          {service.name}
                        </div>
                        {isConnected ? (
                          <div style={{ fontSize: 12, color: "var(--emerald-600)" }}>
                            {service.email || "連携中"}
                          </div>
                        ) : (
                          <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>未連携</div>
                        )}
                      </div>
                    </div>
                    {isConnected ? (
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <Badge color="#fff" bg="var(--emerald-600)">連携済み</Badge>
                        <button
                          onClick={() => toggleConnection(service.name)}
                          style={{
                            padding: "8px 16px",
                            borderRadius: 6,
                            background: "var(--red-500)",
                            color: "#fff",
                            fontSize: 13,
                            fontWeight: 500,
                            border: "none",
                            cursor: "pointer",
                          }}
                        >
                          切断する
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => toggleConnection(service.name)}
                        style={{
                          padding: "8px 16px",
                          borderRadius: 6,
                          background: "var(--blue-600)",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 500,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        接続する
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Data Sync Section */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>
              データ同期設定
            </h2>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Sync Range */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--zinc-900)",
                      marginBottom: 8,
                    }}
                  >
                    同期期間
                  </label>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      type="date"
                      defaultValue="2025-01-01"
                      style={{
                        padding: "8px 12px",
                        borderRadius: 6,
                        border: "1px solid var(--zinc-200)",
                        fontSize: 13,
                        background: "#fff",
                        color: "var(--zinc-900)",
                      }}
                    />
                    <span style={{ color: "var(--zinc-500)" }}>〜</span>
                    <input
                      type="date"
                      defaultValue="2025-02-25"
                      style={{
                        padding: "8px 12px",
                        borderRadius: 6,
                        border: "1px solid var(--zinc-200)",
                        fontSize: 13,
                        background: "#fff",
                        color: "var(--zinc-900)",
                      }}
                    />
                  </div>
                </div>

                {/* Sync Frequency */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--zinc-900)",
                      marginBottom: 8,
                    }}
                  >
                    同期頻度
                  </label>
                  <select
                    defaultValue="daily"
                    style={{
                      width: "100%",
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: "1px solid var(--zinc-200)",
                      fontSize: 13,
                      background: "#fff",
                      color: "var(--zinc-900)",
                    }}
                  >
                    <option value="daily">毎日</option>
                    <option value="weekly">毎週</option>
                    <option value="monthly">毎月</option>
                  </select>
                </div>

                {/* Last Sync Info */}
                <div
                  style={{
                    padding: 12,
                    background: "var(--blue-50)",
                    borderRadius: 6,
                    border: "1px solid var(--blue-200)",
                  }}
                >
                  <div style={{ fontSize: 12, color: "var(--blue-700)", marginBottom: 4 }}>最終同期</div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--blue-900)" }}>
                    2025年2月25日 10:30 GMT
                  </div>
                </div>

                {/* Save Button */}
                <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                  <button
                    style={{
                      padding: "10px 20px",
                      borderRadius: 6,
                      background: "var(--blue-600)",
                      color: "#fff",
                      fontSize: 14,
                      fontWeight: 500,
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    保存
                  </button>
                  <button
                    style={{
                      padding: "10px 20px",
                      borderRadius: 6,
                      background: "transparent",
                      color: "var(--zinc-600)",
                      fontSize: 14,
                      fontWeight: 500,
                      border: "1px solid var(--zinc-200)",
                      cursor: "pointer",
                    }}
                  >
                    キャンセル
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
