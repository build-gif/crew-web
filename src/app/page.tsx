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
    <div className="min-h-screen bg-[#F2EFE6] text-[#0A0A0A] flex flex-col justify-between items-center px-6 py-12 relative overflow-hidden">
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <nav className="w-full max-w-[1280px] flex justify-between items-center z-10">
         <div className="font-bold text-[18px] tracking-[-0.03em] text-[#0A0A0A]">
            WE Heart
         </div>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[720px] text-center gap-10 sm:gap-14 z-10 my-16">
        
        <div className="w-full flex justify-center mb-0 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <img src="/assets/crew-logo-black.png" alt="Crew of Builders Logo" className="w-[60%] max-w-[280px] h-auto object-contain" style={{ mixBlendMode: 'darken' }} />
        </div>

        <p className="font-serif-it text-[clamp(32px,7vw,52px)] leading-[1.1] text-[#0A0A0A]/90 max-w-[650px] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
          A community of founders building the next thing. Together.
        </p>

        <div className="flex flex-col items-center gap-8 w-full mt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
          
          <div className="flex items-center gap-3">
             <span className="w-2 h-2 rounded-full bg-[#227468] shadow-[0_0_0_4px_rgba(34,116,104,0.15)] animate-pulse" />
             <span className="font-mono text-[12px] font-semibold tracking-[0.2em] text-[#0A0A0A] uppercase">
               The room opens May 18
             </span>
          </div>

          {status === 'success' ? (
            <div className="w-full max-w-md flex flex-col items-center gap-4 bg-[#0A0A0A]/5 border border-[#0A0A0A]/10 p-8 rounded-[4px] mt-2">
              <div className="w-12 h-12 bg-[#227468]/10 flex items-center justify-center rounded-full mb-2">
                <span className="w-3 h-3 bg-[#227468] rounded-full"></span>
              </div>
              <span className="font-mono text-[16px] font-bold tracking-widest text-[#0A0A0A]">YOU'RE ON THE LIST</span>
              <span className="text-[16px] text-[#6B6862] leading-relaxed">We'll send the link the moment the gates open. Keep building.</span>
            </div>
          ) : (
            <form onSubmit={submit} className="w-full max-w-[460px] flex flex-col gap-3 relative mt-2">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@founder.com"
                  className="w-full sm:flex-1 bg-white/60 backdrop-blur-sm border border-[#0A0A0A]/20 rounded-[2px] px-6 py-4 text-[16px] outline-none focus:border-[#0A0A0A] focus:bg-white transition-all placeholder:text-[#0A0A0A]/40 text-[#0A0A0A] shadow-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#F2EFE6] px-8 py-4 rounded-[2px] font-medium text-[16px] hover:bg-[#227468] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 whitespace-nowrap shadow-md"
                >
                  {status === 'loading' ? 'Locking in...' : 'Join Waitlist'}
                </button>
              </div>
            </form>
          )}
          {status === 'error' && <p className="text-[14px] text-red-600 mt-2 bg-red-50 px-4 py-2 rounded border border-red-100">{msg}</p>}
        </div>
      </div>

      <footer className="w-full max-w-[1280px] flex flex-col sm:flex-row justify-between items-center gap-4 font-mono text-[11px] tracking-[0.15em] text-[#6B6862] uppercase pt-12 pb-4 z-10 border-t border-[#0A0A0A]/5 mt-auto">
        <span className="opacity-70">© 2026 Crew of Builders</span>
        <span className="font-semibold text-[#0A0A0A]">Operated by WE Heart</span>
      </footer>

    </div>
  );
}
