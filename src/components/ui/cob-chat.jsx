"use client";
import React from "react";

const CREW = { ink:'#111', cream:'#F5F1E8', orange:'#FF5A1F' };

const chatTestimonials = [
  { name: 'Gabriel Ribeiro', role: 'Builder', avatar: '/assets/builders/gabriel-ribeiro.png', text: 'Participating in Batch 1 meant accessing a high-level ecosystem of operators and founders, focused 100% on execution. It was in this high-friction, tactical environment that the foundation of Next Act began. For those who solve complex problems, being in the Crew isn\'t just networking—it\'s a competitive advantage.' },
  { name: 'Lucas da Silva', role: 'Builder', avatar: '/assets/builders/lucas-da-silva.png', text: 'The Crew can be summarized as \'constant learning\'. I absorbed new insights every second from mentors, peers, Dani, and Joao. It sharpened my builder mindset, and it\'s the core reason I\'m actively building market solutions today with companies like AlugaMais and Clyvo.' },
  { name: 'Marco Puerari', role: 'Builder', avatar: '/assets/builders/marco-puerari.png', text: 'People. The greatest value came from them. I never left a mentor session without a new idea to test or a fresh insight to apply. From Joao, I learned product strategy and execution. From Dani, I realized that failure only exists if you stop trying. The real value is in the team and the connections built for the journey ahead.' },
  { name: 'Mikael Carvalho', role: 'Builder', avatar: '/assets/builders/mikael-carvalho.png', text: 'Being part of the Crew of Builders was a game-changer. The sheer level of execution and the exchanges with mentors brought immediate clarity to my projects. It\'s not just about connections; it\'s about being in an ecosystem that forces you to raise the bar and build smarter every single day. The constant learning and being in the trenches completely shifted my business mindset.' },
  { name: 'Vinicius Moreira', role: 'Builder', avatar: '/assets/builders/vinicius-moreira.png', text: 'The density of talent in the Crew is unmatched. I connected with people who were facing the exact same engineering and business scaling challenges. The batch was intense, but it forged real partnerships that accelerated my roadmap by months. It\'s pure signal, zero noise.' },
  { name: 'Pedro Nagamine', role: 'Builder', avatar: '/assets/builders/pedro-nagamine.png', text: 'What separates the Crew from other communities is the brutal honesty. There is no room for vanity metrics here. The mentor sessions and peer feedback pushed me to scrap what wasn\'t working and focus entirely on execution. It\'s a high-stakes environment that actually delivers results.' },
];

const kickerDesktop = {
  fontSize: 11, fontWeight: 700,
  letterSpacing: '0.18em', textTransform: 'uppercase',
};
const kickerMobile = {
  fontSize: 10, fontWeight: 700,
  letterSpacing: '0.16em', textTransform: 'uppercase',
};
const h2Desktop = {
  fontSize: 'clamp(40px, 5vw, 76px)',
  lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.035em',
  margin: 0,
};

function ChatBubble({ msg, mobile }) {
  const bubbleStyle = {
    background: CREW.orange, color: '#FFFFFF',
    padding: mobile ? '12px 16px' : '14px 18px',
    fontSize: mobile ? 14 : 15, lineHeight: 1.5,
    borderRadius: msg.isRight ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
    boxShadow: '0 4px 14px rgba(255,90,31,0.18)',
  };
  const avatarSize = mobile ? 34 : 40;

  const avatar = (
    <img src={msg.avatar} alt={msg.name} style={{
      width: avatarSize, height: avatarSize, borderRadius: '50%',
      border: '1px solid rgba(10,10,10,0.08)', flexShrink: 0, background: '#F0EDE6',
    }}/>
  );

  return (
    <div className="cob-chat-msg" style={{
      display: 'flex', justifyContent: msg.isRight ? 'flex-end' : 'flex-start',
      alignItems: 'flex-end', gap: mobile ? 8 : 12,
    }}>
      {!msg.isRight && avatar}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: msg.isRight ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
        <div style={{
          display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4,
          ...(msg.isRight ? { flexDirection: 'row-reverse' } : {}),
        }}>
          <span style={{ fontSize: mobile ? 13 : 14, fontWeight: 600, color: CREW.ink }}>{msg.name}</span>
          <span style={{ fontSize: mobile ? 11 : 12, color: 'rgba(10,10,10,0.45)' }}>{msg.role}</span>
        </div>
        <div style={bubbleStyle}>{msg.text}</div>
      </div>
      {msg.isRight && avatar}
    </div>
  );
}

function TypingIndicator({ user, mobile }) {
  const bubbleStyle = {
    background: CREW.orange, color: '#FFFFFF',
    padding: mobile ? '12px 16px' : '14px 18px',
    fontSize: mobile ? 14 : 15, lineHeight: 1.5,
    borderRadius: user.isRight ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
    boxShadow: '0 4px 14px rgba(255,90,31,0.18)',
    display: 'flex', gap: 4, alignItems: 'center',
  };
  const avatarSize = mobile ? 34 : 40;
  const dot = { width: 6, height: 6, borderRadius: '50%', background: 'rgba(255,255,255,0.8)', display: 'inline-block' };

  const avatar = (
    <img src={user.avatar} alt={user.name} style={{
      width: avatarSize, height: avatarSize, borderRadius: '50%',
      border: '1px solid rgba(10,10,10,0.08)', opacity: 0.7, flexShrink: 0, background: '#F0EDE6',
    }}/>
  );

  return (
    <div className="cob-chat-msg" style={{
      display: 'flex', justifyContent: user.isRight ? 'flex-end' : 'flex-start',
      alignItems: 'flex-end', gap: mobile ? 8 : 12,
    }}>
      {!user.isRight && avatar}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: user.isRight ? 'flex-end' : 'flex-start' }}>
        <span style={{ fontSize: mobile ? 13 : 14, fontWeight: 600, color: CREW.ink, marginBottom: 4 }}>{user.name}</span>
        <div style={bubbleStyle}>
          <span className="cob-typing-dot" style={dot}/>
          <span className="cob-typing-dot" style={dot}/>
          <span className="cob-typing-dot" style={dot}/>
        </div>
      </div>
      {user.isRight && avatar}
    </div>
  );
}

function MarqueeCard({ msg, bg, bordered, light }) {
  const textColor = light ? '#FFFFFF' : CREW.ink;
  const subColor = light ? 'rgba(255,255,255,0.7)' : 'rgba(10,10,10,0.5)';
  return (
    <div className="cob-marquee-card" style={{
      background: bg || '#FFF',
      border: bordered ? '1px solid rgba(10,10,10,0.1)' : 'none',
      borderRadius: 14,
      padding: '16px 20px',
      minWidth: 360, maxWidth: 420,
      flexShrink: 0,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      cursor: 'default',
    }}>
      <p style={{ margin: '0 0 12px', fontSize: 13, lineHeight: 1.55, color: textColor }}>{msg.text}</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src={msg.avatar} alt={msg.name} style={{
          width: 26, height: 26, borderRadius: '50%',
          border: light ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(10,10,10,0.08)', background: '#F0EDE6',
        }}/>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: textColor, lineHeight: 1.2 }}>{msg.name}</div>
          <div style={{ fontSize: 11, color: subColor }}>{msg.role}</div>
        </div>
      </div>
    </div>
  );
}

function MarqueeSection({ mobile }) {
  const peach = '#F8C9A8';
  const row1 = [...chatTestimonials, ...chatTestimonials];
  const row2 = [...[...chatTestimonials].reverse(), ...[...chatTestimonials].reverse()];
  const kicker = mobile ? kickerMobile : kickerDesktop;
  const fadeW = mobile ? 40 : 120;

  return (
    <section style={{ padding: mobile ? '48px 0' : '88px 0 56px' }}>
      <style>{`
        @keyframes cob-marquee-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes cob-marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .cob-marquee-area:hover .cob-marquee-row { animation-play-state: paused !important; }
        .cob-marquee-card:hover { transform: scale(1.05); box-shadow: 0 8px 30px rgba(0,0,0,0.12); z-index: 3; position: relative; }
      `}</style>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: mobile ? '0 20px' : '0 32px', marginBottom: mobile ? 28 : 40 }}>
        <div style={{ ...kicker, color: CREW.orange, marginBottom: mobile ? 12 : 14, textAlign: 'center' }}>From the Crew</div>
        <h2 style={mobile
          ? { fontSize: 34, lineHeight: 0.98, fontWeight: 700, letterSpacing: '-0.03em', margin: 0, textAlign: 'center' }
          : { ...h2Desktop, textAlign: 'center' }
        }>
          What builders<br/>are saying.
        </h2>
      </div>

      <div className="cob-marquee-area" style={{ position: 'relative', overflow: 'hidden', padding: '8px 0' }}>
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: fadeW, zIndex: 2,
          background: `linear-gradient(90deg, ${CREW.cream} 0%, rgba(245,239,230,0) 100%)`,
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: fadeW, zIndex: 2,
          background: `linear-gradient(270deg, ${CREW.cream} 0%, rgba(245,239,230,0) 100%)`,
          pointerEvents: 'none',
        }}/>

        <div className="cob-marquee-row" style={{
          display: 'flex', gap: mobile ? 12 : 18, width: 'max-content',
          animation: 'cob-marquee-left 60s linear infinite',
          marginBottom: mobile ? 12 : 18,
        }}>
          {row1.map((msg, i) => <MarqueeCard key={'r1-'+i} msg={msg} bg={peach}/>)}
        </div>

        <div className="cob-marquee-row" style={{
          display: 'flex', gap: mobile ? 12 : 18, width: 'max-content',
          animation: 'cob-marquee-right 70s linear infinite',
        }}>
          {row2.map((msg, i) => <MarqueeCard key={'r2-'+i} msg={msg} bg="#FFFFFF" bordered/>)}
        </div>
      </div>
    </section>
  );
}

function MobileChatSection() {
  const containerRef = React.useRef(null);
  const [messages, setMessages] = React.useState([]);
  const [typing, setTyping] = React.useState(null);

  React.useEffect(() => {
    let cancelled = false;
    const sleep = (ms) => new Promise(r => setTimeout(r, ms));

    async function playChat() {
      while (!cancelled) {
        setMessages([]);
        setTyping(null);
        await sleep(800);

        for (let i = 0; i < chatTestimonials.length; i++) {
          if (cancelled) return;
          const msg = chatTestimonials[i];
          const isRight = i % 2 !== 0;

          setTyping({ ...msg, isRight });
          await sleep(msg.delay);
          if (cancelled) return;

          setTyping(null);
          setMessages(prev => [...prev, { ...msg, isRight }]);
          await sleep(1200);
          if (cancelled) return;
        }

        await sleep(8000);
      }
    }

    playChat();
    return () => { cancelled = true; };
  }, []);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, typing]);

  return (
    <section style={{ padding: '48px 20px' }}>
      <style>{`
        @keyframes cobChatBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
        @keyframes cobChatFadeIn {
          from { opacity: 0; transform: translateY(15px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .cob-typing-dot { animation: cobChatBounce 1.4s infinite ease-in-out both; }
        .cob-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .cob-typing-dot:nth-child(2) { animation-delay: -0.16s; }
        .cob-chat-msg { animation: cobChatFadeIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        .cob-chat-scroll::-webkit-scrollbar { display: none; }
        .cob-chat-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ ...kickerMobile, color: CREW.orange, marginBottom: 12 }}>From the Crew</div>
        <h2 style={{ fontSize: 34, lineHeight: 0.98, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 28px', textAlign: 'center' }}>
          What builders<br/>are saying.
        </h2>
        <div
          ref={containerRef}
          className="cob-chat-scroll"
          style={{
            width: '100%',
            height: 420,
            overflowY: 'auto',
            display: 'flex', flexDirection: 'column', gap: 18,
            padding: '24px 0',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {messages.map((msg, i) => <ChatBubble key={i} msg={msg} mobile/>)}
          {typing && <TypingIndicator user={typing} mobile/>}
        </div>
      </div>
    </section>
  );
}

export default function CobChatSection({ mobile }) {
  return <MarqueeSection mobile={mobile}/>;
}
