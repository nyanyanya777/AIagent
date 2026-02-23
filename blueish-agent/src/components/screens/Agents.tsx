"use client";

import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

export default function Agents({ onNavigate }: Props) {
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
          {/* Group 1: 中途採用面接 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 12 }}>中途採用面接</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {/* Agent 1 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>データ分析</h3>
                  <Badge color="#fff" bg="var(--blue-600)">80%</Badge>
                </div>
                <div style={{ background: "var(--blue-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--blue-600)", height: "100%", width: "80%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>4 tasks completed</div>
              </div>

              {/* Agent 2 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>市場調査</h3>
                  <Badge color="#fff" bg="var(--violet-600)">64%</Badge>
                </div>
                <div style={{ background: "var(--violet-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--violet-600)", height: "100%", width: "64%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>3 tasks completed</div>
              </div>

              {/* Agent 3 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>文書作成</h3>
                  <Badge color="var(--amber-700)" bg="var(--amber-50)">許可待ち</Badge>
                </div>
                <div style={{ background: "var(--amber-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--amber-700)", height: "100%", width: "0%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>Awaiting permission</div>
              </div>
            </div>
          </div>

          {/* Group 2: 労務管理 */}
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 12 }}>労務管理</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {/* Agent 1 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>法的調査</h3>
                  <Badge color="#fff" bg="var(--blue-600)">30%</Badge>
                </div>
                <div style={{ background: "var(--blue-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--blue-600)", height: "100%", width: "30%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>1 task completed</div>
              </div>

              {/* Agent 2 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>データ分析</h3>
                  <Badge color="var(--emerald-700)" bg="var(--emerald-50)">実行中</Badge>
                </div>
                <div style={{ background: "var(--emerald-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--emerald-600)", height: "100%", width: "50%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>In progress...</div>
              </div>
            </div>
          </div>

          {/* Group 3: 完了 */}
          <div>
            <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 12 }}>完了</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 12 }}>
              {/* Completed 1 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12, opacity: 0.7 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>市場調査</h3>
                  <Badge color="#fff" bg="var(--emerald-600)">採用チャネルベンチマーク</Badge>
                </div>
                <div style={{ background: "var(--emerald-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--emerald-600)", height: "100%", width: "100%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--emerald-700)", fontWeight: 500 }}>✓ 完了</div>
              </div>

              {/* Completed 2 */}
              <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 16, display: "flex", flexDirection: "column", gap: 12, opacity: 0.7 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>データ分析</h3>
                  <Badge color="#fff" bg="var(--emerald-600)">離職率分析</Badge>
                </div>
                <div style={{ background: "var(--emerald-50)", borderRadius: 6, height: 8, overflow: "hidden" }}>
                  <div style={{ background: "var(--emerald-600)", height: "100%", width: "100%" }}></div>
                </div>
                <div style={{ fontSize: 12, color: "var(--emerald-700)", fontWeight: 500 }}>✓ 完了</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
