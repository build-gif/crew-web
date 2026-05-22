"use client";
import React from "react";

const CREW = { ink:'#111', cream:'#F5F1E8', orange:'#FF5A1F' };

const chatTestimonials = [
  { name: 'Gabriel Ribeiro', role: 'Builder', avatar: '/assets/builders/gabriel-ribeiro.png', text: 'Desde que entrei no Crew, conectei com founders que estão resolvendo problemas parecidos. Isso acelerou demais as minhas decisões.', delay: 2500 },
  { name: 'Lucas da Silva', role: 'Builder', avatar: '/assets/builders/lucas-da-silva.png', text: 'O nível das conversas aqui é outro. Sem papo genérico — todo mundo tá construindo de verdade e compartilhando o que funciona.', delay: 3500 },
  { name: 'Marco Puerari', role: 'Builder', avatar: '/assets/builders/marco-puerari.png', text: 'O Crew me deu acesso a operadores que eu levaria meses pra alcançar. Uma intro aqui vale mais que 50 cold emails.', delay: 3000 },
  { name: 'Mikael Carvalho', role: 'Builder', avatar: '/assets/builders/mikael-carvalho.png', text: 'O melhor é a cadência. Toda semana você vê o que os outros estão shipando e isso te puxa pra frente.', delay: 2800 },
  { name: 'Nathan Nobrega', role: 'Builder', avatar: '/assets/builders/nathan-nobrega.png', text: 'My experience with the Crew of Builders was sensational — not only for the opportunity to create an application from scratch, but mainly for the meetings we had with different people from different areas. The one that marked me the most was with André Bernardi, who taught me to think like a designer to develop any product. I also have a lot to thank Daniel and João for, who gave me a completely different vision of what I thought entrepreneurship was. The members were always very helpful and focused on growing together. It was certainly an exceptional experience.', delay: 3200 },
  { name: 'Pedro Nagamine', role: 'Builder', avatar: '/assets/builders/pedro-nagamine.png', text: 'O formato async funciona muito bem. Consigo participar no meu ritmo sem atrapalhar o dia a dia de founder.', delay: 2600 },
  { name: 'Vinicius Moreira', role: 'Builder', avatar: '/assets/builders/vinicius-moreira.png', text: 'O Crew é tipo ter um board informal de founders que realmente entendem o que você tá passando. Recomendo demais.', delay: 3100 },
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

export default function CobChatSection({ mobile }) {
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

  const kicker = mobile ? kickerMobile : kickerDesktop;
  const titleStyle = mobile
    ? { fontSize: 34, lineHeight: 0.98, fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 28px', textAlign: 'center' }
    : { ...h2Desktop, marginBottom: 48, textAlign: 'center' };

  return (
    <section style={{ padding: mobile ? '48px 20px' : '88px 32px 56px' }}>
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
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ ...kicker, color: CREW.orange, marginBottom: mobile ? 12 : 14 }}>From the Crew</div>
        <h2 style={titleStyle}>
          What builders<br/>are saying.
        </h2>
        <div
          ref={containerRef}
          className="cob-chat-scroll"
          style={{
            width: '100%',
            maxWidth: mobile ? undefined : 680,
            height: mobile ? 420 : 500,
            overflowY: 'auto',
            display: 'flex', flexDirection: 'column', gap: mobile ? 18 : 24,
            padding: '24px 0',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          }}
        >
          {messages.map((msg, i) => <ChatBubble key={i} msg={msg} mobile={mobile}/>)}
          {typing && <TypingIndicator user={typing} mobile={mobile}/>}
        </div>
      </div>
    </section>
  );
}
