"use client";
import { useState } from "react";
import StepDots from "./StepDots";
import { useApp } from "@/context/AppContext";

interface Props { onNext: () => void; }

const tools = [
  { id:"gmail",name:"Gmail",desc:"メール+カレンダー" },
  { id:"slack",name:"Slack",desc:"チャット履歴" },
  { id:"outlook",name:"Outlook",desc:"メール+カレンダー" },
  { id:"teams",name:"Teams",desc:"チャット履歴" },
];

export default function IntegrationSelection({ onNext }: Props) {
  const { onboarding, setOnboarding, toggleConnection } = useApp();
  const [selected, setSelected] = useState(["gmail"]);
  const toggle = (id:string) => setSelected(s => s.includes(id)?s.filter(x=>x!==id):[...s,id]);
  const handleNext = () => {
    setOnboarding({ ...onboarding, integrations: selected });
    selected.forEach(s => {
      const name = tools.find(t => t.id === s)?.name || s;
      toggleConnection(name);
    });
    onNext();
  };
  return (
    <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"var(--zinc-50)" }}>
      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",width:480,gap:32 }}>
        <StepDots current={1} />
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
          <h2 style={{ fontSize:18,fontWeight:600,color:"var(--zinc-900)",margin:0 }}>あなたの業務を読み取ります</h2>
          <p style={{ fontSize:14,color:"var(--zinc-500)",margin:0 }}>連携するツールを選んでください（複数可）</p>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,width:"100%" }}>
          {tools.map(t=>(
            <div key={t.id} onClick={()=>toggle(t.id)} style={{ display:"flex",alignItems:"center",gap:12,padding:16,border:`1px solid ${selected.includes(t.id)?"var(--blueish-primary)":"var(--zinc-200)"}`,borderRadius:8,background:selected.includes(t.id)?"var(--blue-50)":"#fff",cursor:"pointer" }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:6,background:"var(--zinc-100)",flexShrink:0 }}><span style={{ fontSize:14,fontWeight:500 }}>{t.name[0]}</span></div>
              <div style={{ display:"flex",flexDirection:"column",gap:2 }}>
                <span style={{ fontSize:14,fontWeight:500,color:"var(--zinc-900)" }}>{t.name}</span>
                <span style={{ fontSize:14,color:"var(--zinc-400)" }}>{t.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleNext} style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"10px 16px",background:"var(--zinc-900)",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:14,fontWeight:500 }}>連携して次へ</button>
        <span onClick={onNext} style={{ fontSize:14,color:"var(--zinc-400)",cursor:"pointer" }}>あとで連携する</span>
      </div>
    </div>
  );
}
