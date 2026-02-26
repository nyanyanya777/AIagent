"use client";

interface BadgeProps { children: React.ReactNode; color: string; bg?: string; }

export default function Badge({ children, color, bg }: BadgeProps) {
  return (
    <span style={{ display: "inline-flex", padding: "2px 8px", borderRadius: 9999, fontSize: 11, fontWeight: 600, color, background: bg || "transparent" }}>
      {children}
    </span>
  );
}
