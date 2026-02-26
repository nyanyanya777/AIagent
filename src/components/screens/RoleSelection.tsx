"use client";
import { useState } from "react";
import StepDots from "./StepDots";
import { useApp } from "@/context/AppContext";

interface Props { onNext: () => void; }

const roles = ["人事・労務","営業","開発・エンジニア","経営・役員","カスタマーサポート","経理・財務","マーケティング","デザイン","総務・法務","プロジェクト管理"];

export default function RoleSelection({ onNext }: Props) {
  const { onboarding, setOnboarding, profile, setProfile } = useApp();
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (r:string) => setSelected(s => s.includes(r)?s.filter(x=>x!==r):[...s,r]);
  const handleNext = () => {
    setOnboarding({ ...onboarding, roles: selected });
    if (selected.length > 0) setProfile({ ...profile, role: selected[0] });
    onNext();
  };
  return (
    <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"var(--zinc-50)" }}>
      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",width:520,gap:32 }}>
        <StepDots current={2} />
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
          <h2 style={{ fontSize:18,fontWeight:600,color:"var(--zinc-900)",margin:0 }}>あなたの職種を教えてください</h2>
          <p style={{ fontSize:14,color:"var(--zinc-500)",margin:0 }}>業務の読み取り精度が上がります（複数選択可）</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,width:"100%" }}>
          {roles.map(r=>(
            <div key={r} onClick={()=>toggle(r)} style={{ display:"flex",alignItems:"center",gap:10,padding:"12px 16px",border:`1px solid ${selected.includes(r)?"var(--blueish-primary)":"var(--zinc-200)"}`,borderRadius:8,background:selected.includes(r)?"var(--blue-50)":"#fff",cursor:"pointer" }}>
              <div style={{ width:16,height:16,borderRadius:4,border:`2px solid ${selected.includes(r)?"var(--blueish-primary)":"var(--zinc-300)"}`,background:selected.includes(r)?"var(--blueish-primary)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                {selected.includes(r)&&<span style={{ color:"#fff",fontSize:10 }}>✓</span>}
              </div>
              <span style={{ fontSize:14,fontWeight:500,color:"var(--zinc-900)" }}>{r}</span>
            </div>
          ))}
        </div>
        <button onClick={handleNext} style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"10px 16px",background:"var(--zinc-900)",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:14,fontWeight:500 }}>次へ</button>
        <span onClick={onNext} style={{ fontSize:14,color:"var(--zinc-400)",cursor:"pointer" }}>スキップする（データから自動推定します）</span>
      </div>
    </div>
  );
}
