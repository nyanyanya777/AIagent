import { useState, useEffect } from "react";

// ========================================
// Blueish Agent - Pencil Design 忠実再現
// ========================================

// Design Tokens (from AIagent.pen theme variables)
const T = {
  zinc50: "#fafafa", zinc100: "#f4f4f5", zinc200: "#e4e4e7", zinc300: "#d4d4d8",
  zinc400: "#a1a1aa", zinc500: "#71717a", zinc600: "#52525b", zinc700: "#3f3f46", zinc900: "#18181b",
  blue50: "#eff6ff", blue100: "#dbeafe", blue200: "#bfdbfe", blue600: "#2563eb", blue700: "#1d4ed8",
  blueish: "#4a9eed",
  emerald500: "#22c55e", emerald700: "#15803d",
  amber50: "#fef3c7", amber500: "#f59e0b", amber700: "#92400e", amber800: "#854d0e",
  violet50: "#f5f3ff", violet500: "#8b5cf6", violet600: "#7c3aed", violet700: "#6d28d9",
  red500: "#ef4444",
  white: "#ffffff",
  green600: "#16a34a",
  dc2626: "#dc2626",
  d97706: "#d97706",
};

// Common styles
const center = { display:"flex", alignItems:"center", justifyContent:"center" };
const col = { display:"flex", flexDirection:"column" };
const row = { display:"flex", flexDirection:"row", alignItems:"center" };

// ========================================
// Screen 1: Sign Up
// ========================================
function SignUpScreen({ onNext }) {
  return (
    <div style={{ ...center, width:"100%", height:"100%", background:T.zinc50 }}>
      <div style={{ ...col, alignItems:"center", width:400, gap:24 }}>
        {/* Logo */}
        <div style={{ ...center, width:48, height:48, background:T.zinc900, borderRadius:8 }}>
          <span style={{ color:T.white, fontSize:16, fontWeight:600 }}>B</span>
        </div>
        {/* Brand */}
        <div style={{ ...col, alignItems:"center", gap:8 }}>
          <h1 style={{ fontSize:24, fontWeight:700, color:T.zinc900, margin:0 }}>Blueish Agent</h1>
          <p style={{ fontSize:14, fontWeight:400, color:T.zinc500, margin:0, textAlign:"center" }}>
            あなたの仕事を、あなたの代わりに理解して、動かす
          </p>
        </div>
        {/* Google SSO */}
        <button onClick={onNext} style={{ ...center, gap:8, width:"100%", padding:"10px 16px", background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:6, cursor:"pointer", fontSize:14, fontWeight:500, color:T.zinc900 }}>
          <svg width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.99-.15-1.17z" fill="#4285F4"/><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853"/><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"/><path d="M8.98 3.58c1.32 0 2.2.57 2.7 1.05l2.01-1.97A7.13 7.13 0 008.98 1a8 8 0 00-7.15 4.41l2.67 2.07A4.76 4.76 0 018.98 3.58z" fill="#EA4335"/></svg>
          Googleで始める
        </button>
        {/* Divider */}
        <div style={{ ...row, width:"100%", gap:12 }}>
          <div style={{ flex:1, height:1, background:T.zinc200 }} />
          <span style={{ fontSize:14, color:T.zinc400 }}>or</span>
          <div style={{ flex:1, height:1, background:T.zinc200 }} />
        </div>
        {/* Email input */}
        <div style={{ ...col, width:"100%", gap:6 }}>
          <label style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>メールアドレス</label>
          <input type="email" placeholder="メールアドレス" style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.zinc200}`, borderRadius:6, fontSize:14, color:T.zinc900, background:T.white, outline:"none", boxSizing:"border-box" }} />
        </div>
        {/* Submit */}
        <button onClick={onNext} style={{ ...center, width:"100%", padding:"10px 16px", background:T.zinc900, color:T.white, border:"none", borderRadius:6, cursor:"pointer", fontSize:14, fontWeight:500 }}>
          アカウント作成
        </button>
        {/* Login link */}
        <span style={{ fontSize:14, color:T.blue600, cursor:"pointer" }}>既にアカウントをお持ちの方</span>
      </div>
    </div>
  );
}

// ========================================
// Step Indicator (shared by onboarding)
// ========================================
function StepDots({ current, total = 5 }) {
  return (
    <div style={{ ...row, gap:8 }}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{ width: i === current ? 10 : 8, height: i === current ? 10 : 8, borderRadius: "50%", background: i === current ? T.blueish : T.zinc300 }} />
      ))}
    </div>
  );
}

// ========================================
// Screen 2: Integration Selection
// ========================================
function IntegrationScreen({ onNext }) {
  const [selected, setSelected] = useState(["gmail"]);
  const tools = [
    { id:"gmail", name:"Gmail", desc:"メール+カレンダー" },
    { id:"slack", name:"Slack", desc:"チャット履歴" },
    { id:"outlook", name:"Outlook", desc:"メール+カレンダー" },
    { id:"teams", name:"Teams", desc:"チャット履歴" },
  ];
  const toggle = (id) => setSelected(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);

  return (
    <div style={{ ...center, width:"100%", height:"100%", background:T.zinc50 }}>
      <div style={{ ...col, alignItems:"center", width:480, gap:32 }}>
        <StepDots current={1} />
        <div style={{ ...col, alignItems:"center", gap:8 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>あなたの業務を読み取ります</h2>
          <p style={{ fontSize:14, color:T.zinc500, margin:0 }}>連携するツールを選んでください（複数可）</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, width:"100%" }}>
          {tools.map(t => (
            <div key={t.id} onClick={() => toggle(t.id)} style={{ ...row, gap:12, padding:"16px", border:`1px solid ${selected.includes(t.id) ? T.blueish : T.zinc200}`, borderRadius:8, background: selected.includes(t.id) ? T.blue50 : T.white, cursor:"pointer" }}>
              <div style={{ ...center, width:36, height:36, borderRadius:6, background:T.zinc100, flexShrink:0 }}>
                <span style={{ fontSize:14, fontWeight:500 }}>{t.name[0]}</span>
              </div>
              <div style={{ ...col, gap:2 }}>
                <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>{t.name}</span>
                <span style={{ fontSize:14, color:T.zinc400 }}>{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={onNext} style={{ ...center, width:"100%", padding:"10px 16px", background:T.zinc900, color:T.white, border:"none", borderRadius:6, cursor:"pointer", fontSize:14, fontWeight:500 }}>
          連携して次へ
        </button>
        <span onClick={onNext} style={{ fontSize:14, color:T.zinc400, cursor:"pointer" }}>あとで連携する</span>
      </div>
    </div>
  );
}

// ========================================
// Screen 3: Role Selection
// ========================================
function RoleScreen({ onNext }) {
  const [selected, setSelected] = useState([]);
  const roles = ["人事・労務","営業","開発・エンジニア","経営・役員","カスタマーサポート","経理・財務","マーケティング","デザイン","総務・法務","プロジェクト管理"];
  const toggle = (r) => setSelected(s => s.includes(r) ? s.filter(x=>x!==r) : [...s, r]);

  return (
    <div style={{ ...center, width:"100%", height:"100%", background:T.zinc50 }}>
      <div style={{ ...col, alignItems:"center", width:520, gap:32 }}>
        <StepDots current={2} />
        <div style={{ ...col, alignItems:"center", gap:8 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>あなたの職種を教えてください</h2>
          <p style={{ fontSize:14, color:T.zinc500, margin:0 }}>業務の読み取り精度が上がります（複数選択可）</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, width:"100%" }}>
          {roles.map(r => (
            <div key={r} onClick={() => toggle(r)} style={{ ...row, gap:10, padding:"12px 16px", border:`1px solid ${selected.includes(r) ? T.blueish : T.zinc200}`, borderRadius:8, background: selected.includes(r) ? T.blue50 : T.white, cursor:"pointer" }}>
              <div style={{ width:16, height:16, borderRadius:4, border:`2px solid ${selected.includes(r) ? T.blueish : T.zinc300}`, background: selected.includes(r) ? T.blueish : "transparent", ...center, flexShrink:0 }}>
                {selected.includes(r) && <span style={{ color:T.white, fontSize:10 }}>✓</span>}
              </div>
              <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>{r}</span>
            </div>
          ))}
        </div>
        <button onClick={onNext} style={{ ...center, width:"100%", padding:"10px 16px", background:T.zinc900, color:T.white, border:"none", borderRadius:6, cursor:"pointer", fontSize:14, fontWeight:500 }}>
          次へ
        </button>
        <span onClick={onNext} style={{ fontSize:14, color:T.zinc400, cursor:"pointer" }}>スキップする（データから自動推定します）</span>
      </div>
    </div>
  );
}

// ========================================
// Screen 4: Task Selection
// ========================================
function TaskScreen({ onNext }) {
  const [checked, setChecked] = useState([]);
  const toggle = (t) => setChecked(s => s.includes(t) ? s.filter(x=>x!==t) : [...s, t]);
  const sections = [
    { label:"採用", tasks:["中途採用（面接・書類選考）","新卒採用（説明会・インターン）","採用媒体の管理・運用"] },
    { label:"労務管理", tasks:["勤怠管理・有給承認","給与計算・明細確認","社労士・外部専門家とのやりとり","就業規則・社内規程の管理","36協定・届出関連"] },
    { label:"組織開発", tasks:["1on1・メンバーとの定期面談","評価・査定・目標設定","研修・教育・オンボーディング"] },
    { label:"会議", tasks:["社内定例ミーティング","経営会議"] },
    { label:"その他", tasks:["退職者対応・引き継ぎ","労務トラブル・ハラスメント対応","異動・配置転換"] },
  ];

  return (
    <div style={{ ...center, width:"100%", height:"100%", background:T.zinc50, overflow:"auto" }}>
      <div style={{ ...col, alignItems:"center", width:520, gap:24, padding:"40px 0" }}>
        <StepDots current={3} />
        <div style={{ ...col, alignItems:"center", gap:8 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>普段やっている業務を選んでください</h2>
          <p style={{ fontSize:14, color:T.zinc500, margin:0 }}>選ばなかったものもデータから検出されれば提案します</p>
        </div>
        <div style={{ ...col, width:"100%", gap:20 }}>
          {sections.map(sec => (
            <div key={sec.label} style={{ ...col, gap:8 }}>
              <span style={{ fontSize:14, fontWeight:500, color:T.zinc500 }}>{sec.label}</span>
              <div style={{ ...col, gap:4 }}>
                {sec.tasks.map(t => (
                  <div key={t} onClick={() => toggle(t)} style={{ ...row, gap:10, padding:"8px 12px", borderRadius:6, cursor:"pointer", background: checked.includes(t) ? T.blue50 : "transparent" }}>
                    <div style={{ width:16, height:16, borderRadius:4, border:`2px solid ${checked.includes(t) ? T.blueish : T.zinc300}`, background: checked.includes(t) ? T.blueish : "transparent", ...center, flexShrink:0 }}>
                      {checked.includes(t) && <span style={{ color:T.white, fontSize:10 }}>✓</span>}
                    </div>
                    <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={onNext} style={{ ...center, width:"100%", padding:"10px 16px", background:T.zinc900, color:T.white, border:"none", borderRadius:6, cursor:"pointer", fontSize:14, fontWeight:500 }}>
          分析を開始
        </button>
        <span onClick={onNext} style={{ fontSize:14, color:T.zinc400, cursor:"pointer" }}>スキップする（データから自動検出します）</span>
      </div>
    </div>
  );
}

// ========================================
// Screen 5: Analyzing
// ========================================
function AnalyzingScreen({ onNext }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setProgress(p => { if (p >= 100) { clearInterval(iv); setTimeout(onNext, 800); return 100; } return p + 2; }), 80);
    return () => clearInterval(iv);
  }, [onNext]);

  const steps = [
    { text:"カレンダー 3ヶ月分を取得しました", color:T.emerald700, done: progress > 20 },
    { text:"メール 1,247通を分析しました", color:T.emerald700, done: progress > 45 },
    { text:"パターンを抽出しています...", color:T.blueish, done: false, active: progress > 45 && progress <= 75 },
    { text:"業務プロファイルを生成中", color:T.zinc400, done: false, active: progress > 75 },
  ];

  return (
    <div style={{ ...center, width:"100%", height:"100%", background:T.zinc50 }}>
      <div style={{ ...col, alignItems:"center", width:480, gap:32 }}>
        <StepDots current={4} />
        <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>あなたの業務を読み取っています...</h2>
        {/* Progress bar */}
        <div style={{ width:"100%", height:6, background:T.zinc200, borderRadius:9999, overflow:"hidden" }}>
          <div style={{ width:`${progress}%`, height:"100%", background:T.zinc900, borderRadius:9999, transition:"width 0.3s" }} />
        </div>
        {/* Steps */}
        <div style={{ ...col, width:"100%", gap:12 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ ...row, gap:10 }}>
              <span style={{ fontSize:14 }}>{s.done ? "✓" : s.active ? "◉" : "○"}</span>
              <span style={{ fontSize:14, color: s.done ? s.color : s.active ? s.color : T.zinc400 }}>{s.text}</span>
            </div>
          ))}
        </div>
        {/* Preview card */}
        {progress > 60 && (
          <div style={{ width:"100%", padding:16, background:T.amber50, borderRadius:8, ...col, gap:8 }}>
            <span style={{ fontSize:14, fontWeight:500, color:T.amber700 }}>プレビュー</span>
            <span style={{ fontSize:16, color:T.amber800 }}>会議が週12件 / メールの40%が社内 / 定例が最頻パターン</span>
          </div>
        )}
      </div>
    </div>
  );
}

// ========================================
// Sidebar Component (shared by main app)
// ========================================
function Sidebar({ active, onNavigate }) {
  const items = [
    { id:"dashboard", label:"Dashboard", icon:"📊" },
    { id:"works", label:"業務", icon:"📋" },
    { id:"agents", label:"エージェント", icon:"🤖" },
    { id:"reports", label:"レポート", icon:"📄" },
    { id:"connections", label:"連携設定", icon:"🔗" },
    { id:"account", label:"アカウント", icon:"👤" },
  ];

  return (
    <div style={{ width:256, height:"100%", background:T.zinc50, borderRight:`1px solid ${T.zinc200}`, ...col, justifyContent:"space-between", flexShrink:0 }}>
      <div style={{ ...col, gap:4 }}>
        {/* Logo area */}
        <div style={{ ...row, gap:10, padding:"16px 16px 12px" }}>
          <div style={{ ...center, width:32, height:32, background:T.zinc900, borderRadius:6 }}>
            <span style={{ color:T.white, fontSize:12, fontWeight:600 }}>B</span>
          </div>
          <div style={{ ...col }}>
            <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>Blueish Agent</span>
            <span style={{ fontSize:12, color:T.zinc500 }}>naito's workspace</span>
          </div>
        </div>
        {/* Nav items */}
        <div style={{ ...col, gap:2, padding:"0 8px" }}>
          {items.map(it => (
            <div key={it.id} onClick={() => onNavigate(it.id)} style={{ ...row, gap:10, padding:"8px 12px", borderRadius:6, cursor:"pointer", background: active === it.id ? T.zinc200 : "transparent" }}>
              <span style={{ fontSize:14 }}>{it.icon}</span>
              <span style={{ fontSize:14, color:T.zinc900 }}>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div style={{ ...col, gap:8, padding:16, borderTop:`1px solid ${T.zinc200}` }}>
        <div style={{ ...row, gap:8 }}>
          <div style={{ ...center, width:28, height:28, borderRadius:"50%", background:T.zinc900 }}>
            <span style={{ color:T.white, fontSize:11, fontWeight:600 }}>PJ</span>
          </div>
          <span style={{ fontSize:12, color:T.zinc500 }}>● Gmail 連携中</span>
        </div>
        <span style={{ fontSize:12, color:T.zinc500, paddingLeft:36 }}>最終同期: 5分前</span>
      </div>
    </div>
  );
}

// ========================================
// Badge component
// ========================================
function Badge({ children, color, bg }) {
  return (
    <span style={{ display:"inline-flex", padding:"2px 8px", borderRadius:9999, fontSize:11, fontWeight:600, color, background: bg || "transparent" }}>
      {children}
    </span>
  );
}

// Chat message component
function ChatMsg({ sender, badge, avatar, isUser, time, children }) {
  return (
    <div style={{ ...col, gap:4 }}>
      <div style={{ ...row, gap:8 }}>
        {isUser ? (
          <div style={{ ...center, width:28, height:28, borderRadius:"50%", background:T.blueish, flexShrink:0 }}>
            <span style={{ color:T.white, fontSize:11, fontWeight:600 }}>{avatar}</span>
          </div>
        ) : null}
        <span style={{ fontSize:15, fontWeight:700, color:T.zinc900 }}>{sender}</span>
        {badge && <Badge color={badge.color} bg={badge.bg || T.violet50}>{badge.text}</Badge>}
        <span style={{ fontSize:12, color:T.zinc400 }}>{time}</span>
      </div>
      <div style={{ paddingLeft: isUser ? 36 : 0 }}>{children}</div>
    </div>
  );
}

// ========================================
// Screen 7: Dashboard
// ========================================
function DashboardScreen({ onNavigate }) {
  return (
    <div style={{ ...row, width:"100%", height:"100%", background:T.zinc50 }}>
      <Sidebar active="dashboard" onNavigate={onNavigate} />
      <div style={{ flex:1, ...row, height:"100%", overflow:"hidden" }}>
        {/* Chat area */}
        <div style={{ flex:1, ...col, borderRight:`1px solid ${T.zinc200}` }}>
          <div style={{ ...row, gap:8, padding:"16px 24px", borderBottom:`1px solid ${T.zinc200}` }}>
            <span style={{ fontSize:16, fontWeight:700, color:T.zinc900 }}>メインエージェント</span>
          </div>
          <div style={{ flex:1, overflow:"auto", padding:"16px 24px", ...col, gap:16 }}>
            <span style={{ fontSize:12, fontWeight:600, color:T.zinc400, textAlign:"center" }}>今日</span>
            {/* Agent message 1 */}
            <ChatMsg sender="メインエージェント" badge={{ text:"APP", color:T.violet600 }} time="9:00">
              <p style={{ fontSize:15, color:T.zinc900, margin:0 }}>おはようございます。本日の概況をお伝えします。</p>
              <div style={{ background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8, padding:12, marginTop:8, ...col, gap:4 }}>
                <span style={{ fontSize:14, fontWeight:600, color:T.zinc900 }}>📊 本日のサマリー</span>
                <div style={{ ...row, gap:16, marginTop:4 }}>
                  <span style={{ fontSize:13, color:T.zinc500 }}>進行中の業務 <b style={{ color:T.zinc900 }}>4件</b></span>
                  <span style={{ fontSize:13, color:T.zinc500 }}>確認待ち <b style={{ color:T.d97706 }}>1件</b></span>
                  <span style={{ fontSize:13, color:T.zinc500 }}>全体進捗 <b style={{ color:T.zinc900 }}>37%</b></span>
                </div>
              </div>
              <p style={{ fontSize:15, color:T.zinc900, margin:"8px 0 0" }}>中途採用面接が先週比+60%です。JD（職務記述書）は現在の業務実態と合っていますか？</p>
            </ChatMsg>
            {/* User message */}
            <ChatMsg sender="Naito K" avatar="NK" isUser time="9:06">
              <p style={{ fontSize:15, color:T.zinc900, margin:0 }}>確認したい。JDの差分を分析して</p>
            </ChatMsg>
            {/* Agent message 2 */}
            <ChatMsg sender="メインエージェント" badge={{ text:"APP", color:T.violet600 }} time="9:06">
              <p style={{ fontSize:15, color:T.zinc900, margin:0 }}>承知しました。「JD vs 実態の差分分析」エージェントを起動しました。</p>
              <div style={{ background:T.violet50, border:`1px solid ${T.zinc200}`, borderRadius:8, padding:12, marginTop:8, ...row, justifyContent:"space-between" }}>
                <div style={{ ...col, gap:4 }}>
                  <span style={{ fontSize:14, fontWeight:600, color:T.violet600 }}>JD vs 実態の差分分析</span>
                  <span style={{ fontSize:13, color:T.zinc500 }}>実行中 · 65%</span>
                </div>
                <span style={{ fontSize:13, color:T.zinc400 }}>• 残り約5分</span>
              </div>
            </ChatMsg>
            {/* Detection message */}
            <ChatMsg sender="メインエージェント" badge={{ text:"検知", color:T.violet700, bg:T.violet50 }} time="10:45">
              <p style={{ fontSize:14, color:T.zinc700, margin:0 }}>📊 面接が先週比+60%増えています。JDは実態と合っていますか？</p>
              <div style={{ ...row, gap:8, marginTop:8 }}>
                {["ズレてきた","問題ない","データを見る"].map(t => (
                  <button key={t} style={{ padding:"6px 12px", borderRadius:6, border:`1px solid ${T.zinc200}`, background:T.white, fontSize:13, fontWeight:500, color:T.zinc700, cursor:"pointer" }}>{t}</button>
                ))}
              </div>
            </ChatMsg>
            {/* Permission message */}
            <ChatMsg sender="メインエージェント" badge={{ text:"許可", color:T.amber700, bg:T.amber50 }} time="11:02">
              <p style={{ fontSize:14, color:T.zinc700, margin:0 }}>サブエージェントがJDの改定を完了しました。公開の許可が必要です。</p>
              <div style={{ background:T.blue50, border:`1px solid ${T.zinc200}`, borderRadius:8, padding:12, marginTop:8, ...col, gap:6 }}>
                <span style={{ fontSize:14, fontWeight:600, color:T.zinc900 }}>JDをIndeedに公開していいですか？</span>
                <span style={{ fontSize:13, color:T.zinc600 }}>営業職JD_v2.docxをIndeedに公開します。公開後は取り消せません。</span>
                <div style={{ ...row, gap:8, marginTop:4 }}>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.zinc900, color:T.white, border:"none", fontSize:14, fontWeight:500, cursor:"pointer" }}>許可する</button>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>却下する</button>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>詳細を見る</button>
                </div>
              </div>
            </ChatMsg>
          </div>
          <div style={{ padding:"12px 24px", borderTop:`1px solid ${T.zinc200}` }}>
            <input placeholder="メインエージェントにメッセージを送信" style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.zinc200}`, borderRadius:6, fontSize:14, color:T.zinc900, background:T.white, outline:"none", boxSizing:"border-box" }} />
          </div>
        </div>
        {/* Right panel - Progress */}
        <div style={{ width:360, ...col, padding:"16px", overflow:"auto" }}>
          <div style={{ ...row, justifyContent:"space-between", marginBottom:16 }}>
            <span style={{ fontSize:15, fontWeight:600, color:T.zinc900 }}>進行中</span>
            <Badge color={T.zinc600} bg={T.zinc100}>5</Badge>
          </div>
          {/* Calendar section */}
          <div style={{ ...col, gap:8, marginBottom:16 }}>
            <div style={{ ...row, justifyContent:"space-between" }}>
              <span style={{ fontSize:12, fontWeight:500, color:T.zinc500 }}>Google カレンダー</span>
              <span style={{ fontSize:12, color:T.zinc400 }}>3</span>
            </div>
            {[
              { title:"中途採用・一次面接（鈴木様）", time:"10:00", place:"Google Meet", people:"田中, 山田" },
              { title:"採用チーム定例ミーティング", time:"13:00", place:"6F 会議室A", people:"採用G全員" },
              { title:"就業規則改定 レビュー会", time:"15:30", place:"Google Meet", people:"法務部, 人事部" },
            ].map((ev, i) => (
              <div key={i} style={{ ...col, gap:2, padding:"8px 0", borderBottom: i < 2 ? `1px solid ${T.zinc100}` : "none" }}>
                <span style={{ fontSize:13, fontWeight:500, color:T.zinc900 }}>{ev.title}</span>
                <div style={{ ...row, gap:4 }}>
                  <span style={{ fontSize:12, color:T.zinc500 }}>{ev.time}</span>
                  <span style={{ fontSize:12, color:T.zinc400 }}>{ev.place}</span>
                  <span style={{ fontSize:12, color:T.zinc300 }}>·</span>
                  <span style={{ fontSize:12, color:T.zinc400 }}>{ev.people}</span>
                </div>
              </div>
            ))}
          </div>
          {/* Slack section */}
          <div style={{ ...col, gap:8 }}>
            <div style={{ ...row, justifyContent:"space-between" }}>
              <span style={{ fontSize:12, fontWeight:500, color:T.zinc500 }}>Slack</span>
              <span style={{ fontSize:12, color:T.zinc400 }}>2</span>
            </div>
            {[
              { ch:"#採用チャネル でメンション", msg:"@Naito 来週のROIレポートの締切確認です", from:"田中", time:"9:42" },
              { ch:"#人事部全体 でメンション", msg:"@Naito 新卒採用の予算承認お願いします", from:"山田", time:"8:15" },
            ].map((sl, i) => (
              <div key={i} style={{ ...col, gap:2, padding:"8px 0", borderBottom: i < 1 ? `1px solid ${T.zinc100}` : "none" }}>
                <div style={{ ...row, gap:6 }}>
                  <span style={{ fontSize:13, fontWeight:500, color:T.zinc900 }}>{sl.ch}</span>
                  <Badge color={T.white} bg={T.red500}>未読</Badge>
                </div>
                <span style={{ fontSize:12, color:T.zinc500 }}>{sl.msg}</span>
                <div style={{ ...row, gap:4 }}>
                  <span style={{ fontSize:11, color:T.zinc400 }}>{sl.from}</span>
                  <span style={{ fontSize:11, color:T.zinc300 }}>·</span>
                  <span style={{ fontSize:11, color:T.zinc400 }}>{sl.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// Screen 8: Works
// ========================================
function WorksScreen({ onNavigate }) {
  const [selectedWork, setSelectedWork] = useState(0);
  const works = [
    { name:"中途採用面接", meta:"5h/週 · 採用", badge:null },
    { name:"1on1（5名）", meta:"3.5h/週 · 組織開発", badge:null },
    { name:"社内定例", meta:"3h/週 · 会議体", badge:null },
    { name:"勤怠管理・承認", meta:"2h/週 · 労務管理", badge:null },
    { name:"社労士やりとり", meta:"1.5h/週 · 労務管理", badge:{ text:"新規", color:T.blue700 } },
    { name:"退職者対応", meta:"1h/週 · 個別対応", badge:null },
  ];

  return (
    <div style={{ ...row, width:"100%", height:"100%", background:T.zinc50 }}>
      <Sidebar active="works" onNavigate={onNavigate} />
      <div style={{ flex:1, ...row, height:"100%", overflow:"hidden" }}>
        {/* Works list */}
        <div style={{ width:300, borderRight:`1px solid ${T.zinc200}`, ...col }}>
          <div style={{ ...row, gap:8, padding:"16px", borderBottom:`1px solid ${T.zinc200}` }}>
            <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>業務</span>
            <span style={{ fontSize:14, color:T.zinc400 }}>6</span>
          </div>
          <div style={{ padding:"8px" }}>
            <input placeholder="業務を検索..." style={{ width:"100%", padding:"8px 12px", border:`1px solid ${T.zinc200}`, borderRadius:6, fontSize:14, background:T.white, outline:"none", boxSizing:"border-box" }} />
          </div>
          <div style={{ ...col, flex:1, overflow:"auto" }}>
            {works.map((w, i) => (
              <div key={i} onClick={() => setSelectedWork(i)} style={{ ...col, gap:2, padding:"12px 16px", cursor:"pointer", background: i === selectedWork ? T.white : "transparent", borderBottom:`1px solid ${T.zinc100}` }}>
                <div style={{ ...row, gap:6 }}>
                  <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>{w.name}</span>
                  {w.badge && <Badge color={w.badge.color} bg={T.blue50}>{w.badge.text}</Badge>}
                </div>
                <span style={{ fontSize:14, color:T.zinc400 }}>{w.meta}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Work detail */}
        <div style={{ flex:1, ...col }}>
          <div style={{ ...row, gap:8, padding:"16px 24px", borderBottom:`1px solid ${T.zinc200}` }}>
            <span style={{ fontSize:16, fontWeight:600, color:T.zinc900 }}>中途採用面接</span>
            <span style={{ fontSize:12, color:T.zinc500 }}>採用 · 週次</span>
          </div>
          {/* Tabs */}
          <div style={{ ...row, gap:0, borderBottom:`1px solid ${T.zinc200}` }}>
            {["チャット","コンテキスト","アウトプット"].map((tab, i) => (
              <div key={tab} style={{ padding:"10px 20px", borderBottom: i===0 ? `2px solid ${T.zinc900}` : "none", cursor:"pointer" }}>
                <span style={{ fontSize:14, fontWeight:500, color: i===0 ? T.zinc900 : T.zinc500 }}>{tab}</span>
              </div>
            ))}
          </div>
          {/* Chat content */}
          <div style={{ flex:1, overflow:"auto", padding:"16px 24px", ...col, gap:16 }}>
            <ChatMsg sender="市場調査エージェント" badge={{ text:"市場調査", color:T.blue700, bg:T.blue50 }} time="9:30">
              <p style={{ fontSize:14, color:T.zinc700, margin:0 }}>求人市場の年収水準調査が完了しました。同業他社の中央値は500-700万円です。現在のJD設定（450-650万）はやや低めです。</p>
              <div style={{ background:T.blue50, border:`1px solid ${T.zinc200}`, borderRadius:8, padding:12, marginTop:8, ...col, gap:6 }}>
                <span style={{ fontSize:14, fontWeight:600, color:T.zinc900 }}>年収レンジを決めてください</span>
                <span style={{ fontSize:13, color:T.zinc600 }}>市場中央値は500-700万です。現在の設定はやや低めです。</span>
                <div style={{ ...row, gap:8, marginTop:4 }}>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.zinc900, color:T.white, border:"none", fontSize:14, fontWeight:500, cursor:"pointer" }}>上げる (500-700万)</button>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>このまま</button>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>データを見る</button>
                </div>
              </div>
            </ChatMsg>
            <ChatMsg sender="Naito K" avatar="NK" isUser time="9:35">
              <p style={{ fontSize:14, color:T.zinc700, margin:0 }}>上げよう。500-700万でJDを更新して。あと、Indeedへの公開もお願い。</p>
            </ChatMsg>
            <ChatMsg sender="文書作成エージェント" badge={{ text:"文書作成", color:T.emerald700, bg:`${T.emerald500}20` }} time="9:42">
              <p style={{ fontSize:14, color:T.zinc700, margin:0 }}>JD改定案を更新しました（年収500-700万）。Indeedへの公開には許可が必要です。</p>
              <div style={{ background:T.blue50, border:`1px solid ${T.zinc200}`, borderRadius:8, padding:12, marginTop:8, ...col, gap:6 }}>
                <span style={{ fontSize:14, fontWeight:600, color:T.zinc900 }}>JDをIndeedに公開していいですか？</span>
                <span style={{ fontSize:13, color:T.zinc600 }}>営業職JD_v2.docxをIndeedに公開します。公開後は取り消せません。</span>
                <div style={{ ...row, gap:8, marginTop:4 }}>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.zinc900, color:T.white, border:"none", fontSize:14, fontWeight:500, cursor:"pointer" }}>許可する</button>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>却下する</button>
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>詳細を見る</button>
                </div>
              </div>
            </ChatMsg>
          </div>
          <div style={{ padding:"12px 24px", borderTop:`1px solid ${T.zinc200}` }}>
            <input placeholder="サブエージェントチームにメッセージを送る…" style={{ width:"100%", padding:"10px 12px", border:`1px solid ${T.zinc200}`, borderRadius:6, fontSize:14, background:T.white, outline:"none", boxSizing:"border-box" }} />
          </div>
        </div>
        {/* Right panel - Issues */}
        <div style={{ width:300, borderLeft:`1px solid ${T.zinc200}`, ...col, padding:16 }}>
          <div style={{ ...row, gap:8, marginBottom:16 }}>
            <span style={{ fontSize:14, fontWeight:600, color:T.zinc900 }}>課題</span>
            <Badge color={T.zinc600} bg={T.zinc100}>3</Badge>
          </div>
          {[
            { title:"JDと実態の乖離", priority:"高", pColor:T.dc2626, agents:"3 agents", progress:"80%" },
            { title:"採用コスト最適化", priority:"中", pColor:T.d97706, agents:"1 agent", progress:"55%" },
            { title:"面接プロセスの標準化", priority:"低", pColor:T.zinc500, agents:"未着手", progress:null },
          ].map((issue, i) => (
            <div key={i} style={{ ...col, gap:4, padding:"10px 0", borderBottom:`1px solid ${T.zinc100}` }}>
              <div style={{ ...row, gap:6 }}>
                <span style={{ fontSize:13, fontWeight:600, color:T.zinc900 }}>{issue.title}</span>
                <Badge color={T.white} bg={issue.pColor}>{issue.priority}</Badge>
              </div>
              <div style={{ ...row, gap:8 }}>
                <span style={{ fontSize:12, color:T.zinc500 }}>{issue.agents}</span>
                {issue.progress && <span style={{ fontSize:12, fontWeight:600, color:T.zinc500 }}>{issue.progress}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ========================================
// Screen 10: Agents
// ========================================
function AgentsScreen({ onNavigate }) {
  const groups = [
    { title:"中途採用面接", count:"3 agents", agents:[
      { skill:"データ分析", skillColor:T.blue700, skillBg:T.blue50, desc:"JDと面接データの差分分析", status:"80%", statusType:"progress" },
      { skill:"市場調査", skillColor:T.emerald700, skillBg:`${T.emerald500}20`, desc:"求人市場の年収水準調査", status:"64%", statusType:"progress" },
      { skill:"文書作成", skillColor:"#7c3aed", skillBg:T.violet50, desc:"JD改定案ドラフト", status:"許可待ち", statusType:"warning" },
    ]},
    { title:"労務管理", count:"2 agents", agents:[
      { skill:"法的調査", skillColor:T.dc2626, skillBg:"#fef2f2", desc:"36協定の法的要件調査", status:"30%", statusType:"progress" },
      { skill:"データ分析", skillColor:T.blue700, skillBg:T.blue50, desc:"勤怠データ傾向分析", status:"実行中", statusType:"running" },
    ]},
    { title:"完了", count:null, agents:[
      { skill:"市場調査", skillColor:T.emerald700, skillBg:`${T.emerald500}20`, desc:"採用チャネルベンチマーク", status:"完了", statusType:"done", link:"報告書を見る →" },
      { skill:"データ分析", skillColor:T.blue700, skillBg:T.blue50, desc:"離職率分析", status:"完了", statusType:"done", link:"報告書を見る →" },
    ]},
  ];

  return (
    <div style={{ ...row, width:"100%", height:"100%", background:T.zinc50 }}>
      <Sidebar active="agents" onNavigate={onNavigate} />
      <div style={{ flex:1, padding:24, overflow:"auto" }}>
        <div style={{ ...row, gap:12, marginBottom:8 }}>
          <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>エージェント</span>
        </div>
        <div style={{ ...row, gap:8, marginBottom:24 }}>
          <span style={{ fontSize:14, color:T.zinc500 }}>すべて · 実行中 · 待機中</span>
        </div>
        <div style={{ ...col, gap:24 }}>
          {groups.map((g, gi) => (
            <div key={gi} style={{ ...col, gap:8 }}>
              <div style={{ ...row, gap:8 }}>
                <span style={{ fontSize:13, fontWeight:600, color:T.zinc700 }}>{g.title}</span>
                {g.count && <span style={{ fontSize:12, color:T.zinc400 }}>{g.count}</span>}
              </div>
              <div style={{ ...col, gap:4 }}>
                {g.agents.map((a, ai) => (
                  <div key={ai} style={{ ...row, justifyContent:"space-between", padding:"10px 16px", background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
                    <div style={{ ...row, gap:10 }}>
                      <Badge color={a.skillColor} bg={a.skillBg}>{a.skill}</Badge>
                      <span style={{ fontSize:13, color:T.zinc700 }}>{a.desc}</span>
                    </div>
                    <div style={{ ...row, gap:8 }}>
                      {a.statusType === "progress" && <span style={{ fontSize:12, fontWeight:600, color:T.zinc500 }}>{a.status}</span>}
                      {a.statusType === "warning" && <Badge color={T.d97706} bg={T.amber50}>{a.status}</Badge>}
                      {a.statusType === "running" && <Badge color={T.blue700} bg={T.blue50}>{a.status}</Badge>}
                      {a.statusType === "done" && (
                        <div style={{ ...row, gap:8 }}>
                          <Badge color={T.emerald500} bg={`${T.emerald500}20`}>{a.status}</Badge>
                          {a.link && <span style={{ fontSize:12, fontWeight:500, color:T.blue600, cursor:"pointer" }}>{a.link}</span>}
                        </div>
                      )}
                      <span style={{ fontSize:11, fontWeight:500, color:T.zinc500 }}>AI Agent</span>
                    </div>
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

// ========================================
// Screen 11: Reports
// ========================================
function ReportsScreen({ onNavigate }) {
  const reports = [
    { title:"採用チャネルROI分析", meta:"2/20 · エージェント3/3完了 · 未判断", selected:true },
    { title:"就業規則改定 法的要件レビュー", meta:"2/18 · エージェント2/2完了 · Go済み" },
    { title:"評価制度の他社ベンチマーク", meta:"2/15 · エージェント1/2進行中 · 未判断" },
  ];

  return (
    <div style={{ ...row, width:"100%", height:"100%", background:T.zinc50 }}>
      <Sidebar active="reports" onNavigate={onNavigate} />
      <div style={{ flex:1, ...row, height:"100%", overflow:"hidden" }}>
        {/* Report list */}
        <div style={{ width:320, borderRight:`1px solid ${T.zinc200}`, ...col }}>
          <div style={{ padding:"16px", borderBottom:`1px solid ${T.zinc200}` }}>
            <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>レポート</span>
          </div>
          {reports.map((r, i) => (
            <div key={i} style={{ ...col, gap:2, padding:"12px 16px", background: r.selected ? T.white : "transparent", borderBottom:`1px solid ${T.zinc100}`, cursor:"pointer" }}>
              <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>{r.title}</span>
              <span style={{ fontSize:14, color:T.zinc400 }}>{r.meta}</span>
            </div>
          ))}
        </div>
        {/* Report detail */}
        <div style={{ flex:1, overflow:"auto", padding:24, ...col, gap:20 }}>
          <div style={{ ...col, gap:4 }}>
            <span style={{ fontSize:18, fontWeight:600, color:T.zinc900 }}>採用チャネルROI分析</span>
            <span style={{ fontSize:14, color:T.zinc500 }}>2/20作成 · エージェント3/3完了</span>
          </div>
          {/* Decision banner */}
          <div style={{ background:"#f0fdf4", border:`1px solid ${T.emerald500}40`, borderRadius:8, padding:16, ...col, gap:8 }}>
            <div style={{ ...row, gap:8 }}>
              <span style={{ fontSize:14, fontWeight:600, color:T.emerald700 }}>全エージェント完了 — 意思決定が必要です</span>
              <Badge color={T.white} bg={T.emerald700}>準備完了</Badge>
            </div>
            <span style={{ fontSize:13, color:T.emerald700 }}>3つのエージェントが分析を完了しました。データに基づいて採用チャネル戦略を決定してください。</span>
            <div style={{ ...row, gap:8, marginTop:4 }}>
              <button style={{ padding:"8px 20px", borderRadius:6, background:T.emerald700, color:T.white, border:"none", fontSize:14, fontWeight:600, cursor:"pointer" }}>Go — 実行に移す</button>
              <button style={{ padding:"8px 20px", borderRadius:6, background:T.dc2626, color:T.white, border:"none", fontSize:14, fontWeight:600, cursor:"pointer" }}>No-Go — 見送る</button>
              <button style={{ padding:"8px 20px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>追加調査を依頼</button>
            </div>
          </div>
          {/* Related */}
          <div style={{ ...row, gap:8 }}>
            <span style={{ fontSize:12, fontWeight:500, color:T.zinc500 }}>関連業務:</span>
            <span style={{ fontSize:12, fontWeight:500, color:T.blue600, cursor:"pointer" }}>中途採用面接</span>
            <span style={{ fontSize:12, color:T.zinc500 }}>課題: 採用コスト最適化</span>
          </div>
          {/* Summary */}
          <div style={{ ...col, gap:8 }}>
            <span style={{ fontSize:14, fontWeight:500, color:T.zinc500 }}>サマリー</span>
            <p style={{ fontSize:14, color:T.zinc700, margin:0, lineHeight:1.6 }}>3つの採用チャネル（Indeed, Wantedly, エージェント）のROIを比較分析しました。コスト対効果ではWantedlyが最も高く、1採用あたりコストが平均の62%です。エージェント経由は定着率が最も高い（92%）一方、コストは3倍です。</p>
          </div>
          {/* Agent results */}
          <div style={{ ...col, gap:8 }}>
            <div style={{ ...row, gap:8 }}>
              <span style={{ fontSize:14, fontWeight:500, color:T.zinc500 }}>エージェント結果</span>
              <Badge color={T.green600} bg={`${T.green600}20`}>3/3 完了</Badge>
            </div>
            {[
              { name:"市場調査", badge:"市場調査", bColor:"#1d4ed8", bBg:T.blue50 },
              { name:"コスト計算", badge:"データ分析", bColor:T.amber700, bBg:T.amber50 },
              { name:"定着率分析", badge:"コスト計算", bColor:"#3730a3", bBg:T.violet50 },
            ].map((ag, i) => (
              <div key={i} style={{ ...row, justifyContent:"space-between", padding:"8px 12px", background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:6 }}>
                <div style={{ ...row, gap:8 }}>
                  <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>{ag.name}</span>
                  <Badge color={ag.bColor} bg={ag.bBg}>{ag.badge}</Badge>
                </div>
                <Badge color={T.green600} bg={`${T.green600}20`}>完了</Badge>
              </div>
            ))}
          </div>
          {/* Data table */}
          <div style={{ ...col, gap:8 }}>
            <span style={{ fontSize:14, fontWeight:500, color:T.zinc500 }}>評価データ</span>
            <table style={{ width:"100%", borderCollapse:"collapse", fontSize:14 }}>
              <thead>
                <tr style={{ borderBottom:`1px solid ${T.zinc200}` }}>
                  {["チャネル","コスト/採用","定着率","ROIスコア"].map(h => (
                    <th key={h} style={{ textAlign:"left", padding:"8px 12px", fontWeight:500, color:T.zinc500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { ch:"Indeed", cost:"¥850K", costColor:T.zinc900, ret:"78%", retColor:T.zinc900, roi:"6.2", roiColor:T.zinc900 },
                  { ch:"Wantedly", cost:"¥530K", costColor:T.green600, ret:"85%", retColor:T.zinc900, roi:"8.7", roiColor:T.green600, roiFw:600 },
                  { ch:"エージェント", cost:"¥2,500K", costColor:T.dc2626, ret:"92%", retColor:T.green600, retFw:600, roi:"4.1", roiColor:T.zinc900 },
                ].map((r, i) => (
                  <tr key={i} style={{ borderBottom:`1px solid ${T.zinc100}` }}>
                    <td style={{ padding:"8px 12px", color:T.zinc900 }}>{r.ch}</td>
                    <td style={{ padding:"8px 12px", color:r.costColor }}>{r.cost}</td>
                    <td style={{ padding:"8px 12px", color:r.retColor, fontWeight: r.retFw || 400 }}>{r.ret}</td>
                    <td style={{ padding:"8px 12px", color:r.roiColor, fontWeight: r.roiFw || 400 }}>{r.roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// Screen 12: Connection Settings
// ========================================
function ConnectionSettingsScreen({ onNavigate }) {
  const services = [
    { name:"Gmail", status:"connected", statusText:"連携済み", meta:"最終同期: 5分前" },
    { name:"Outlook", status:"disconnected", statusText:"未連携" },
    { name:"Slack", status:"disconnected", statusText:"未連携" },
    { name:"Teams", status:"disconnected", statusText:"未連携" },
  ];

  return (
    <div style={{ ...row, width:"100%", height:"100%", background:T.zinc50 }}>
      <Sidebar active="connections" onNavigate={onNavigate} />
      <div style={{ flex:1, overflow:"auto", padding:32, ...col, gap:32 }}>
        <h1 style={{ fontSize:24, fontWeight:600, color:T.zinc900, margin:0 }}>連携設定</h1>
        <div style={{ ...col, gap:16 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>連携済みサービス</h2>
          {services.map((s, i) => (
            <div key={i} style={{ ...row, justifyContent:"space-between", padding:16, background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
              <div style={{ ...row, gap:12 }}>
                <div style={{ ...center, width:40, height:40, borderRadius:8, background:T.zinc100, flexShrink:0 }}>
                  <span style={{ fontSize:14, fontWeight:500 }}>{s.name[0]}</span>
                </div>
                <div style={{ ...col, gap:2 }}>
                  <span style={{ fontSize:16, fontWeight:500, color:T.zinc900 }}>{s.name}</span>
                  <div style={{ ...row, gap:8 }}>
                    <span style={{ fontSize:14, fontWeight:500, color: s.status === "connected" ? T.emerald500 : T.zinc500 }}>{s.statusText}</span>
                    {s.meta && <span style={{ fontSize:14, color:T.zinc500 }}>{s.meta}</span>}
                  </div>
                </div>
              </div>
              <div style={{ ...row, gap:8 }}>
                {s.status === "connected" ? (
                  <>
                    <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>再同期</button>
                    <button style={{ padding:"6px 16px", borderRadius:6, background:T.dc2626, border:"none", fontSize:14, fontWeight:500, color:T.white, cursor:"pointer" }}>解除</button>
                  </>
                ) : (
                  <button style={{ padding:"6px 16px", borderRadius:6, background:T.zinc900, border:"none", fontSize:14, fontWeight:500, color:T.white, cursor:"pointer" }}>連携する</button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ ...col, gap:16 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>データ範囲設定</h2>
          <div style={{ ...col, gap:12, padding:16, background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
            <div style={{ ...row, justifyContent:"space-between" }}>
              <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>分析対象期間</span>
              <span style={{ fontSize:14, color:T.zinc900 }}>3ヶ月</span>
            </div>
            <div style={{ ...row, justifyContent:"space-between" }}>
              <span style={{ fontSize:14, fontWeight:500, color:T.zinc900 }}>同期頻度</span>
              <span style={{ fontSize:14, color:T.zinc900 }}>1時間ごと</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ========================================
// Screen 13: Account Settings
// ========================================
function AccountSettingsScreen({ onNavigate }) {
  return (
    <div style={{ ...row, width:"100%", height:"100%", background:T.zinc50 }}>
      <Sidebar active="account" onNavigate={onNavigate} />
      <div style={{ flex:1, overflow:"auto", padding:32, ...col, gap:32 }}>
        <h1 style={{ fontSize:24, fontWeight:600, color:T.zinc900, margin:0 }}>アカウント設定</h1>
        <div style={{ ...col, gap:16 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>プロフィール</h2>
          <div style={{ ...row, gap:16, padding:16, background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
            <div style={{ ...center, width:48, height:48, borderRadius:"50%", background:T.zinc900, flexShrink:0 }}>
              <span style={{ color:T.white, fontSize:14, fontWeight:600 }}>NK</span>
            </div>
            <div style={{ ...col, gap:2, flex:1 }}>
              <span style={{ fontSize:16, fontWeight:600, color:T.zinc900 }}>Naito K</span>
              <span style={{ fontSize:14, color:T.zinc500 }}>naito.k@example.com</span>
            </div>
            <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>編集</button>
          </div>
        </div>
        <div style={{ ...col, gap:12 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>ワークスペース名</h2>
          <div style={{ padding:16, background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
            <span style={{ fontSize:14, color:T.zinc900 }}>naito's workspace</span>
          </div>
        </div>
        <div style={{ ...col, gap:12 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>職種設定</h2>
          <div style={{ ...row, justifyContent:"space-between", padding:16, background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
            <span style={{ fontSize:16, fontWeight:500, color:T.zinc900 }}>人事マネージャー</span>
            <button style={{ padding:"6px 16px", borderRadius:6, background:T.white, border:`1px solid ${T.zinc200}`, fontSize:14, fontWeight:500, color:T.zinc900, cursor:"pointer" }}>変更</button>
          </div>
        </div>
        <div style={{ ...col, gap:12 }}>
          <h2 style={{ fontSize:18, fontWeight:600, color:T.zinc900, margin:0 }}>プラン</h2>
          <div style={{ ...row, justifyContent:"space-between", padding:16, background:T.white, border:`1px solid ${T.zinc200}`, borderRadius:8 }}>
            <div style={{ ...col, gap:2 }}>
              <span style={{ fontSize:16, fontWeight:600, color:T.zinc900 }}>Free プラン</span>
              <span style={{ fontSize:14, color:T.zinc500 }}>基本機能が利用可能です</span>
            </div>
            <button style={{ padding:"6px 16px", borderRadius:6, background:T.zinc900, border:"none", fontSize:14, fontWeight:500, color:T.white, cursor:"pointer" }}>アップグレード</button>
          </div>
        </div>
        <button style={{ alignSelf:"flex-start", padding:"8px 0", background:"none", border:"none", fontSize:14, fontWeight:500, color:T.red500, cursor:"pointer" }}>ログアウト</button>
      </div>
    </div>
  );
}

// ========================================
// Main App - オンボーディングから開始
// ========================================
export default function BlueishAgentApp() {
  const [screen, setScreen] = useState("signup");

  const onboardingFlow = {
    signup: <SignUpScreen onNext={() => setScreen("integration")} />,
    integration: <IntegrationScreen onNext={() => setScreen("role")} />,
    role: <RoleScreen onNext={() => setScreen("task")} />,
    task: <TaskScreen onNext={() => setScreen("analyzing")} />,
    analyzing: <AnalyzingScreen onNext={() => setScreen("dashboard")} />,
  };

  const navigate = (id) => setScreen(id);

  const mainScreens = {
    dashboard: <DashboardScreen onNavigate={navigate} />,
    works: <WorksScreen onNavigate={navigate} />,
    agents: <AgentsScreen onNavigate={navigate} />,
    reports: <ReportsScreen onNavigate={navigate} />,
    connections: <ConnectionSettingsScreen onNavigate={navigate} />,
    account: <AccountSettingsScreen onNavigate={navigate} />,
  };

  const currentScreen = onboardingFlow[screen] || mainScreens[screen] || <DashboardScreen onNavigate={navigate} />;

  return (
    <div style={{ width:"100%", height:"100vh", fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", overflow:"hidden", background:T.zinc50 }}>
      {currentScreen}
    </div>
  );
}