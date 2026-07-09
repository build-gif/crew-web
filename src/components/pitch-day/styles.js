import { CREW_TOKENS } from "@/components/ui/crew-shared";

const CREW = CREW_TOKENS;
const ink = (a) => `rgba(10, 10, 10, ${a})`;
const cream = (a) => `rgba(245, 239, 230, ${a})`;
const surface = CREW.bone;

export const PITCH_DAY_STYLES = `
  .pitch-day, .pitch-day *, .pitch-day *::before, .pitch-day *::after { box-sizing: border-box; }
  .pitch-day {
    background: ${CREW.cream};
    color: ${CREW.ink};
    font-family: var(--font-sans);
    font-feature-settings: 'ss01','cv11';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: -0.01em;
    overflow-x: hidden;
  }
  .pitch-day a { color: inherit; text-decoration: none; }
  .pitch-day h1, .pitch-day h2, .pitch-day h3 { font-family: var(--font-sans); font-weight: 700; margin: 0; }

  .pd-wrap { max-width: 1200px; margin: 0 auto; padding: 0 32px; }
  .pd-kicker {
    font-family: var(--font-mono); font-size: 11px; font-weight: 600;
    letter-spacing: 0.18em; text-transform: uppercase; color: ${CREW.orange};
  }
  .pd-btn {
    display: inline-flex; align-items: center; gap: 9px;
    background: ${CREW.orange}; color: #fff;
    padding: 14px 24px; border: none; border-radius: 12px;
    font-family: var(--font-sans); font-size: 14px; font-weight: 600;
    cursor: pointer; transition: background 140ms ease;
  }
  .pd-btn:hover { background: ${CREW.orangeDark}; }
  .pd-btn svg { display: block; }
  .pd-btn-ghost { background: transparent; color: ${CREW.ink}; border: 1.5px solid ${CREW.ink}; }
  .pd-btn-ghost:hover { background: ${CREW.ink}; color: ${CREW.cream}; }

  /* Top bar */
  .pd-topbar {
    position: sticky; top: 0; z-index: 50;
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 32px;
    background: ${cream(0.86)};
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    border-bottom: 1px solid ${ink(0.08)};
  }
  .pd-brand { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
  .pd-brand .pd-name { font-family: var(--font-sans); font-size: 20px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; line-height: 1; }
  .pd-brand .pd-powered { font-family: var(--font-mono); font-size: 10px; color: ${ink(0.45)}; letter-spacing: 0.1em; }
  .pd-btn-sm { padding: 11px 18px; font-size: 13px; }

  /* Hero */
  .pd-hero { padding: 120px 0 132px; }
  .pd-hero .pd-grid { display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 56px; align-items: center; }
  .pd-hero .pd-eyebrow { display: flex; align-items: baseline; gap: 12px; margin-bottom: 22px; }
  .pd-hero .pd-eyebrow .pd-ff {
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.16em;
    text-transform: uppercase; color: ${ink(0.55)}; align-self: center;
  }
  .pd-hero .pd-eyebrow .pd-dd {
    font-family: var(--font-sans); font-weight: 700;
    font-size: clamp(22px, 2.4vw, 30px); letter-spacing: -0.02em;
    text-transform: uppercase; line-height: 1;
    display: inline-flex; align-items: baseline; gap: 9px;
  }
  .pd-hero .pd-eyebrow .pd-dd .pd-old { position: relative; color: ${ink(0.55)}; text-decoration: none; }
  .pd-hero .pd-eyebrow .pd-dd .pd-old::after {
    content: ""; position: absolute; left: -6%; right: -6%; top: 52%;
    height: 3px; background: ${CREW.orange};
    transform: rotate(-5deg); transform-origin: center; border-radius: 3px;
  }
  .pd-hero .pd-eyebrow .pd-dd .pd-new { color: ${CREW.orange}; }
  .pd-hero h1 { font-size: clamp(40px, 4.4vw, 68px); line-height: 0.98; letter-spacing: -0.035em; }
  .pd-hero h1 .pd-o { color: ${CREW.orange}; display: block; }
  .pd-hero h1 .pd-l1 { display: block; }
  .pd-hero .pd-cta-row { display: flex; align-items: center; gap: 14px; margin-top: 36px; flex-wrap: wrap; }

  /* Save-the-date card */
  .pd-save-card {
    background: ${CREW.ink}; color: ${CREW.cream};
    border-radius: 22px; padding: 30px 32px 28px; position: relative; overflow: hidden;
  }
  .pd-save-card::after {
    content: ""; position: absolute; right: -60px; top: -60px; width: 220px; height: 220px;
    background: radial-gradient(circle, rgba(255,90,31,0.55) 0%, rgba(255,90,31,0) 68%);
    pointer-events: none;
  }
  .pd-save-card .pd-sc-top {
    position: relative; z-index: 2; display: flex; align-items: center; justify-content: space-between;
    font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; color: ${cream(0.65)};
  }
  .pd-save-card .pd-sc-live { display: inline-flex; align-items: center; gap: 7px; color: ${CREW.cream}; }
  .pd-save-card .pd-pulse { width: 7px; height: 7px; border-radius: 50%; background: ${CREW.orange}; box-shadow: 0 0 0 0 rgba(255,90,31,0.6); animation: pd-scpulse 1.8s infinite; }
  @keyframes pd-scpulse { 0% { box-shadow: 0 0 0 0 rgba(255,90,31,0.55); } 70% { box-shadow: 0 0 0 9px rgba(255,90,31,0); } 100% { box-shadow: 0 0 0 0 rgba(255,90,31,0); } }
  .pd-save-card .pd-sc-day { position: relative; z-index: 2; display: flex; align-items: baseline; gap: 14px; margin: 22px 0 26px; }
  .pd-save-card .pd-sc-day .pd-d { font-family: var(--font-sans); font-weight: 700; font-size: clamp(96px, 11vw, 148px); line-height: 0.82; letter-spacing: -0.05em; color: ${CREW.orange}; }
  .pd-save-card .pd-sc-day .pd-mo { font-family: var(--font-sans); font-weight: 700; font-size: 24px; letter-spacing: -0.02em; }
  .pd-save-card .pd-sc-meta { position: relative; z-index: 2; display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; padding-top: 22px; border-top: 1px solid ${cream(0.14)}; }
  .pd-save-card .pd-sc-meta .pd-l { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: ${cream(0.65)}; margin-bottom: 7px; }
  .pd-save-card .pd-sc-meta .pd-v { font-family: var(--font-sans); font-weight: 700; font-size: 17px; letter-spacing: -0.02em; }
  .pd-save-card .pd-sc-meta .pd-v .pd-tz { font-family: var(--font-mono); font-size: 10px; font-weight: 500; color: ${cream(0.65)}; letter-spacing: 0.06em; margin-left: 2px; }
  .pd-save-card .pd-sc-host { position: relative; z-index: 2; display: flex; align-items: center; gap: 12px; margin-top: 24px; padding-top: 22px; border-top: 1px solid ${cream(0.14)}; }
  .pd-save-card .pd-sc-host img { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; flex: 0 0 auto; }
  .pd-save-card .pd-sc-host .pd-l { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: ${cream(0.65)}; margin-bottom: 4px; }
  .pd-save-card .pd-sc-host .pd-n { font-family: var(--font-sans); font-weight: 700; font-size: 16px; letter-spacing: -0.02em; color: ${CREW.cream}; }

  /* Section scaffold */
  .pd-section { padding: 104px 0; }
  .pd-section .pd-head { max-width: 780px; margin-bottom: 52px; }
  .pd-section h2 { font-size: clamp(30px, 3.6vw, 52px); line-height: 0.98; letter-spacing: -0.03em; margin: 16px 0 0; }
  .pd-section .pd-h-sub { font-size: 17px; line-height: 1.55; color: ${ink(0.72)}; margin: 18px 0 0; max-width: 720px; }

  /* VC logos */
  .pd-logo-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
  .pd-logo-cell {
    position: relative; aspect-ratio: 3 / 2;
    background: ${surface}; border: 1px solid ${CREW.line};
    border-radius: 14px; overflow: hidden;
    transition: border-color 140ms ease, transform 140ms ease;
  }
  .pd-logo-cell:hover { border-color: ${CREW.ink}; transform: translateY(-2px); }
  .pd-logo-cell img { width: 100%; height: 100%; object-fit: contain; padding: 26px; }

  /* Line-up (mystery cards) */
  .pd-lineup { background: ${surface}; border-top: 1px solid ${CREW.line}; border-bottom: 1px solid ${CREW.line}; }
  .pd-lineup .pd-head .pd-reveal-tag {
    display: inline-flex; align-items: center; gap: 9px; margin-top: 22px;
    font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.06em;
    color: ${CREW.ink}; background: ${CREW.cream}; border: 1px solid ${CREW.line};
    border-radius: 999px; padding: 8px 15px 8px 11px;
  }
  .pd-lineup .pd-head .pd-reveal-tag .pd-badge { background: ${CREW.orange}; color: #fff; font-weight: 600; padding: 3px 9px; border-radius: 999px; font-size: 11px; }
  .pd-mystery-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
  .pd-mystery {
    position: relative; aspect-ratio: 3 / 4; border-radius: 16px; overflow: hidden;
    background: ${CREW.ink}; color: ${CREW.cream};
    display: flex; flex-direction: column; justify-content: space-between; padding: 20px;
    transition: transform 160ms ease;
  }
  .pd-mystery:hover { transform: translateY(-3px); }
  .pd-mystery::after {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(120% 90% at 50% 115%, rgba(255,90,31,0.42) 0%, rgba(255,90,31,0) 60%);
    pointer-events: none;
  }
  .pd-mystery .pd-num { position: relative; z-index: 2; font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.12em; color: ${cream(0.65)}; }
  .pd-mystery .pd-q { position: relative; z-index: 2; font-family: var(--font-sans); font-weight: 700; font-size: clamp(46px, 4vw, 68px); line-height: 1; color: ${CREW.orange}; }
  .pd-mystery .pd-status { position: relative; z-index: 2; font-family: var(--font-mono); font-size: 10.5px; letter-spacing: 0.1em; text-transform: uppercase; color: ${cream(0.65)}; }

  /* Stakes (format band) */
  .pd-stakes { background: ${CREW.ink}; color: ${CREW.cream}; position: relative; overflow: hidden; }
  .pd-stakes::before { content: ""; position: absolute; right: -150px; top: -90px; width: 540px; height: 540px; background: radial-gradient(circle, rgba(255,90,31,0.28) 0%, rgba(255,90,31,0) 64%); pointer-events: none; }
  .pd-stakes::after { content: ""; position: absolute; right: 160px; bottom: -180px; width: 400px; height: 400px; background: radial-gradient(circle, rgba(255,90,31,0.12) 0%, rgba(255,90,31,0) 68%); pointer-events: none; }
  .pd-stakes .pd-wrap { position: relative; z-index: 1; }
  .pd-stakes .pd-inner { padding: 96px 0; }
  .pd-stakes .pd-kicker { color: ${CREW.orange}; }
  .pd-stakes h2 { font-size: clamp(32px, 3.6vw, 54px); line-height: 0.98; letter-spacing: -0.035em; margin: 16px 0 0; }
  .pd-stakes .pd-h-sub { font-size: 17px; line-height: 1.55; color: ${cream(0.65)}; margin: 20px 0 0; max-width: 760px; }
  .pd-stakes .pd-cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
  .pd-stakes .pd-col { border: 1px solid ${cream(0.14)}; border-radius: 16px; padding: 32px 28px; }
  .pd-stakes .pd-col .pd-num { font-family: var(--font-sans); font-weight: 700; font-size: clamp(44px, 4.6vw, 64px); line-height: 0.9; letter-spacing: -0.03em; }
  .pd-stakes .pd-col .pd-num .pd-u { font-size: 0.32em; color: ${cream(0.65)}; letter-spacing: 0; margin-left: 3px; }
  .pd-stakes .pd-col .pd-num .pd-o { color: ${CREW.orange}; }
  .pd-stakes .pd-col .pd-d { font-size: 15px; line-height: 1.5; color: ${cream(0.65)}; margin-top: 16px; }
  .pd-stakes .pd-col .pd-d b { color: ${CREW.cream}; font-weight: 600; }
  .pd-stakes .pd-stakes-cta { position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-top: 34px; padding-top: 30px; border-top: 1px solid ${cream(0.14)}; }
  .pd-stakes .pd-stakes-cta span { font-size: 16px; color: ${cream(0.65)}; }
  .pd-stakes .pd-stakes-cta b { color: ${CREW.cream}; font-weight: 600; }

  /* Final CTA */
  .pd-final { background: ${CREW.ink}; color: ${CREW.cream}; padding: 120px 0 128px; }
  .pd-final .pd-commit { max-width: 720px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; }
  .pd-final .pd-commit-eyebrow { font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.16em; text-transform: uppercase; color: ${CREW.orange}; }
  .pd-final h2 { font-size: clamp(52px, 8vw, 116px); line-height: 0.88; letter-spacing: -0.04em; margin-top: 22px; }
  .pd-final h2 .pd-o { color: ${CREW.orange}; }
  .pd-final .pd-commit-facts { display: flex; align-items: baseline; gap: 14px; flex-wrap: wrap; justify-content: center; margin-top: 30px; font-family: var(--font-mono); font-size: 14px; letter-spacing: 0.03em; color: ${cream(0.65)}; }
  .pd-final .pd-commit-facts b { font-family: var(--font-sans); font-weight: 700; font-size: 19px; letter-spacing: -0.02em; color: ${CREW.cream}; margin-right: 5px; }
  .pd-final .pd-commit-facts .pd-dot { color: ${cream(0.14)}; }
  .pd-final .pd-cta-row { display: flex; gap: 16px; margin-top: 40px; flex-wrap: wrap; justify-content: center; }
  .pd-final .pd-btn-ghost { color: ${CREW.cream}; border-color: rgba(245,239,230,0.5); }
  .pd-final .pd-btn-ghost:hover { background: ${CREW.cream}; color: ${CREW.ink}; }
  .pd-final .pd-btn-lg { padding: 19px 34px; font-size: 17px; }
  .pd-final .pd-commit-note { margin-top: 22px; font-size: 14px; color: ${cream(0.65)}; }
  .pd-final .pd-commit-proof { display: flex; align-items: center; gap: 14px; margin-top: 44px; padding-top: 34px; border-top: 1px solid ${cream(0.14)}; flex-wrap: wrap; justify-content: center; }
  .pd-final .pd-commit-proof .pd-stack { display: flex; }
  .pd-final .pd-commit-proof .pd-stack img { width: 38px; height: 38px; border-radius: 50%; object-fit: cover; border: 2.5px solid ${CREW.ink}; margin-left: -11px; background: ${CREW.orange}; }
  .pd-final .pd-commit-proof .pd-stack img:first-child { margin-left: 0; }
  .pd-final .pd-commit-proof span { font-size: 14.5px; color: ${cream(0.65)}; }
  .pd-final .pd-commit-proof b { color: ${CREW.cream}; font-weight: 600; }

  /* Footer */
  .pd-footer { background: ${CREW.ink}; color: ${CREW.cream}; padding: 8px 0 34px; }
  .pd-footer .pd-row { display: flex; align-items: flex-start; justify-content: space-between; gap: 32px; flex-wrap: wrap; padding: 40px 0 28px; border-top: 1px solid ${cream(0.14)}; }
  .pd-footer img { height: 44px; margin: -4px 0 14px -2px; display: block; }
  .pd-footer .pd-blurb { font-size: 13.5px; color: ${cream(0.65)}; max-width: 400px; line-height: 1.5; }
  .pd-footer .pd-links { display: flex; gap: 22px; font-size: 14px; }
  .pd-footer .pd-links a:hover { color: ${CREW.orange}; }
  .pd-footer .pd-base { display: flex; justify-content: space-between; padding-top: 22px; font-family: var(--font-mono); font-size: 11.5px; color: ${cream(0.65)}; flex-wrap: wrap; gap: 8px; letter-spacing: 0.04em; }

  @media (max-width: 900px) {
    .pd-hero .pd-grid { grid-template-columns: 1fr; gap: 40px; }
    .pd-hero h1 { font-size: clamp(48px, 12vw, 76px); }
    .pd-stakes .pd-cols { grid-template-columns: 1fr; }
    .pd-logo-grid { grid-template-columns: repeat(3, 1fr); }
    .pd-mystery-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 640px) {
    .pd-wrap { padding: 0 20px; }
    .pd-topbar { padding: 12px 20px; }
    .pd-topbar .pd-brand .pd-name { font-size: 17px; }
    .pd-btn-sm { padding: 10px 15px; font-size: 12px; }
    .pd-hero { padding: 54px 0 64px; }
    .pd-hero .pd-grid { gap: 32px; }
    .pd-hero h1 { font-size: clamp(38px, 10vw, 58px); }
    .pd-hero .pd-cta-row { gap: 10px; }
    .pd-hero .pd-cta-row .pd-btn { flex: 1 1 auto; justify-content: center; }
    .pd-save-card { padding: 26px 24px 24px; }
    .pd-save-card .pd-sc-day { margin: 18px 0 22px; }
    .pd-save-card .pd-sc-day .pd-d { font-size: 84px; }
    .pd-stakes .pd-inner { padding: 64px 0; }
    .pd-stakes h2, .pd-section h2 { font-size: clamp(28px, 8vw, 42px); }
    .pd-stakes .pd-stakes-cta { flex-direction: column; align-items: stretch; gap: 16px; }
    .pd-stakes .pd-stakes-cta .pd-btn { width: 100%; justify-content: center; }
    .pd-section { padding: 64px 0; }
    .pd-logo-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
    .pd-mystery-grid { grid-template-columns: repeat(2, 1fr); }
    .pd-final { padding: 76px 0; }
    .pd-final h2 { font-size: clamp(40px, 13vw, 72px); }
    .pd-final .pd-cta-row { gap: 10px; }
    .pd-final .pd-cta-row .pd-btn { flex: 1 1 auto; justify-content: center; }
    .pd-footer .pd-row { flex-direction: column; gap: 22px; }
    .pd-footer .pd-base { flex-direction: column; gap: 6px; }
  }
`;
