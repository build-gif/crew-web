import Image from "next/image";
import { INTRO_STEPS, LINKS, MISSIONS, signupUrl } from "@/components/home/content";

function RowText({ kicker, title, body, href, cta }) {
  return (
    <div className="h-row-text">
      <div className="h-kicker">{kicker}</div>
      <h3 className="h-row-title">{title}</h3>
      <p className="h-body">{body}</p>
      <a href={href} className="h-link">{cta} →</a>
    </div>
  );
}

function IntroPanel() {
  return (
    <div className="h-panel">
      <div className="h-panel-head h-meta"><span>Intro request</span><span>Example</span></div>
      <div className="h-intro-who">
        <div className="h-avatars" aria-hidden="true">
          <span className="h-avatar">P</span>
          <span className="h-avatar">J</span>
        </div>
        <div className="h-intro-line">
          <b>Pedro Costa</b> <span>wants to meet</span> <b>Julia Ramos</b> <span>via Felipe</span>
        </div>
      </div>
      <p className="h-intro-quote">“We&apos;re pricing our first enterprise plan. Would love a short call on how you approached it.”</p>
      <ol className="h-steps">
        {INTRO_STEPS.map((s) => (
          <li key={s.label} className="h-step">
            <span className="h-step-track" aria-hidden="true">
              <span className="h-step-dot" />
              <span className="h-step-bar" />
            </span>
            <span className="h-step-label">{s.label}</span>
            <span className="h-step-date">{s.date}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function AgendaPanel({ agenda }) {
  return (
    <div className="h-panel">
      <div className="h-meta h-agenda-head">Upcoming · 8am BRT · Online</div>
      {agenda.map((e) => (
        <div key={`${e.when}-${e.title}`} className={`h-agenda-row${e.highlight ? " is-highlight" : ""}`}>
          <span className="h-agenda-when">{e.when}</span>
          <div>
            <div className="h-agenda-kind">{e.kind}</div>
            <div className="h-agenda-title">
              {e.highlight && <span className="h-agenda-dot" aria-hidden="true" />}
              {e.title}
            </div>
            <div className="h-agenda-detail">{e.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MissionCards() {
  return (
    <div className="h-missions">
      {MISSIONS.map((m) => (
        <div key={m.title} className="h-mission">
          <div className="h-mission-img">
            <Image src={m.image} alt={m.alt} fill sizes="(max-width: 959px) 90vw, 240px" />
          </div>
          <div className="h-mission-body">
            <div className="h-meta h-mission-kicker">WE Heart Mission</div>
            <div className="h-mission-title">{m.title}</div>
            <p className="h-mission-line">{m.line}</p>
            <div className="h-meta h-mission-meta">{m.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HomeInside({ agenda }) {
  return (
    <section className="h-section h-inside">
      <div className="h-wrap">
        <h2 className="h-title">Inside the Crew</h2>

        <div className="h-row">
          <RowText
            kicker="Intros"
            title="Access to an unfair network."
            body="Ask for an intro in the app. If you need a Co-Founder, an expert or your first check, here is the place."
            href={signupUrl(null, "intros")}
            cta="Ask for an intro"
          />
          <IntroPanel />
        </div>

        <div className="h-row is-reverse">
          <RowText
            kicker="Meet the Crew"
            title="Meet builders in weekly events."
            body="Tuesdays, a live WE POD with an operator or investor. Thursdays, Meet the Crew: one builder pitches and new members introduce themselves."
            href={LINKS.events}
            cta="See the calendar"
          />
          <AgendaPanel agenda={agenda} />
        </div>

        <div className="h-row">
          <RowText
            kicker="Missions"
            title="Co-found what WE Heart is building."
            body="WE Heart is a venture builder. When it starts a new company, the Crew hears first: co-founder seats, first hires and projects, opened as Missions. Say you're interested, no video needed."
            href={LINKS.missions}
            cta="See open missions"
          />
          <MissionCards />
        </div>
      </div>
    </section>
  );
}
