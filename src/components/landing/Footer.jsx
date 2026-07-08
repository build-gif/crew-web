"use client";
import { cobStyles, mobStyles, CREW } from "./styles";

export function CobFooter() {
  return (
    <footer className="footer-wrapper" style={{ background: CREW.ink, color: CREW.cream, padding: '56px 32px 28px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: "1.6fr 1fr 1fr", gap: 32,
          paddingBottom: 36, borderBottom: '1px solid rgba(245,239,230,0.14)',
          alignItems: 'flex-start',
        }}>
          <div>
            <img src="assets/crew-logo.svg" style={{ width: 130, marginBottom: 18 }} />
            <div style={{ fontSize: 14, color: 'rgba(245,239,230,0.65)', maxWidth: 380, lineHeight: 1.5 }}>
              A curated room for founders actively building — and for senior operators ready to build something new. We show our work, share what we know, and keep each other moving.
              <br /><br />
              <span style={{ opacity: 0.6, fontSize: 13 }}>WE Heart co-builds companies with proven operators. The Crew is where we find them. The Crew is how we find them early — and how founders find each other.</span>
            </div>
          </div>
          <div>
            <div style={{ ...cobStyles.kicker, color: 'rgba(245,239,230,0.4)', marginBottom: 14 }}>Join</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="https://app.crewofbuilders.com/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Join the Crew</a>
            </div>
          </div>
          <div>
            <div style={{ ...cobStyles.kicker, color: 'rgba(245,239,230,0.4)', marginBottom: 14 }}>Run by</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14 }}>
              <a href="https://www.weheartimpact.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>WE Heart ↗</a>
              <a href="https://www.linkedin.com/company/crew-of-builders/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn ↗</a>
              <span>Contact</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 24, fontSize: 12, color: 'rgba(245,239,230,0.45)', flexWrap: 'wrap', gap: 10 }}>
          <span>© 2026 Crew of Builders</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            <span>Made in São Paulo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function CobMobFooter() {
  return (
    <footer style={{ background: CREW.ink, color: CREW.cream, padding: '40px 20px 24px', borderTop: '1px solid rgba(245,239,230,0.14)' }}>
      <img src="assets/crew-logo-white.png" style={{ width: 100, marginBottom: 14 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24, fontSize: 13, color: 'rgba(245,239,230,0.65)', lineHeight: 1.55 }}>
        <p style={{ margin: 0 }}>A curated room for founders actively building — and for senior operators ready to build something new. We show our work, share what we know, and keep each other moving.</p>
        <p style={{ margin: 0, color: 'rgba(245,239,230,0.5)' }}>WE Heart co-builds companies with proven operators. The Crew is where we find them. The Crew is how we find them early — and how founders find each other.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
        <div>
          <div style={{ ...mobStyles.kicker, color: 'rgba(245,239,230,0.4)', marginBottom: 10 }}>Join</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            <a href="https://app.crewofbuilders.com/signup" style={{ color: 'inherit', textDecoration: 'none' }}>Join the Crew</a>
          </div>
        </div>
        <div>
          <div style={{ ...mobStyles.kicker, color: 'rgba(245,239,230,0.4)', marginBottom: 10 }}>Run by</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13 }}>
            <a href="https://www.weheartimpact.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>WE Heart ↗</a>
            <a href="https://www.linkedin.com/company/crew-of-builders/posts/?feedView=all" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn ↗</a>
            <span>Contact</span>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 16, borderTop: '1px solid rgba(245,239,230,0.14)', fontSize: 11, color: 'rgba(245,239,230,0.45)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <span>© 2026 Crew of Builders</span>
          <span>Made in São Paulo</span>
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
