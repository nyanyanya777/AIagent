"use client";

import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

export default function Works({ onNavigate }: Props) {
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
          {/* Left Panel: 業務 List */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--zinc-200)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>業務一覧</h2>
            </div>
            <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
              {/* Item 1 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>中途採用面接</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>5h/週·採用</span>
                </div>
              </div>

              {/* Item 2 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>1on1(5名)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>3.5h/週·組織開発</span>
                </div>
              </div>

              {/* Item 3 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>社内定例</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>3h/週·会議体</span>
                </div>
              </div>

              {/* Item 4 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>勤怠管理・承認</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>2h/週·労務管理</span>
                </div>
              </div>

              {/* Item 5 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>社労士やりとり</span>
                  <Badge color="var(--amber-700)" bg="var(--amber-50)">新規</Badge>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>1.5h/週·労務管理</span>
                </div>
              </div>

              {/* Item 6 */}
              <div style={{ padding: 12, cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>退職者対応</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>1h/週·個別対応</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Chat */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Tabs */}
            <div style={{ display: "flex", gap: 16, paddingBottom: 12, borderBottom: "1px solid var(--zinc-200)" }}>
              <button style={{ fontSize: 14, fontWeight: 500, color: "var(--blue-600)", borderBottom: "2px solid var(--blue-600)", paddingBottom: 4, background: "none", border: "none", cursor: "pointer" }}>チャット</button>
              <button style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-400)", background: "none", border: "none", cursor: "pointer" }}>コンテキスト</button>
              <button style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-400)", background: "none", border: "none", cursor: "pointer" }}>アウトプット</button>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", display: "flex", flexDirection: "column", gap: 12, padding: 16, overflow: "auto" }}>
              {/* Message 1: Agent */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, background: "var(--violet-600)", borderRadius: "50%" }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>市</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>市場調査エージェント</span>
                  </div>
                  <div style={{ fontSize: 14, color: "var(--zinc-700)", background: "var(--zinc-50)", padding: "8px 12px", borderRadius: 6, maxWidth: 500 }}>
                    競合他社の採用チャネル分析が完了しました。採用単価の比較結果をお知らせします。
                  </div>
                </div>
              </div>

              {/* Message 2: Agent */}
              <div style={{ display: "flex", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, background: "var(--emerald-600)", borderRadius: "50%" }}>
                  <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>文</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)" }}>文書作成エージェント</span>
                  </div>
                  <div style={{ fontSize: 14, color: "var(--zinc-700)", background: "var(--zinc-50)", padding: "8px 12px", borderRadius: 6, maxWidth: 500 }}>
                    JD（職務記述書）の初版を作成しました。ご確認ください。
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div style={{ display: "flex", gap: 8 }}>
              <input
                type="text"
                placeholder="メッセージを入力..."
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--zinc-200)",
                  fontSize: 14,
                  background: "#fff",
                  color: "var(--zinc-900)",
                }}
              />
              <button
                style={{
                  padding: "10px 16px",
                  borderRadius: 6,
                  background: "var(--blue-600)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  border: "none",
                  cursor: "pointer",
                  minWidth: 80,
                }}
              >
                送信
              </button>
            </div>
          </div>

          {/* Right Panel: 課題 */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--zinc-200)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>課題</h2>
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
