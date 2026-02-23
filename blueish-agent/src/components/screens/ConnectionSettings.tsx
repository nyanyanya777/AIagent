"use client";

import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

export default function ConnectionSettings({ onNavigate }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="connections" onNavigate={onNavigate} />
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--zinc-200)", background: "#fff" }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "var(--zinc-900)" }}>連携設定</h1>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: 24, maxWidth: 800 }}>
          {/* Connected Services Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>連携済みサービス</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {/* Gmail */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24 }}>📧</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>Gmail</div>
                    <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>naito.k@example.com</div>
                  </div>
                </div>
                <Badge color="#fff" bg="var(--emerald-600)">連携済み</Badge>
              </div>

              {/* Outlook */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: 0.6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24 }}>📬</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>Outlook</div>
                    <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>未連携</div>
                  </div>
                </div>
                <button style={{ padding: "8px 16px", borderRadius: 6, background: "var(--blue-600)", color: "#fff", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>連携する</button>
              </div>

              {/* Slack */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: 0.6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24 }}>💬</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>Slack</div>
                    <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>未連携</div>
                  </div>
                </div>
                <button style={{ padding: "8px 16px", borderRadius: 6, background: "var(--blue-600)", color: "#fff", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>連携する</button>
              </div>

              {/* Microsoft Teams */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: 0.6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ fontSize: 24 }}>👥</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>Microsoft Teams</div>
                    <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>未連携</div>
                  </div>
                </div>
                <button style={{ padding: "8px 16px", borderRadius: 6, background: "var(--blue-600)", color: "#fff", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>連携する</button>
              </div>
            </div>
          </div>

          {/* Data Range Settings Section */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>データ範囲設定</h2>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {/* Date Range */}
                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 8 }}>同期期間</label>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input
                      type="date"
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
                  <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 8 }}>同期頻度</label>
                  <select
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
                    <option>毎日</option>
                    <option>毎週</option>
                    <option>毎月</option>
                  </select>
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
