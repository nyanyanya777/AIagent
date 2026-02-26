"use client";

import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

export default function Reports({ onNavigate }: Props) {
  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="reports" onNavigate={onNavigate} />
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--zinc-200)", background: "#fff" }}>
          <h1 style={{ fontSize: 24, fontWeight: 600, color: "var(--zinc-900)" }}>レポート</h1>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", gap: 16, padding: 16, overflow: "hidden" }}>
          {/* Left Panel: Reports List */}
          <div style={{ width: 280, display: "flex", flexDirection: "column", background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", overflow: "hidden" }}>
            <div style={{ padding: 16, borderBottom: "1px solid var(--zinc-200)" }}>
              <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>レポート一覧</h2>
            </div>
            <div style={{ flex: 1, overflow: "auto", display: "flex", flexDirection: "column" }}>
              {/* Report 1 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer", background: "var(--blue-50)", borderLeft: "3px solid var(--blue-600)" }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 4 }}>採用チャネルROI分析</div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>Updated 2h ago</div>
              </div>

              {/* Report 2 */}
              <div style={{ padding: 12, borderBottom: "1px solid var(--zinc-100)", cursor: "pointer" }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 4 }}>離職率分析</div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>Updated 1d ago</div>
              </div>

              {/* Report 3 */}
              <div style={{ padding: 12, cursor: "pointer" }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 4 }}>採用パイプライン</div>
                <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>Updated 3d ago</div>
              </div>
            </div>
          </div>

          {/* Right Panel: Report Detail */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12 }}>
            {/* Report Header */}
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <h1 style={{ fontSize: 20, fontWeight: 600, color: "var(--zinc-900)" }}>採用チャネルROI分析</h1>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ padding: "8px 16px", borderRadius: 6, background: "var(--emerald-600)", color: "#fff", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>Go</button>
                  <button style={{ padding: "8px 16px", borderRadius: 6, background: "var(--zinc-200)", color: "var(--zinc-900)", fontSize: 13, fontWeight: 500, border: "none", cursor: "pointer" }}>No-Go</button>
                </div>
              </div>

              {/* Summary */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                <div style={{ padding: 12, background: "var(--blue-50)", borderRadius: 6, border: "1px solid var(--blue-200)" }}>
                  <div style={{ fontSize: 12, color: "var(--blue-700)", marginBottom: 4 }}>推奨判定</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "var(--blue-600)" }}>Go</div>
                </div>
                <div style={{ padding: 12, background: "var(--zinc-50)", borderRadius: 6, border: "1px solid var(--zinc-200)" }}>
                  <div style={{ fontSize: 12, color: "var(--zinc-500)", marginBottom: 4 }}>ROI</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "var(--zinc-900)" }}>28%</div>
                </div>
                <div style={{ padding: 12, background: "var(--zinc-50)", borderRadius: 6, border: "1px solid var(--zinc-200)" }}>
                  <div style={{ fontSize: 12, color: "var(--zinc-500)", marginBottom: 4 }}>年間効果額</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "var(--zinc-900)" }}>¥8.2M</div>
                </div>
              </div>
            </div>

            {/* Agent Results */}
            <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)" }}>エージェント結果</h2>
                <Badge color="#fff" bg="var(--emerald-600)">3/3完了</Badge>
              </div>

              {/* Data Table */}
              <div style={{ overflow: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--zinc-200)" }}>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>チャネル</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>投資額</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>成功率</th>
                      <th style={{ padding: "12px", textAlign: "left", fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>単価</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: "1px solid var(--zinc-100)", background: "var(--blue-50)" }}>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>Indeed</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>¥850K</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>78%</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>¥6.2K</td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid var(--zinc-100)" }}>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>Wantedly</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>¥530K</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>85%</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>¥8.7K</td>
                    </tr>
                    <tr style={{ background: "var(--emerald-50)" }}>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>エージェント</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>¥2,500K</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>92%</td>
                      <td style={{ padding: "12px", fontSize: 13, color: "var(--zinc-900)" }}>¥4.1K</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
