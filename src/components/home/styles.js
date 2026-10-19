import { CREW_TOKENS } from "@/components/ui/crew-tokens";

const C = CREW_TOKENS;
const ink = (a) => `rgba(10, 10, 10, ${a})`;

// Breakpoints (all max-width unless noted):
//   1199 testimonials 4-up → 2x2      1099 hero stacks, constellation → strip
//   1023 "Join as a builder" → "Join"  959 Inside/FAQ rows stack
//    767 testimonials → swipe rail     759 recent-event card stacks
//    599 ways stack, numbers shrink, intro steps go vertical
//    479 / 389 announcement bar shortens
export const HOME_STYLES = `
  .home, .home *, .home *::before, .home *::after { box-sizing: border-box; }
  .home {
    --orange: ${C.orange}; --orange-dark: ${C.orangeDark}; --orange-text: ${C.orangeText};
    --ink: ${C.ink}; --ink-hover: ${C.inkHover}; --cream: ${C.cream}; --surface: ${C.surface};
    --sand: ${C.sand}; --sand-2: ${C.sand2};
    --ink-80: ${ink(0.8)}; --ink-68: ${ink(0.68)}; --ink-62: ${ink(0.62)}; --ink-55: ${ink(0.55)};
    --line-16: ${ink(0.16)}; --line-12: ${ink(0.12)}; --line-10: ${ink(0.1)}; --line-08: ${ink(0.08)};
    --dash: ${ink(0.15)}; --veil: ${ink(0.28)};
    --display: var(--home-display), 'Space Grotesk', 'Inter', ui-sans-serif, system-ui, sans-serif;
    --sans: var(--home-sans), 'Inter', ui-sans-serif, system-ui, sans-serif;
    --mono: var(--home-mono), 'JetBrains Mono', ui-monospace, monospace;
    --gutter: clamp(20px, 4vw, 40px);
    /* Vertical rhythm, three tiers: between sections > between blocks inside
       a section > a block's own parts. Numbers sit closer to Welcome because
       they are its proof, not a new topic. */
    --section: clamp(72px, 8.4vw, 120px);
    --block: clamp(56px, 6vw, 88px);
    --related: clamp(48px, 5vw, 72px);
    --max: 1200px;

    background: var(--cream); color: var(--ink);
    font-family: var(--sans); font-size: 18px; line-height: 1.55;
    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    width: 100%; overflow-x: hidden;
  }
  /* Resets carry zero specificity (:where) so every component class wins. */
  :where(.home) a { color: var(--ink); text-decoration: none; }
  .home a:focus-visible, .home button:focus-visible, .home summary:focus-visible {
    outline: 2px solid var(--orange); outline-offset: 3px; border-radius: 4px;
  }
  :where(.home) :where(h1, h2, h3, p, figure, blockquote, ol) { margin: 0; }
  :where(.home) ol { padding: 0; list-style: none; }

  .h-wrap { max-width: var(--max); margin: 0 auto; }
  .h-section { padding: var(--section) var(--gutter) 0; }

  /* Type */
  .h-display {
    font-family: var(--display); font-weight: 700; font-size: clamp(52px, 8.4vw, 120px);
    line-height: 0.88; letter-spacing: -0.04em; text-wrap: balance;
  }
  .h-title {
    font-family: var(--display); font-weight: 700; font-size: clamp(40px, 4.6vw, 64px);
    line-height: 0.95; letter-spacing: -0.035em; text-wrap: balance;
  }
  .h-row-title {
    font-family: var(--display); font-weight: 700; font-size: clamp(32px, 3.2vw, 44px);
    line-height: 1; letter-spacing: -0.03em; text-wrap: balance;
  }
  .h-kicker {
    font-family: var(--mono); font-size: 12px; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: var(--orange); line-height: 1.2; margin-bottom: 16px;
  }
  .h-meta {
    font-family: var(--mono); font-size: 12px; font-weight: 600; letter-spacing: 0.14em;
    text-transform: uppercase; color: var(--ink-62);
  }
  .h-lead { font-size: 20px; line-height: 1.55; color: var(--ink-68); max-width: 60ch; text-wrap: pretty; }
  .h-body { font-size: 18px; line-height: 1.55; color: var(--ink-68); max-width: 60ch; text-wrap: pretty; }
  .h-note { font-family: var(--mono); font-size: 12px; color: var(--ink-62); margin-top: 16px; }
  .h-orange { color: var(--orange); }

  /* Buttons and links */
  .h-btn {
    display: inline-flex; align-items: center; gap: 10px; white-space: nowrap;
    padding: 15px 24px; border-radius: 12px; border: 2px solid transparent;
    font-family: var(--sans); font-size: 16px; font-weight: 600; line-height: 1.2;
    transition: background 140ms ease, color 140ms ease;
  }
  .home .h-btn-orange { background: var(--orange); color: var(--surface); }
  .home .h-btn-orange:hover { background: var(--orange-dark); color: var(--surface); }
  .home .h-btn-ghost { background: transparent; color: var(--ink); border-color: var(--ink); }
  .home .h-btn-ghost:hover { background: var(--ink); color: var(--cream); }
  .home .h-btn-dark { background: var(--ink); color: var(--cream); }
  .home .h-btn-dark:hover { background: var(--ink-hover); color: var(--cream); }
  .h-btn-sm { padding: 10px 16px; font-size: 14px; gap: 8px; }
  .h-btn-row { display: flex; flex-wrap: wrap; gap: 12px; }
  .home .h-link {
    align-self: flex-start; font-size: 16px; font-weight: 600; line-height: 1.4;
    border-bottom: 2px solid currentColor; padding-bottom: 2px; transition: color 140ms ease;
  }
  .home .h-link:hover { color: var(--orange); }

  /* Announcement + header */
  .h-ann {
    background: var(--ink); color: var(--cream); font-size: 14px; line-height: 1.4;
    padding: 10px var(--gutter); text-align: center;
  }
  .home .h-ann a { color: var(--orange); font-weight: 600; }
  .home .h-ann a:hover { color: var(--cream); }
  .h-ann-short, .h-hdr-short { display: none; }
  .h-header {
    position: sticky; top: 0; z-index: 50; background: var(--cream);
    border-bottom: 1px solid var(--line-12); padding: 0 var(--gutter);
  }
  .h-header .h-wrap { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 14px 0; }
  .h-brand { display: flex; flex-direction: column; gap: 3px; }
  .h-brand-name {
    font-family: var(--display); font-size: clamp(14px, 4vw, 18px); font-weight: 700;
    letter-spacing: 0.02em; text-transform: uppercase; line-height: 1; white-space: nowrap;
  }
  .h-brand-by {
    font-family: var(--mono); font-size: 10px; color: var(--ink-62); letter-spacing: 0.04em;
    line-height: 1; white-space: nowrap;
  }

  /* Hero */
  .h-hero { padding: clamp(24px, 6vw, 88px) var(--gutter) 0; }
  .h-hero .h-wrap { display: flex; align-items: center; gap: 48px; }
  .h-hero-text { flex: 1.25 1 0; min-width: 0; }
  .h-hero .h-btn-row { margin-top: clamp(28px, 4vw, 44px); }
  .h-rot { position: relative; display: inline-block; white-space: nowrap; color: var(--orange); }
  .h-rot-sizer { visibility: hidden; }
  .h-rot-word {
    position: absolute; left: 0; top: 0; white-space: nowrap; opacity: 0; transform: translateY(0.15em);
  }
  .h-rot-word.is-on { opacity: 1; transform: none; }
  .h-rot-word.is-out { opacity: 0; transform: translateY(-0.15em); }
  /* The outgoing word clears before the next one lands, so the two never
     sit on top of each other mid-swap. */
  .h-rot-word.is-out { transition: opacity 180ms ease-in, transform 180ms ease-in; }
  .h-rot-word.is-on { transition: opacity 320ms cubic-bezier(.2,.7,.2,1) 140ms, transform 320ms cubic-bezier(.2,.7,.2,1) 140ms; }

  .h-const { flex: 1 1 0; min-width: 0; position: relative; width: 100%; aspect-ratio: 1 / 1; max-height: 560px; }
  .h-node { position: absolute; aspect-ratio: 1 / 1; }
  .h-node-dot { width: 100%; height: 100%; border-radius: 50%; background: var(--orange); }
  .h-face {
    all: unset; display: block; width: 100%; height: 100%; border-radius: 50%; overflow: hidden;
    background: var(--orange); border: 1px solid transparent; cursor: pointer;
    transition: border-color 120ms ease;
  }
  .h-face img { width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(1); }
  .h-node.is-hover { z-index: 10; }
  .h-node.is-hover .h-face { border-color: var(--ink); }
  .h-tip {
    position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
    background: var(--surface); border: 1px solid var(--line-12); border-radius: 8px;
    padding: 8px 11px; white-space: nowrap; pointer-events: none; text-align: left;
  }
  .h-tip-name { font-size: 14px; font-weight: 600; line-height: 1.3; }
  .h-tip-kind {
    font-family: var(--mono); font-size: 12px; color: var(--ink-62); letter-spacing: 0.06em;
    text-transform: uppercase; line-height: 1.4;
  }
  .h-const-in { animation: hFadeIn 450ms ease both; }
  @keyframes hFadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes hFloat0 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(5px, -9px); } }
  @keyframes hFloat1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-6px, 7px); } }
  @keyframes hFloat2 { 0%, 100% { transform: translate(0, 0); } 33% { transform: translate(4px, 6px); } 66% { transform: translate(-4px, -5px); } }

  /* Welcome */
  .h-welcome .h-wrap {
    display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    column-gap: clamp(32px, 4.5vw, 64px); align-items: center;
  }
  .h-welcome .h-wrap > * { min-width: 0; }
  .h-welcome-text { grid-column: 1; grid-row: 1; }
  .h-welcome-media { grid-column: 2; grid-row: 1; }
  .h-welcome .h-video-cap { grid-column: 2; grid-row: 2; }
  .h-welcome .h-lead { margin-top: 24px; }
  .h-video { position: relative; width: 100%; aspect-ratio: 16 / 9; border-radius: 22px; overflow: hidden; background: var(--ink); }
  .h-video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .h-video-btn { all: unset; position: absolute; inset: 0; cursor: pointer; display: block; }
  .h-video-btn img { object-fit: cover; }
  .h-video-veil { position: absolute; inset: 0; background: var(--veil); }
  .h-video-play {
    position: absolute; left: clamp(16px, 3vw, 28px); bottom: clamp(16px, 3vw, 28px);
    width: clamp(52px, 6vw, 72px); height: clamp(52px, 6vw, 72px); border-radius: 50%;
    background: var(--orange); color: var(--surface); display: flex; align-items: center; justify-content: center;
    transition: transform 160ms ease;
  }
  .h-video-btn:hover .h-video-play { transform: scale(1.06); }
  .h-video-cap {
    font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--ink-62); margin-top: 14px;
  }

  /* Numbers */
  .h-numbers { padding: var(--related) var(--gutter) 0; }
  .h-numbers .h-wrap { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 32px 40px; }
  .h-num { border-top: 1px solid var(--line-16); padding-top: 24px; min-width: 0; }
  .h-num-value { font-family: var(--display); font-weight: 700; font-size: clamp(56px, 6vw, 72px); line-height: 0.9; letter-spacing: -0.04em; }
  .h-num-label { font-size: 18px; line-height: 1.35; color: var(--ink-62); margin-top: 12px; }

  /* Ways */
  .h-ways .h-title { margin-bottom: clamp(32px, 4vw, 48px); }
  .h-ways-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: stretch; }
  .h-way {
    display: flex; flex-direction: column; min-width: 0; border-radius: 12px;
    padding: clamp(28px, 3vw, 36px); background: var(--surface); border: 1px solid var(--line-10);
  }
  .h-way.is-featured { background: var(--orange); border-color: var(--orange); }
  .h-way-title { font-family: var(--display); font-weight: 700; font-size: clamp(52px, 5vw, 64px); line-height: 0.9; letter-spacing: -0.04em; }
  .h-way-line { margin: 16px 0 32px; font-size: 18px; line-height: 1.45; color: var(--ink-68); }
  .h-way.is-featured .h-way-line { color: var(--ink); }
  .h-way .h-btn { margin-top: auto; align-self: flex-start; padding: 13px 20px; }
  .h-label-short { display: none; }

  /* Inside the Crew */
  .h-inside > .h-wrap > .h-title { margin-bottom: clamp(40px, 4.5vw, 64px); }
  .h-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr); gap: 72px; align-items: center; }
  .h-row + .h-row { margin-top: var(--block); }
  .h-row.is-reverse { grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr); }
  .h-row.is-reverse .h-row-text { order: 2; }
  .h-row-text { display: flex; flex-direction: column; max-width: 520px; min-width: 0; }
  .h-row-text .h-body { margin: 20px 0 24px; }
  .h-panel { background: var(--surface); border: 1px solid var(--line-08); border-radius: 12px; padding: clamp(24px, 3vw, 36px); min-width: 0; }
  .h-panel-head { display: flex; justify-content: space-between; gap: 12px; flex-wrap: wrap; }

  .h-intro-who { display: flex; align-items: center; gap: 16px; margin-top: 24px; }
  .h-avatars { display: flex; flex: none; }
  .h-avatar {
    width: 52px; height: 52px; border-radius: 50%; border: 2px solid var(--surface);
    display: flex; align-items: center; justify-content: center; background: var(--sand);
    font-family: var(--display); font-size: 18px; font-weight: 600; color: var(--ink-62);
  }
  .h-avatar + .h-avatar { margin-left: -12px; background: var(--sand-2); }
  .h-intro-line { font-size: 16px; line-height: 1.4; min-width: 0; }
  .h-intro-line b { font-weight: 600; }
  .h-intro-line span { color: var(--ink-62); }
  .h-intro-quote {
    margin-top: 20px; padding: 16px 18px; background: var(--cream); border: 1px solid var(--line-08);
    border-radius: 12px; font-size: 15px; line-height: 1.5;
  }
  .h-steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-top: 28px; }
  .h-step { display: flex; flex-direction: column; gap: 4px; min-width: 0; position: relative; }
  .h-step-track { display: flex; align-items: center; height: 12px; margin-bottom: 8px; }
  .h-step-dot { display: block; width: 12px; height: 12px; border-radius: 50%; background: var(--ink); flex: none; }
  .h-step-bar { display: block; flex: 1; height: 1px; background: var(--ink); margin: 0 -12px 0 6px; }
  .h-step:nth-child(2) .h-step-bar { background: var(--orange); }
  .h-step:last-child .h-step-dot { background: var(--orange); }
  .h-step:last-child .h-step-bar { display: none; }
  .h-step-label { font-size: 15px; font-weight: 600; }
  .h-step:last-child .h-step-label { color: var(--orange-text); }
  .h-step-date { font-family: var(--mono); font-size: 12px; color: var(--ink-62); }

  .h-agenda-head { padding-bottom: 12px; border-bottom: 1px solid var(--line-12); }
  .h-agenda-row {
    display: grid; grid-template-columns: 72px minmax(0, 1fr); gap: 16px; align-items: baseline;
    padding: 18px 0; border-bottom: 1px solid var(--line-12);
  }
  .h-agenda-row:last-child { border-bottom: 0; padding-bottom: 0; }
  .h-agenda-when { font-family: var(--mono); font-size: 14px; }
  .h-agenda-kind { font-family: var(--mono); font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-62); margin-bottom: 6px; }
  .h-agenda-title { font-size: 16px; font-weight: 600; line-height: 1.35; display: flex; align-items: center; gap: 8px; }
  .h-agenda-detail { font-size: 14px; line-height: 1.45; color: var(--ink-62); }
  .h-agenda-row.is-highlight .h-agenda-when, .h-agenda-row.is-highlight .h-agenda-kind { color: var(--orange-text); }
  .h-agenda-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--orange); flex: none; }

  .h-missions { display: flex; flex-direction: column; gap: 16px; min-width: 0; }
  .h-mission {
    display: flex; flex-wrap: wrap; align-items: center; gap: 20px 24px; background: var(--surface);
    border: 1px solid var(--line-08); border-radius: 12px; padding: clamp(16px, 2vw, 20px);
  }
  .h-mission-img { flex: 1 1 180px; min-width: 0; position: relative; aspect-ratio: 16 / 9; border-radius: 8px; overflow: hidden; background: var(--sand); }
  .h-mission-img img { object-fit: cover; }
  .h-mission-body { flex: 2 1 260px; min-width: 0; }
  .h-mission-kicker { color: var(--orange-text); }
  .h-mission-title { font-family: var(--display); font-size: 24px; font-weight: 700; letter-spacing: -0.025em; line-height: 1.15; margin-top: 10px; }
  .h-mission-line { font-size: 16px; line-height: 1.5; color: var(--ink-68); margin-top: 8px; text-wrap: pretty; }
  .h-mission-meta { margin-top: 14px; }

  /* Recent events */
  .h-ev-head { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px 40px; margin-bottom: clamp(28px, 3vw, 40px); }
  .h-ev-controls { display: flex; align-items: center; gap: 12px; }
  .h-ev-count { font-family: var(--mono); font-size: 12px; font-weight: 600; letter-spacing: 0.08em; min-width: 64px; }
  .h-icon-btn {
    all: unset; box-sizing: border-box; width: 48px; height: 48px; border-radius: 12px; border: 2px solid var(--ink);
    display: flex; align-items: center; justify-content: center; flex: none; cursor: pointer;
    transition: background 140ms ease, color 140ms ease;
  }
  .h-icon-btn:hover { background: var(--ink); color: var(--cream); }
  .h-ev-card {
    display: grid; grid-template-columns: minmax(0, 3fr) minmax(0, 2fr); background: var(--surface);
    border: 1px solid var(--line-10); border-radius: 22px; overflow: hidden; touch-action: pan-y;
  }
  .h-ev-cover { position: relative; aspect-ratio: 2 / 1; background: var(--ink); min-width: 0; }
  .h-ev-cover img { object-fit: cover; opacity: 0; transition: opacity 350ms ease; }
  .h-ev-cover img.is-contain { object-fit: contain; }
  .h-ev-cover img.is-on { opacity: 1; }
  .h-ev-text { padding: clamp(24px, 3vw, 40px); display: flex; flex-direction: column; justify-content: space-between; gap: 28px; min-width: 0; }
  .h-ev-meta { display: flex; flex-wrap: wrap; gap: 6px 14px; font-family: var(--mono); font-size: 12px; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
  .h-ev-format { color: var(--orange-text); }
  .h-ev-date { color: var(--ink-55); }
  .h-ev-theme { font-family: var(--display); font-weight: 700; font-size: clamp(28px, 2.8vw, 40px); line-height: 1.02; letter-spacing: -0.03em; margin-top: 18px; text-wrap: balance; }
  /* Dashes keep a 10px hit area above and below; the negative margin keeps
     that invisible padding out of the gap to the next section. */
  .h-dashes { display: grid; gap: 8px; margin: 6px 0 -10px; }
  .h-dash { all: unset; cursor: pointer; padding: 10px 0; }
  .h-dash span { display: block; height: 3px; border-radius: 2px; background: var(--dash); transition: background 200ms ease; }
  .h-dash.is-on span { background: var(--orange); }

  /* Testimonials */
  .h-quotes .h-title { margin-bottom: clamp(32px, 4vw, 48px); }
  .h-quote-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; align-items: stretch; }
  .h-quote {
    background: var(--surface); border: 1px solid var(--line-10); border-radius: 12px; padding: 24px;
    display: flex; flex-direction: column; gap: 14px; min-width: 0;
  }
  .h-quote figcaption { display: flex; align-items: center; gap: 12px; }
  .h-quote-photo { width: 48px; height: 48px; border-radius: 50%; object-fit: cover; flex: none; background: var(--sand); }
  .h-quote-name { font-size: 16px; font-weight: 600; line-height: 1.3; }
  .h-quote-by {
    font-family: var(--mono); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase;
    color: var(--ink-62); line-height: 1.4; margin-top: 2px; min-height: 2.8em;
  }
  .h-quote-head { font-family: var(--display); font-weight: 700; font-size: 20px; line-height: 1.2; letter-spacing: -0.02em; margin-top: 4px; text-wrap: balance; }
  .h-quote blockquote { font-size: 17px; line-height: 1.55; color: var(--ink-80); text-wrap: pretty; }
  .h-quote-dashes { display: none; grid-template-columns: repeat(4, minmax(0, 1fr)); }

  /* Final CTA */
  .h-final .h-lead { margin: 28px 0 36px; }

  /* FAQ */
  .h-faq { padding-bottom: var(--section); }
  .h-faq .h-wrap { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 32px 72px; align-items: start; }
  .h-faq-list { border-top: 1px solid var(--line-16); min-width: 0; }
  .h-faq-item { border-bottom: 1px solid var(--line-16); }
  .h-faq-item summary {
    list-style: none; display: flex; justify-content: space-between; align-items: baseline; gap: 16px;
    padding: 24px 0; cursor: pointer; font-family: var(--display); font-size: clamp(20px, 2vw, 24px);
    font-weight: 700; letter-spacing: -0.02em; line-height: 1.2;
  }
  .h-faq-item summary::-webkit-details-marker { display: none; }
  .h-faq-item summary::after { content: '+'; font-family: var(--mono); color: var(--orange); flex: none; }
  .h-faq-item[open] summary::after { content: '–'; }
  .h-faq-item .h-body { margin: 0 0 24px; }

  /* Footer */
  .h-footer { border-top: 1px solid var(--line-12); padding: 28px var(--gutter); }
  .h-footer .h-wrap { display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px 24px; font-size: 14px; color: var(--ink-62); }
  .h-footer-brand { font-family: var(--display); font-size: 15px; font-weight: 700; letter-spacing: 0.02em; text-transform: uppercase; color: var(--ink); }
  .h-footer-year { font-family: var(--mono); font-size: 12px; }

  /* ── Breakpoints ─────────────────────────────────────────── */
  @media (max-width: 1199px) {
    .h-quote-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }
  @media (max-width: 1099px) {
    .h-hero .h-wrap { flex-direction: column-reverse; align-items: stretch; gap: clamp(32px, 5vw, 48px); }
    .h-hero-text, .h-const { flex: none; }
    .h-const { aspect-ratio: 520 / 188; max-height: 150px; }
    .h-way-title { font-size: clamp(26px, 4.2vw, 52px); }
  }
  @media (max-width: 1023px) and (min-width: 600px) {
    .h-label-long { display: none; }
    .h-label-short { display: inline; }
  }
  @media (max-width: 959px) {
    .h-row, .h-row.is-reverse { grid-template-columns: minmax(0, 1fr); gap: 40px; }
    .h-row.is-reverse .h-row-text { order: 0; }
    .h-faq .h-wrap { grid-template-columns: minmax(0, 1fr); }
  }
  @media (max-width: 899px) {
    .h-welcome .h-wrap { grid-template-columns: minmax(0, 1fr); }
    .h-welcome-text, .h-welcome-media, .h-welcome .h-video-cap { grid-column: 1; grid-row: auto; }
    .h-welcome-media { margin-top: clamp(32px, 4.5vw, 64px); }
  }
  @media (max-width: 767px) {
    .h-quote-grid {
      display: flex; overflow-x: auto; scroll-snap-type: x mandatory; gap: 12px;
      margin: 0 calc(-1 * var(--gutter)); padding: 0 var(--gutter); scroll-padding-inline: var(--gutter);
      scrollbar-width: none; -webkit-overflow-scrolling: touch;
    }
    .h-quote-grid::-webkit-scrollbar { display: none; }
    .h-quote { flex: 0 0 85%; scroll-snap-align: start; }
    .h-quote-dashes { display: grid; }
  }
  @media (max-width: 759px) {
    .h-ev-card { grid-template-columns: minmax(0, 1fr); }
  }
  @media (max-width: 599px) {
    .h-numbers .h-wrap { gap: 16px; }
    .h-num-value { font-size: 36px; }
    .h-num-label { font-size: 14px; }
    .h-ways-grid { grid-template-columns: minmax(0, 1fr); }
    .h-way-title { font-size: clamp(52px, 5vw, 64px); }
    .h-way-line { margin-bottom: 24px; }
    .h-steps { display: flex; flex-direction: column; gap: 18px; padding-left: 28px; }
    .h-step { flex-direction: row; align-items: baseline; justify-content: space-between; gap: 12px; }
    .h-step-track { position: absolute; left: -28px; top: 5px; width: 12px; height: calc(100% + 18px); margin: 0; display: block; }
    .h-step-bar { position: absolute; left: 5.5px; top: 12px; width: 1px; height: calc(100% - 12px); margin: 0; }
  }
  @media (max-width: 479px) {
    .h-ann { white-space: nowrap; }
    .h-ann-online { display: none; }
  }
  @media (max-width: 389px) {
    .h-ann-long { display: none; }
    .h-ann-short { display: inline; }
  }
  @media (max-width: 359px) {
    .h-hdr-long { display: none; }
    .h-hdr-short { display: inline; }
  }
  @media (prefers-reduced-motion: reduce) {
    .h-node { animation: none !important; }
    .h-rot-word, .h-ev-cover img { transition: none !important; }
    .h-const-in { animation: none; }
    .h-quote-grid { scroll-behavior: auto; }
  }
`;
