"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Badge from "./Badge";

interface Props {
  onNavigate: (id: string) => void;
}

/* ── Empty State (Screen 7a) ── */
function EmptyState({ onActivate }: { onActivate: () => void }) {
  const suggestions = [
    { title: "今日の業務状況を教えて", desc: "進行中の業務と確認待ち項目をサマリー" },
    { title: "採用データを分析して", desc: "最新の採用チャネルROIを比較分析" },
    { title: "JDをレビューして", desc: "職務記述書と実際の業務内容の差分を確認" },
  ];

  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* Chat Column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Chat Header */}
        <div style={{ display: "flex", alignItems: "center", height: 50, padding: "0 16px", borderBottom: "1px solid var(--zinc-200)" }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェント</span>
        </div>

        {/* Messages Area — empty */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px 20px", gap: 24 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, textAlign: "center" }}>
            <span style={{ fontSize: 22, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェントへようこそ 👋</span>
            <span style={{ fontSize: 15, color: "var(--zinc-500)", whiteSpace: "pre-line" }}>
              {"業務に関する質問や指示を入力してください。\nエージェントが自動で調査・分析・実行します。"}
            </span>
          </div>

          <div style={{ display: "flex", gap: 12 }}>
            {suggestions.map((s) => (
              <div
                key={s.title}
                onClick={onActivate}
                style={{ padding: "12px 16px", background: "#fff", border: "1px solid var(--zinc-200)", borderRadius: 8, cursor: "pointer", width: 220 }}
              >
                <div style={{ fontSize: 14, fontWeight: 500, color: "var(--zinc-900)", marginBottom: 4 }}>{s.title}</div>
                <div style={{ fontSize: 13, color: "var(--zinc-400)" }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div style={{ padding: "12px 20px 16px 20px" }}>
          <div style={{ border: "1px solid var(--zinc-300)", borderRadius: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px" }}>
              <span style={{ fontSize: 14, color: "var(--zinc-400)", flex: 1 }}>メインエージェントにメッセージを送信</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", borderTop: "1px solid var(--zinc-200)" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 16, height: 16, background: "var(--zinc-300)", borderRadius: 2 }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 16, height: 16, background: "var(--zinc-300)", borderRadius: 2 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Panel — empty */}
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
    </div>
  );
}

/* ── Populated State (Screen 7) ── */
function PopulatedState() {
  return (
    <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
      {/* Chat Column */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Chat Header */}
        <div style={{ display: "flex", alignItems: "center", height: 50, padding: "0 16px", borderBottom: "1px solid var(--zinc-200)" }}>
          <span style={{ fontSize: 16, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェント</span>
        </div>

        {/* Messages Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0, padding: "16px 20px", overflow: "auto" }}>
          {/* Divider: 今日 */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0" }}>
            <div style={{ flex: 1, height: 1, background: "var(--zinc-200)" }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--zinc-400)" }}>今日</span>
            <div style={{ flex: 1, height: 1, background: "var(--zinc-200)" }} />
          </div>

          {/* msg1: メインエージェント — 概況 */}
          <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 16 }}>🤖</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェント</span>
                <Badge color="var(--violet-600)" bg="var(--violet-50)">APP</Badge>
                <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>9:00</span>
              </div>
              <span style={{ fontSize: 15, color: "var(--zinc-900)" }}>おはようございます。本日の概況をお伝えします。</span>
              {/* Attachment: 本日のサマリー */}
              <div style={{ background: "var(--zinc-50)", borderRadius: 8, padding: "12px 16px", width: 360, display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>📊 本日のサマリー</span>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>進行中の業務</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>4件</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>確認待ち</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#d97706" }}>1件</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>全体進捗</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>37%</span>
                </div>
              </div>
            </div>
          </div>

          {/* msg2: follow-up (no avatar) */}
          <div style={{ display: "flex", gap: 12, padding: "4px 0" }}>
            <div style={{ width: 36, height: 1, flexShrink: 0 }} />
            <span style={{ fontSize: 15, color: "var(--zinc-900)", flex: 1 }}>
              中途採用面接が先週比+60%です。JD（職務記述書）は現在の業務実態と合っていますか？
            </span>
          </div>

          {/* msg3: User — Naito K */}
          <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--zinc-900)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>NK</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--zinc-900)" }}>Naito K</span>
                <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>9:06</span>
              </div>
              <span style={{ fontSize: 15, color: "var(--zinc-900)" }}>確認したい。JDの差分を分析して</span>
            </div>
          </div>

          {/* msg4: Agent — task */}
          <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 16 }}>🤖</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: "var(--zinc-900)" }}>メインエージェント</span>
                <Badge color="var(--violet-600)" bg="var(--violet-50)">APP</Badge>
                <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>9:06</span>
              </div>
              <span style={{ fontSize: 15, color: "var(--zinc-900)" }}>承知しました。「JD vs 実態の差分分析」エージェントを起動しました。</span>
              {/* Task Attachment */}
              <div style={{ display: "flex", width: 380, borderRadius: 6, border: "1px solid var(--zinc-200)", overflow: "hidden", marginTop: 4 }}>
                <div style={{ width: 4, background: "var(--violet-600)", flexShrink: 0 }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 6, padding: "10px 12px", flex: 1 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--violet-600)" }}>JD vs 実態の差分分析</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>実行中</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 100, height: 6, background: "var(--secondary)", borderRadius: 9999, overflow: "hidden" }}>
                        <div style={{ width: 65, height: 6, background: "var(--primary)", borderRadius: 9999 }} />
                      </div>
                      <span style={{ fontSize: 13, color: "var(--zinc-500)" }}>65%</span>
                    </div>
                    <span style={{ fontSize: 13, color: "var(--zinc-400)" }}>• 残り約5分</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* msg5: 検知 */}
          <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 16 }}>🤖</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>メインエージェント</span>
                <Badge color="var(--violet-700)" bg="#ede9fe">検知</Badge>
                <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>10:45</span>
              </div>
              <span style={{ fontSize: 14, color: "var(--zinc-700)" }}>📊 面接が先週比+60%増えています。JDは実態と合っていますか？</span>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                {["ズレてきた", "問題ない", "データを見る"].map((label) => (
                  <span key={label} style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-700)", background: "var(--zinc-100)", borderRadius: 9999, padding: "6px 14px", cursor: "pointer" }}>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* msg6: 許可 */}
          <div style={{ display: "flex", gap: 12, padding: "8px 0" }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "#ede9fe", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 16 }}>🤖</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--zinc-900)" }}>メインエージェント</span>
                <Badge color="#92400e" bg="#fef3c7">許可</Badge>
                <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>11:02</span>
              </div>
              <span style={{ fontSize: 14, color: "var(--zinc-700)" }}>サブエージェントがJDの改定を完了しました。公開の許可が必要です。</span>
              {/* Permission Card */}
              <div style={{ background: "#f5f3ff", border: "1px solid #8b5cf6", borderRadius: 8, padding: 16, width: 420, display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--zinc-900)" }}>JDをIndeedに公開していいですか？</span>
                </div>
                <span style={{ fontSize: 13, color: "var(--zinc-600)" }}>営業職JD_v2.docxをIndeedに公開します。公開後は取り消せません。</span>
                <div style={{ display: "flex", gap: 8 }}>
                  <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "var(--primary)", color: "var(--primary-foreground)", borderRadius: 6, border: "none", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>許可する</button>
                  <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "var(--background)", color: "var(--foreground)", borderRadius: 6, border: "1px solid var(--zinc-200)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>却下する</button>
                  <button style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", background: "var(--background)", color: "var(--foreground)", borderRadius: 6, border: "1px solid var(--zinc-200)", fontSize: 14, fontWeight: 500, cursor: "pointer" }}>詳細を見る</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div style={{ padding: "12px 20px 16px 20px" }}>
          <div style={{ border: "1px solid var(--zinc-300)", borderRadius: 10 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px" }}>
              <span style={{ fontSize: 14, color: "var(--zinc-400)", flex: 1 }}>メインエージェントにメッセージを送信</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", borderTop: "1px solid var(--zinc-200)" }}>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3].map((i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 16, height: 16, background: "var(--zinc-300)", borderRadius: 2 }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 4 }}>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} style={{ width: 28, height: 28, borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 16, height: 16, background: "var(--zinc-300)", borderRadius: 2 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Panel — populated */}
      <div style={{ width: 400, borderLeft: "1px solid var(--zinc-200)", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, height: 50, padding: "0 16px", borderBottom: "1px solid var(--zinc-200)" }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--zinc-900)" }}>進行中</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: "var(--zinc-600)", background: "var(--zinc-100)", borderRadius: 9999, padding: "2px 8px" }}>5</span>
        </div>

        <div style={{ flex: 1, overflow: "auto" }}>
          {/* Google Calendar Section */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "var(--zinc-50)", borderBottom: "1px solid var(--zinc-100)" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-500)" }}>Google カレンダー</span>
            <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>3</span>
          </div>
          {/* Cal 1 */}
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>中途採用・一次面接（鈴木様）</span>
              <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>10:00</span>
            </div>
            <div style={{ display: "flex", gap: 4, fontSize: 12, color: "var(--zinc-400)" }}>
              <span>Google Meet</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>田中, 山田</span>
            </div>
          </div>
          {/* Cal 2 */}
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>採用チーム定例ミーティング</span>
              <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>13:00</span>
            </div>
            <div style={{ display: "flex", gap: 4, fontSize: 12, color: "var(--zinc-400)" }}>
              <span>6F 会議室A</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>採用G全員</span>
            </div>
          </div>
          {/* Cal 3 */}
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>就業規則改定 レビュー会</span>
              <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>15:30</span>
            </div>
            <div style={{ display: "flex", gap: 4, fontSize: 12, color: "var(--zinc-400)" }}>
              <span>Google Meet</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>法務部, 人事部</span>
            </div>
          </div>

          {/* Slack Section */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", background: "var(--zinc-50)", borderBottom: "1px solid var(--zinc-100)" }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: "var(--zinc-500)" }}>Slack</span>
            <span style={{ fontSize: 12, color: "var(--zinc-400)" }}>2</span>
          </div>
          {/* Slack 1 */}
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>#採用チャネル でメンション</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#ef4444", background: "#fef2f2", borderRadius: 9999, padding: "2px 8px" }}>未読</span>
            </div>
            <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>@Naito 来週のROIレポートの締切確認です</span>
            <div style={{ display: "flex", gap: 4, fontSize: 11, color: "var(--zinc-400)" }}>
              <span>田中</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>9:42</span>
            </div>
          </div>
          {/* Slack 2 */}
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--zinc-100)", display: "flex", flexDirection: "column", gap: 4 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--zinc-900)" }}>#人事部全体 でメンション</span>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#ef4444", background: "#fef2f2", borderRadius: 9999, padding: "2px 8px" }}>未読</span>
            </div>
            <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>@Naito 新卒採用の予算承認お願いします</span>
            <div style={{ display: "flex", gap: 4, fontSize: 11, color: "var(--zinc-400)" }}>
              <span>山田</span><span style={{ color: "var(--zinc-300)" }}>・</span><span>8:15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Dashboard Component ── */
export default function Dashboard({ onNavigate }: Props) {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div style={{ display: "flex", height: "100vh", background: "var(--zinc-50)" }}>
      <Sidebar active="dashboard" onNavigate={onNavigate} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {isEmpty ? (
          <EmptyState onActivate={() => setIsEmpty(false)} />
        ) : (
          <PopulatedState />
        )}
      </div>
    </div>
  );
}
