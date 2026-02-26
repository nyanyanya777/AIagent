"use client";
import { useState } from "react";
import StepDots from "./StepDots";

interface Props { onNext: () => void; }

const sections = [
  { label:"採用", tasks:["中途採用（面接・書類選考）","新卒採用（説明会・インターン）","採用媒体の管理・運用"] },
  { label:"労務管理", tasks:["勤怠管理・有給承認","給与計算・明細確認","社労士・外部専門家とのやりとり","就業規則・社内規程の管理","36協定・届出関連"] },
  { label:"組織開発", tasks:["1on1・メンバーとの定期面談","評価・査定・目標設定","研修・教育・オンボーディング"] },
  { label:"会議", tasks:["社内定例ミーティング","経営会議"] },
  { label:"その他", tasks:["退職者対応・引き継ぎ","労務トラブル・ハラスメント対応","異動・配置転換"] },
];

export default function TaskSelection({ onNext }: Props) {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (t:string) => setChecked(s => s.includes(t)?s.filter(x=>x!==t):[...s,t]);
  return (
    <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"var(--zinc-50)",overflow:"auto" }}>
      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",width:520,gap:24,padding:"40px 0" }}>
        <StepDots current={3} />
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
          <h2 style={{ fontSize:18,fontWeight:600,color:"var(--zinc-900)",margin:0 }}>普段やっている業務を選んでください</h2>
          <p style={{ fontSize:14,color:"var(--zinc-500)",margin:0 }}>選ばなかったものもデータから検出されれば提案します</p>
        </div>
        <div style={{ display:"flex",flexDirection:"column",width:"100%",gap:20 }}>
          {sections.map(sec=>(
            <div key={sec.label} style={{ display:"flex",flexDirection:"column",gap:8 }}>
              <span style={{ fontSize:14,fontWeight:500,color:"var(--zinc-500)" }}>{sec.label}</span>
              <div style={{ display:"flex",flexDirection:"column",gap:4 }}>
                {sec.tasks.map(t=>(
                  <div key={t} onClick={()=>toggle(t)} style={{ display:"flex",alignItems:"center",gap:10,padding:"8px 12px",borderRadius:6,cursor:"pointer",background:checked.includes(t)?"var(--blue-50)":"transparent" }}>
                    <div style={{ width:16,height:16,borderRadius:4,border:`2px solid ${checked.includes(t)?"var(--blueish-primary)":"var(--zinc-300)"}`,background:checked.includes(t)?"var(--blueish-primary)":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                      {checked.includes(t)&&<span style={{ color:"#fff",fontSize:10 }}>✓</span>}
                    </div>
                    <span style={{ fontSize:14,fontWeight:500,color:"var(--foreground)" }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button onClick={onNext} style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"10px 16px",background:"var(--zinc-900)",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:14,fontWeight:500 }}>分析を開始</button>
        <span onClick={onNext} style={{ fontSize:14,color:"var(--zinc-400)",cursor:"pointer" }}>スキップする（データから自動検出します）</span>
      </div>
    </div>
  );
}
