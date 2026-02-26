"use client";
import { useState, useEffect } from "react";
import StepDots from "./StepDots";

interface Props { onNext: () => void; }

export default function Analyzing({ onNext }: Props) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setProgress(p => { if(p>=100){clearInterval(iv);setTimeout(onNext,800);return 100;} return p+2; }), 80);
    return () => clearInterval(iv);
  }, [onNext]);

  const steps = [
    { text:"カレンダー 3ヶ月分を取得しました", color:"var(--emerald-700)", done:progress>20 },
    { text:"メール 1,247通を分析しました", color:"var(--emerald-700)", done:progress>45 },
    { text:"パターンを抽出しています...", color:"var(--blueish-primary)", done:false, active:progress>45&&progress<=75 },
    { text:"業務プロファイルを生成中", color:"var(--zinc-400)", done:false, active:progress>75 },
  ];

  return (
    <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"var(--zinc-50)" }}>
      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",width:480,gap:32 }}>
        <StepDots current={4} />
        <h2 style={{ fontSize:18,fontWeight:600,color:"var(--zinc-900)",margin:0 }}>あなたの業務を読み取っています...</h2>
        <div style={{ width:"100%",height:6,background:"var(--zinc-200)",borderRadius:9999,overflow:"hidden" }}>
          <div style={{ width:`${progress}%`,height:"100%",background:"var(--zinc-900)",borderRadius:9999,transition:"width 0.3s" }} />
        </div>
        <div style={{ display:"flex",flexDirection:"column",width:"100%",gap:12 }}>
          {steps.map((s,i)=>(
            <div key={i} style={{ display:"flex",alignItems:"center",gap:10 }}>
              <span style={{ fontSize:14 }}>{s.done?"✓":s.active?"◉":"○"}</span>
              <span style={{ fontSize:14,color:s.done?s.color:s.active?s.color:"var(--zinc-400)" }}>{s.text}</span>
            </div>
          ))}
        </div>
        {progress>60&&(
          <div style={{ width:"100%",padding:16,background:"var(--amber-50)",borderRadius:8,display:"flex",flexDirection:"column",gap:8 }}>
            <span style={{ fontSize:14,fontWeight:500,color:"var(--amber-700)" }}>プレビュー</span>
            <span style={{ fontSize:16,color:"var(--amber-800)" }}>会議が週12件 / メールの40%が社内 / 定例が最頻パターン</span>
          </div>
        )}
      </div>
    </div>
  );
}
