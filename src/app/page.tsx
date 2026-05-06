'use client';

import { useState } from 'react';

export default function TeaserPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [msg, setMsg] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMsg('');

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
      } else {
        if (res.status === 409 || data.error?.includes('already')) {
           setStatus('success');
        } else {
           setStatus('error');
           setMsg(data.error || 'Something went wrong');
        }
      }
    } catch (err) {
      setStatus('error');
      setMsg('Connection error. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE6] text-[#0A0A0A] flex flex-col justify-between px-6 py-8 relative overflow-hidden" style={{ fontFamily: '"Space Grotesk","Inter",ui-sans-serif,system-ui,sans-serif' }}>
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Top Nav (Minimal) */}
      <nav className="w-full max-w-[1280px] mx-auto flex justify-between items-center z-10 pb-8 border-b border-[#0A0A0A]/5">
         <div className="font-bold text-[18px] tracking-[-0.03em] text-[#0A0A0A]">
            WE Heart
         </div>
      </nav>

      {/* Split Hero Layout */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 z-10 py-16">
        
        {/* Left Side: Copy & Waitlist */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          
          <h1 style={{ fontSize: 'clamp(48px, 6vw, 84px)', lineHeight: 0.9, fontWeight: 700, letterSpacing: '-0.04em', margin: 0 }}>
            Builders build <span style={{color: '#FF5A1F'}}>with Builders.</span>
          </h1>

          <p style={{ fontSize: 'clamp(18px, 2vw, 22px)', lineHeight: 1.45, maxWidth: 500, color: 'rgba(10,10,10,0.72)' }}>
            Join the Crew.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-3 w-full mt-4">
             <span className="w-2 h-2 rounded-full bg-[#FF5A1F] shadow-[0_0_0_4px_rgba(255,90,31,0.15)] animate-pulse" />
             <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-[#0A0A0A] uppercase">
               The room opens May 18
             </span>
          </div>

          <div className="w-full max-w-[460px] mx-auto lg:mx-0">
            {status === 'success' ? (
              <div className="w-full flex flex-col items-center lg:items-start gap-4 bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 p-6 rounded-[12px] mt-2">
                <div className="w-10 h-10 bg-[#FF5A1F]/10 flex items-center justify-center rounded-full mb-1">
                  <span className="w-2.5 h-2.5 bg-[#FF5A1F] rounded-full"></span>
                </div>
                <span className="font-mono text-[14px] font-bold tracking-widest text-[#0A0A0A]">YOU'RE ON THE LIST</span>
                <span className="text-[15px] text-[#6B6862] leading-relaxed">We'll send the link the moment the gates open. Keep building.</span>
              </div>
            ) : (
              <form onSubmit={submit} className="w-full flex flex-col gap-3 relative mt-2">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full sm:flex-1 bg-white/60 border border-[#111]/20 rounded-[10px] px-6 py-4 text-[16px] outline-none focus:border-[#111] transition-all placeholder:text-[#111]/40 text-[#111]"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111] text-[#F5EFE6] px-8 py-4 rounded-[10px] font-semibold text-[15px] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 whitespace-nowrap"
                  >
                    {status === 'loading' ? 'Locking in...' : 'Join Waitlist'}
                  </button>
                </div>
              </form>
            )}
            {status === 'error' && <p className="text-[14px] text-red-600 mt-2 text-left">{msg}</p>}
          </div>
        </div>

        {/* Right Side: Protagonist Logo in Black Slab */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000">
          <div style={{
            background: '#111', borderRadius: 28, padding: 56,
            aspectRatio:'1/1', width: '100%', maxWidth: '500px',
            position:'relative', overflow:'hidden',
            display:'flex', alignItems:'center', justifyContent:'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
          }}>
            <img src="/assets/crew-logo-white.png" style={{width:'78%', height:'auto', display:'block'}} alt="Crew of Builders Logo"/>
            <div style={{position:'absolute', top:22, left:26, fontSize:11, color:'rgba(245,239,230,0.55)', fontWeight:700, letterSpacing:'0.16em', fontFamily:'var(--font-mono, monospace)'}}>EST. 2026 · SP</div>
            <div style={{position:'absolute', top:22, right:26, fontSize:11, color:'#FF5A1F', fontWeight:700, letterSpacing:'0.16em', display:'flex', alignItems:'center', gap:6, fontFamily:'var(--font-mono, monospace)'}}>
              <span style={{width:6,height:6,borderRadius:'50%', background:'#FF5A1F', boxShadow:'0 0 0 3px rgba(255,90,31,0.2)'}}/> MAY 18
            </div>
            <div style={{position:'absolute', bottom:22, left:26, right:26, display:'flex', justifyContent:'space-between', fontSize:11, color:'rgba(245,239,230,0.55)', fontWeight:700, letterSpacing:'0.16em', fontFamily:'var(--font-mono, monospace)'}}>
              <span>№ 001</span>
              <span>BY WE HEART ↗</span>
            </div>
          </div>
        </div>

      </main>

      <footer className="w-full max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] tracking-[0.15em] text-[#6B6862] uppercase pt-8 border-t border-[#0A0A0A]/5 mt-auto z-10">
        <span className="opacity-70">© 2026 Crew of Builders</span>
        <span className="font-semibold text-[#0A0A0A]">Operated by WE Heart</span>
      </footer>

    </div>
  );
}