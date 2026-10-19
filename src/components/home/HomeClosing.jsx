import { ArrowIcon } from "@/components/home/ArrowIcon";
import { FAQ, LINKS, signupUrl } from "@/components/home/content";

function FinalCta() {
  return (
    <section className="h-section h-final">
      <div className="h-wrap">
        <h2 className="h-display">
          You build. <span className="h-orange">We&apos;re listening.</span>
        </h2>
        <p className="h-lead">Open, online and free for anyone building.</p>
        <div className="h-btn-row">
          <a href={signupUrl("builder", "final")} className="h-btn h-btn-orange">
            Join the Crew <ArrowIcon />
          </a>
          <a href={signupUrl("investor", "final_investor")} className="h-btn h-btn-ghost">
            I&apos;m an investor
          </a>
        </div>
        <div className="h-note">Free to join.</div>
      </div>
    </section>
  );
}

// Native <details>: works without JavaScript and keeps keyboard support.
function Faq() {
  return (
    <section className="h-section h-faq">
      <div className="h-wrap">
        <h2 className="h-title">Questions</h2>
        <div className="h-faq-list">
          {FAQ.map((item, i) => (
            <details key={item.q} className="h-faq-item" open={i === 0}>
              <summary>{item.q}</summary>
              <p className="h-body">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFooter() {
  return (
    <footer className="h-footer">
      <div className="h-wrap">
        <span className="h-footer-brand">Crew of Builders</span>
        <span>
          Powered by <a href={LINKS.weHeart}>WE Heart Impact</a> · Made in São Paulo
        </span>
        <span className="h-footer-year">© 2026</span>
      </div>
    </footer>
  );
}

export function HomeClosing() {
  return (
    <>
      <FinalCta />
      <Faq />
    </>
  );
}
