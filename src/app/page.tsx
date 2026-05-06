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
    <div className="min-h-screen bg-[#F2EFE6] text-[#0A0A0A] flex flex-col justify-between items-center px-6 py-12">
      
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[640px] text-center gap-12">
        
        {/* LOGO REUSE - Using the black logo from assets */}
        <div className="flex justify-center mb-4">
          <img src="/assets/crew-logo-black.png" alt="Crew of Builders Logo" className="w-[85%] max-w-[500px] h-auto object-contain" />
        </div>

        <p className="font-serif-it text-[clamp(24px,5vw,36px)] leading-snug text-[#0A0A0A]/90 max-w-[500px]">
          A community of founders building the next thing. Together.
        </p>

        <div className="flex flex-col items-center gap-8 w-full mt-4">
          <div className="font-mono text-[11px] tracking-[0.2em] text-[#6B6862] uppercase">
            THE ROOM OPENS MAY 18
          </div>

          {status === 'success' ? (
            <div className="w-full max-w-sm flex flex-col items-center gap-3 animate-in fade-in zoom-in-95 duration-500 py-4">
              <span className="font-mono text-[14px] font-bold tracking-widest text-[#227468]">YOU'RE IN</span>
              <span className="text-[15px] text-[#6B6862]">We'll send the link the moment it opens.</span>
            </div>
          ) : (
            <form onSubmit={submit} className="w-full max-w-sm flex flex-col sm:flex-row gap-3 relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full sm:flex-1 bg-transparent border border-[#D4D0C2] rounded-[2px] px-5 py-4 text-[15px] outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-[#6B6862]/60 text-[#0A0A0A]"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#F2EFE6] px-6 py-4 rounded-[2px] font-medium text-[15px] hover:bg-[#227468] transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {status === 'loading' ? '...' : 'Be the first to know →'}
              </button>
            </form>
          )}
          {status === 'error' && <p className="text-[13px] text-red-600">{msg}</p>}
        </div>
      </div>

      <footer className="w-full max-w-[1280px] flex justify-between items-center font-mono text-[10px] tracking-[0.15em] text-[#6B6862] uppercase pt-12">
        <span>EST. 2026</span>
        <span>BY WE HEART</span>
      </footer>

    </div>
  );
}
