"use client";

interface SidebarProps {
  active: string;
  onNavigate: (id: string) => void;
}

const items = [
  { id: "dashboard", label: "Dashboard", icon: "📊" },
  { id: "works", label: "業務", icon: "📋" },
  { id: "agents", label: "エージェント", icon: "🤖" },
  { id: "reports", label: "レポート", icon: "📄" },
  { id: "connections", label: "連携設定", icon: "🔗" },
  { id: "account", label: "アカウント", icon: "👤" },
];

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <div style={{ width: 256, height: "100%", background: "var(--zinc-50)", borderRight: "1px solid var(--zinc-200)", display: "flex", flexDirection: "column", justifyContent: "space-between", flexShrink: 0 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 16px 12px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, background: "var(--zinc-900)", borderRadius: 6 }}>
            <span style={{ color: "#fff", fontSize: 12, fontWeight: 600 }}>B</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--sidebar-foreground)" }}>Blueish Agent</span>
            <span style={{ fontSize: 12, color: "var(--sidebar-foreground)" }}>naito&apos;s workspace</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "0 8px" }}>
          {items.map((it) => (
            <div key={it.id} onClick={() => onNavigate(it.id)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", borderRadius: 6, cursor: "pointer", background: active === it.id ? "var(--zinc-200)" : "transparent" }}>
              <span style={{ fontSize: 14 }}>{it.icon}</span>
              <span style={{ fontSize: 14, color: "var(--sidebar-foreground)" }}>{it.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: 16, borderTop: "1px solid var(--zinc-200)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 28, height: 28, borderRadius: "50%", background: "var(--zinc-900)" }}>
            <span style={{ color: "#fff", fontSize: 11, fontWeight: 600 }}>PJ</span>
          </div>
          <span style={{ fontSize: 12, color: "var(--zinc-500)" }}>● Gmail 連携中</span>
        </div>
        <span style={{ fontSize: 12, color: "var(--zinc-500)", paddingLeft: 36 }}>最終同期: 5分前</span>
      </div>
    </div>
  );
}
