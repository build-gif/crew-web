import { CREW_TOKENS } from "@/components/ui/crew-shared";

const CREW = CREW_TOKENS;

export const cobStyles = {
  page: {
    background: CREW.cream, color: CREW.ink,
    fontFamily: '"Space Grotesk","Inter",ui-sans-serif,system-ui,sans-serif',
    fontFeatureSettings: '"ss01","cv11"',
    minHeight: '100%', width: '100%', overflowX: 'hidden',
    letterSpacing: '-0.01em',
  },
  h1: {
    fontSize: 'clamp(64px, 8.2vw, 132px)',
    lineHeight: 0.88, fontWeight: 700, letterSpacing: '-0.04em',
    margin: 0,
  },
  h2: {
    fontSize: 'clamp(40px, 5vw, 76px)',
    lineHeight: 0.92, fontWeight: 700, letterSpacing: '-0.035em',
    margin: 0,
  },
  kicker: {
    fontSize: 11, fontWeight: 700,
    letterSpacing: '0.18em', textTransform: 'uppercase',
  },
  applyBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 10,
    background: CREW.ink, color: CREW.orange,
    padding: '14px 22px', border: 'none', borderRadius: 10,
    fontSize: 14, fontWeight: 600, cursor: 'pointer',
  },
};

export const mobStyles = {
  page: {
    background: CREW.cream, color: CREW.ink,
    fontFamily: '"Space Grotesk","Inter",ui-sans-serif,system-ui,sans-serif',
    fontFeatureSettings: '"ss01","cv11"',
    width: '100%', minHeight: '100%', overflowX: 'hidden',
    letterSpacing: '-0.01em',
  },
  kicker: {
    fontSize: 10, fontWeight: 700,
    letterSpacing: '0.16em', textTransform: 'uppercase',
  },
};

export { CREW };
