"use client";

import { useState } from "react";
import { useApp } from "@/context/AppContext";
import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

export default function Reports({ onNavigate }: Props) {
  const { reports, updateReport } = useApp();
  const [selectedReportId, setSelectedReportId] = useState<string | null>(reports.length > 0 ? reports[0].id : null);
  const selectedReport = reports.find(r => r.id === selectedReportId);

  const handleGoClick = () => {
    if (selectedReport) {
      updateReport(selectedReport.id, { status: "approved" });
    }
  };

  const handleNoGoClick = () => {
    if (selectedReport) {
      updateReport(selectedReport.id, { status: "rejected" });
    }
  };

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
              {reports.map((report, idx) => (
                <div
                  key={report.id}
                  onClick={() => setSelectedReportId(report.id)}
                  style={{
                    padding: 12,
                    borderBottom: idx < reports.length - 1 ? "1px solid var(--zinc-100)" : "none",
                    cursor: "pointer",
                    background: selectedReportId === report.id ? "var(--blue-50)" : "transparent",
                    borderLeft: selectedReportId === report.id ? "3px solid var(--blue-600)" : "3px solid transparent",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 4 }}>
                    {report.title}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--zinc-500)" }}>
                    {report.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Report Detail */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 12, overflow: "auto" }}>
            {selectedReport ? (
              <>
                {/* Report Header */}
                <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <h1 style={{ fontSize: 20, fontWeight: 600, color: "var(--zinc-900)" }}>
                      {selectedReport.title}
                    </h1>
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={handleGoClick}
                        style={{
                          padding: "8px 16px",
                          borderRadius: 6,
                          background: "var(--emerald-600)",
                          color: "#fff",
                          fontSize: 13,
                          fontWeight: 500,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        Go
                      </button>
                      <button
                        onClick={handleNoGoClick}
                        style={{
                          padding: "8px 16px",
                          borderRadius: 6,
                          background: "var(--zinc-200)",
                          color: "var(--zinc-900)",
                          fontSize: 13,
                          fontWeight: 500,
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        No-Go
                      </button>
                    </div>
                  </div>

                  {/* Summary Section */}
                  <div style={{ marginBottom: 16 }}>
                    <p style={{ fontSize: 14, color: "var(--zinc-600)", lineHeight: 1.5 }}>
                      {selectedReport.summary}
                    </p>
                  </div>

                  {/* Key Metrics */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                    <div
                      style={{
                        padding: 12,
                        background: "var(--blue-50)",
                        borderRadius: 6,
                        border: "1px solid var(--blue-200)",
                      }}
                    >
                      <div style={{ fontSize: 12, color: "var(--blue-700)", marginBottom: 4 }}>推奨判定</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: "var(--blue-600)" }}>
                        {selectedReport.recommendation}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: 12,
                        background: "var(--zinc-50)",
                        borderRadius: 6,
                        border: "1px solid var(--zinc-200)",
                      }}
                    >
                      <div style={{ fontSize: 12, color: "var(--zinc-500)", marginBottom: 4 }}>ROI</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: "var(--zinc-900)" }}>
                        {selectedReport.roi}
                      </div>
                    </div>
                    <div
                      style={{
                        padding: 12,
                        background: "var(--zinc-50)",
                        borderRadius: 6,
                        border: "1px solid var(--zinc-200)",
                      }}
                    >
                      <div style={{ fontSize: 12, color: "var(--zinc-500)", marginBottom: 4 }}>年間効果額</div>
                      <div style={{ fontSize: 18, fontWeight: 600, color: "var(--zinc-900)" }}>
                        {selectedReport.annualEffect}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details Table */}
                <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
                  <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)", marginBottom: 16 }}>詳細情報</h2>
                  <div style={{ overflow: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                      <thead>
                        <tr style={{ borderBottom: "1px solid var(--zinc-200)" }}>
                          <th
                            style={{
                              padding: "12px",
                              textAlign: "left",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "var(--zinc-900)",
                            }}
                          >
                            項目
                          </th>
                          <th
                            style={{
                              padding: "12px",
                              textAlign: "left",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "var(--zinc-900)",
                            }}
                          >
                            値
                          </th>
                          {selectedReport.details.some(d => d.trend) && (
                            <th
                              style={{
                                padding: "12px",
                                textAlign: "left",
                                fontSize: 13,
                                fontWeight: 600,
                                color: "var(--zinc-900)",
                              }}
                            >
                              トレンド
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {selectedReport.details.map((detail, idx) => (
                          <tr
                            key={idx}
                            style={{
                              borderBottom:
                                idx < selectedReport.details.length - 1
                                  ? "1px solid var(--zinc-100)"
                                  : "none",
                            }}
                          >
                            <td
                              style={{
                                padding: "12px",
                                fontSize: 13,
                                color: "var(--zinc-900)",
                              }}
                            >
                              {detail.label}
                            </td>
                            <td
                              style={{
                                padding: "12px",
                                fontSize: 13,
                                color: "var(--zinc-900)",
                              }}
                            >
                              {detail.value}
                            </td>
                            {detail.trend && (
                              <td
                                style={{
                                  padding: "12px",
                                  fontSize: 13,
                                  color:
                                    detail.trend === "up"
                                      ? "var(--emerald-600)"
                                      : detail.trend === "down"
                                      ? "var(--red-600)"
                                      : "var(--zinc-600)",
                                }}
                              >
                                {detail.trend === "up"
                                  ? "↑"
                                  : detail.trend === "down"
                                  ? "↓"
                                  : "→"}
                              </td>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Agent Results */}
                <div style={{ background: "#fff", borderRadius: 8, border: "1px solid var(--zinc-200)", padding: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <h2 style={{ fontSize: 16, fontWeight: 600, color: "var(--zinc-900)" }}>
                      エージェント結果
                    </h2>
                    <Badge color="#fff" bg="var(--emerald-600)">
                      {selectedReport.agentResults.length}件
                    </Badge>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {selectedReport.agentResults.map((result, idx) => (
                      <li
                        key={idx}
                        style={{
                          padding: "12px 0",
                          borderBottom:
                            idx < selectedReport.agentResults.length - 1
                              ? "1px solid var(--zinc-100)"
                              : "none",
                          fontSize: 13,
                          color: "var(--zinc-600)",
                          lineHeight: 1.5,
                        }}
                      >
                        • {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  border: "1px solid var(--zinc-200)",
                  padding: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                <span style={{ color: "var(--zinc-500)" }}>レポートを選択してください</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
