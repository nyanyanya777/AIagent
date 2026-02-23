"use client";

import Sidebar from "./Sidebar";

interface Props {
  onNavigate: (id: string) => void;
}

export default function AccountSettings({ onNavigate }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="account" onNavigate={onNavigate} />
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--zinc-200)", background: "#fff" }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "var(--zinc-900)" }}>アカウント設定</h1>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: 24, maxWidth: 800, overflow: "auto" }}>
          {/* Profile Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>プロフィール</h2>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, background: "var(--blue-600)", borderRadius: "50%" }}>
                  <span style={{ color: "#fff", fontSize: 24, fontWeight: 600 }}>NK</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)" }}>Naito K</div>
                  <div style={{ fontSize: 14, color: "var(--zinc-500)" }}>naito.k@example.com</div>
                </div>
              </div>
              <button
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  background: "var(--zinc-100)",
                  color: "var(--zinc-900)",
                  fontSize: 13,
                  fontWeight: 500,
                  border: "1px solid var(--zinc-200)",
                  cursor: "pointer",
                }}
              >
                画像を変更
              </button>
            </div>
          </div>

          {/* Workspace Name */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>ワークスペース</h2>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 8 }}>ワークスペース名</label>
              <input
                type="text"
                placeholder="Your workspace name"
                value="naito's workspace"
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--zinc-200)",
                  fontSize: 14,
                  background: "#fff",
                  color: "var(--zinc-900)",
                  marginBottom: 16,
                  boxSizing: "border-box",
                }}
              />
              <button
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
                保存
              </button>
            </div>
          </div>

          {/* Role Settings */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>職種設定</h2>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <label style={{ display: "block", fontSize: 14, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 8 }}>現在の職種</label>
              <select
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--zinc-200)",
                  fontSize: 14,
                  background: "#fff",
                  color: "var(--zinc-900)",
                  boxSizing: "border-box",
                }}
              >
                <option>人事マネージャー</option>
                <option>人事責任者</option>
                <option>採用担当者</option>
                <option>その他</option>
              </select>
            </div>
          </div>

          {/* Plan Section */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>プラン</h2>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>現在のプラン</div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginTop: 4 }}>Free</div>
                  <div style={{ fontSize: 12, color: "var(--zinc-500)", marginTop: 4 }}>無制限の業務管理 + 基本サポート</div>
                </div>
                <button
                  style={{
                    padding: "10px 20px",
                    borderRadius: 6,
                    background: "var(--blue-600)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 500,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  アップグレード
                </button>
              </div>
            </div>
          </div>

          {/* Logout Section */}
          <div>
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <button
                style={{
                  padding: "10px 20px",
                  borderRadius: 6,
                  background: "var(--red-500)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                ログアウト
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
