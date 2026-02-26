"use client";

interface StepDotsProps { current: number; total?: number; }

export default function StepDots({ current, total = 5 }: StepDotsProps) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      {Array.from({ length: total }, (_, i) => (
        <div key={i} style={{ width: i === current ? 10 : 8, height: i === current ? 10 : 8, borderRadius: "50%", background: i === current ? "var(--blueish-primary)" : "var(--zinc-300)" }} />
      ))}
    </div>
  );
}
