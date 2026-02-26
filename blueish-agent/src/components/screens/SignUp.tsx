"use client";

interface Props { onNext: () => void; }

export default function SignUp({ onNext }: Props) {
  return (
    <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",background:"var(--zinc-50)" }}>
      <div style={{ display:"flex",flexDirection:"column",alignItems:"center",width:400,gap:24 }}>
        <div style={{ display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,background:"var(--zinc-900)",borderRadius:8 }}>
          <span style={{ color:"#fff",fontSize:16,fontWeight:600 }}>B</span>
        </div>
        <div style={{ display:"flex",flexDirection:"column",alignItems:"center",gap:8 }}>
          <h1 style={{ fontSize:24,fontWeight:700,color:"var(--zinc-900)",margin:0 }}>Blueish Agent</h1>
          <p style={{ fontSize:14,color:"var(--zinc-500)",margin:0,textAlign:"center" }}>あなたの仕事を、あなたの代わりに理解して、動かす</p>
        </div>
        <button onClick={onNext} style={{ display:"flex",alignItems:"center",justifyContent:"center",gap:8,width:"100%",padding:"10px 16px",background:"#fff",border:"1px solid var(--zinc-200)",borderRadius:6,cursor:"pointer",fontSize:14,fontWeight:500,color:"var(--zinc-900)" }}>
          <svg width="18" height="18" viewBox="0 0 18 18"><path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 002.38-5.88c0-.57-.05-.99-.15-1.17z" fill="#4285F4"/><path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 01-7.18-2.54H1.83v2.07A8 8 0 008.98 17z" fill="#34A853"/><path d="M4.5 10.52a4.8 4.8 0 010-3.04V5.41H1.83a8 8 0 000 7.18l2.67-2.07z" fill="#FBBC05"/><path d="M8.98 3.58c1.32 0 2.2.57 2.7 1.05l2.01-1.97A7.13 7.13 0 008.98 1a8 8 0 00-7.15 4.41l2.67 2.07A4.76 4.76 0 018.98 3.58z" fill="#EA4335"/></svg>
          Googleで始める
        </button>
        <div style={{ display:"flex",alignItems:"center",width:"100%",gap:12 }}>
          <div style={{ flex:1,height:1,background:"var(--zinc-200)" }} />
          <span style={{ fontSize:14,color:"var(--zinc-400)" }}>or</span>
          <div style={{ flex:1,height:1,background:"var(--zinc-200)" }} />
        </div>
        <div style={{ display:"flex",flexDirection:"column",width:"100%",gap:6 }}>
          <label style={{ fontSize:14,fontWeight:500,color:"var(--foreground)" }}>メールアドレス</label>
          <input type="email" placeholder="メールアドレス" style={{ width:"100%",padding:"10px 12px",border:"1px solid var(--zinc-200)",borderRadius:6,fontSize:14,color:"var(--zinc-900)",background:"#fff",outline:"none",boxSizing:"border-box" }} />
        </div>
        <button onClick={onNext} style={{ display:"flex",alignItems:"center",justifyContent:"center",width:"100%",padding:"10px 16px",background:"var(--zinc-900)",color:"#fff",border:"none",borderRadius:6,cursor:"pointer",fontSize:14,fontWeight:500 }}>
          アカウント作成
        </button>
        <span style={{ fontSize:14,color:"var(--blue-600)",cursor:"pointer" }}>既にアカウントをお持ちの方</span>
      </div>
    </div>
  );
}
