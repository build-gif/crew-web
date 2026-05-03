'use client';

/**
 * /apply — Crew of Builders application page
 *
 * Self-contained Client Component. All tokens, helpers, and layout pieces
 * (CobTopBar, CobFooter) are defined inline here.
 *
 * When @/components/ui/crew-shared is built, the following can be imported
 * from there instead of redefined:
 *   Wordmark, MonoAccent, Divider, Reveal, CrewIcon, CREW_TOKENS, CREW_MEMBERS
 */

import { useState, useEffect, useRef, useCallback } from 'react';

// ─── Design tokens ────────────────────────────────────────────────────────────
// CSS variables must be defined in globals.css. These are the JS fallbacks.
const T = {
  ink:     'var(--ink,     #111111)',
  paper:   'var(--paper,   #FAF8F5)',
  mint:    'var(--mint,    #1A7A6A)',
  butter:  'var(--butter,  #F2E03A)',
  whisper: 'var(--whisper, #E5E1D7)',
  muted:   'var(--muted,   #8B8780)',
  orange:  'var(--orange,  #E05A28)',
};

// ─── Typography stacks (mirrors globals.css mapping) ─────────────────────────
const F = {
  sans:  'ui-sans-serif, system-ui, sans-serif',
  serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  mono:  'var(--font-mono, "JetBrains Mono", "SF Mono", Menlo, monospace)',
};

// ─── Form data ────────────────────────────────────────────────────────────────
const AREA_OPTIONS = [
  { value: '',           label: 'Select your area…'   },
  { value: 'tech',       label: 'Technology / Product' },
  { value: 'fintech',    label: 'Fintech / Finance'    },
  { value: 'health',     label: 'Health / Healthtech'  },
  { value: 'commerce',   label: 'Commerce / Retail'    },
  { value: 'b2b-saas',   label: 'B2B SaaS'             },
  { value: 'marketplace',label: 'Marketplace'          },
  { value: 'climate',    label: 'Climate / Impact'     },
  { value: 'media',      label: 'Media / Content'      },
  { value: 'other',      label: 'Other'                },
];

const SOURCE_OPTIONS = [
  { value: '',         label: 'Select one…'          },
  { value: 'linkedin', label: 'LinkedIn'              },
  { value: 'instagram',label: 'Instagram'             },
  { value: 'twitter',  label: 'X / Twitter'           },
  { value: 'podcast',  label: 'WE POD'                },
  { value: 'newsletter',label: 'Newsletter'           },
  { value: 'friend',   label: 'Friend or colleague'   },
  { value: 'event',    label: 'Event'                 },
  { value: 'other',    label: 'Other'                 },
];

const STAGE_OPTIONS = [
  { value: 'pre-product', label: 'Pre-product' },
  { value: 'mvp',         label: 'MVP'         },
  { value: 'in-market',   label: 'In market'   },
  { value: 'growing',     label: 'Growing'     },
];

// ─── Mock API ─────────────────────────────────────────────────────────────────
async function mockSubmit(data) {
  // Replace with real Supabase / Notion call when ready.
  return new Promise((resolve) =>
    setTimeout(() => resolve({ ok: true, data }), 1500)
  );
}

// ─── Validation helpers ───────────────────────────────────────────────────────
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isFormValid(form) {
  return (
    form.name.trim().length > 0 &&
    EMAIL_RE.test(form.email) &&
    form.location.trim().length > 0 &&
    form.area !== '' &&
    form.building !== '' &&
    form.whyCrew.trim().length > 0
  );
}

// ─── Inline CSS (hover / focus / responsive rules) ───────────────────────────
const PAGE_STYLES = `
  *,*::before,*::after{box-sizing:border-box}

  .cob-input{
    width:100%;background:transparent;border:none;
    border-bottom:1px solid var(--whisper,#E5E1D7);
    padding:12px 0;font-size:16px;color:var(--ink,#111);
    font-family:ui-sans-serif,system-ui,sans-serif;
    outline:none;transition:border-color 180ms ease;
    border-radius:0;
  }
  .cob-input::placeholder{color:var(--muted,#8B8780);opacity:1}
  .cob-input:focus{border-bottom-color:var(--ink,#111)}
  .cob-input:focus::placeholder{opacity:.5}

  .cob-textarea{
    width:100%;background:transparent;
    border:1px solid var(--whisper,#E5E1D7);
    padding:12px 14px;font-size:16px;color:var(--ink,#111);
    font-family:ui-sans-serif,system-ui,sans-serif;
    outline:none;resize:vertical;border-radius:0;
    transition:border-color 180ms ease;line-height:1.65;
  }
  .cob-textarea::placeholder{color:var(--muted,#8B8780);opacity:1}
  .cob-textarea:focus{border-color:var(--ink,#111)}
  .cob-textarea:focus::placeholder{opacity:.5}

  .cob-select{
    width:100%;background:var(--paper,#FAF8F5);border:none;
    border-bottom:1px solid var(--whisper,#E5E1D7);
    padding:12px 0;font-size:16px;color:var(--ink,#111);
    font-family:ui-sans-serif,system-ui,sans-serif;
    outline:none;cursor:pointer;appearance:none;
    border-radius:0;transition:border-color 180ms ease;
  }
  .cob-select:focus{border-bottom-color:var(--ink,#111)}
  .cob-select.placeholder{color:var(--muted,#8B8780)}

  .cob-radio-btn{
    display:flex;align-items:center;gap:10px;
    background:none;border:none;cursor:pointer;
    padding:8px 0;font-family:ui-sans-serif,system-ui,sans-serif;
    font-size:15px;color:var(--ink,#111);
    transition:opacity 140ms ease;
  }
  .cob-radio-btn:hover .cob-radio-dot-outer{
    border-color:var(--ink,#111)!important;
  }

  .cob-submit{
    display:block;width:100%;
    background:var(--ink,#111);color:var(--paper,#FAF8F5);
    border:none;padding:18px 32px;
    font-family:var(--font-mono,monospace);
    font-size:13px;letter-spacing:.1em;text-transform:uppercase;
    cursor:pointer;transition:opacity 180ms ease;
    border-radius:0;
  }
  .cob-submit:hover:not(:disabled){opacity:.82}
  .cob-submit:disabled{
    background:var(--whisper,#E5E1D7);
    color:var(--muted,#8B8780);cursor:not-allowed;
  }

  .cob-nav-back{
    font-family:var(--font-mono,monospace);font-size:11px;
    letter-spacing:.08em;text-transform:uppercase;
    color:var(--muted,#8B8780);text-decoration:none;
    transition:color 160ms ease;
  }
  .cob-nav-back:hover{color:var(--ink,#111)}

  .cob-conditional{
    overflow:hidden;
    transition:max-height 380ms cubic-bezier(.4,0,.2,1),
               opacity    300ms ease,
               margin-top 380ms cubic-bezier(.4,0,.2,1);
  }

  .cob-success-link{
    font-family:var(--font-mono,monospace);font-size:12px;
    letter-spacing:.08em;text-transform:uppercase;
    color:var(--muted,#8B8780);text-decoration:none;
    transition:color 160ms ease;
    display:inline-flex;align-items:center;gap:6px;
  }
  .cob-success-link:hover{color:var(--ink,#111)}

  @media(min-width:640px){
    .cob-submit{width:auto;min-width:260px}
  }
  @media(max-width:480px){
    .cob-top-pad{padding-top:56px}
  }
`;

// ─── Reveal ───────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, as: Tag = 'div', style = {}, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: `opacity 600ms cubic-bezier(.2,.6,.2,1) ${delay}ms,
                     transform 600ms cubic-bezier(.2,.6,.2,1) ${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ─── ConditionalField (CSS-driven, no mount/unmount) ─────────────────────────
function ConditionalField({ show, children }) {
  return (
    <div
      className="cob-conditional"
      style={{
        maxHeight: show ? '600px' : '0',
        opacity: show ? 1 : 0,
        marginTop: show ? '0' : '-8px',
        pointerEvents: show ? 'auto' : 'none',
      }}
      aria-hidden={!show}
    >
      {children}
    </div>
  );
}

// ─── FieldLabel ───────────────────────────────────────────────────────────────
function FieldLabel({ children, htmlFor, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontFamily: F.mono,
        fontSize: '10px',
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: T.muted,
        marginBottom: '9px',
      }}
    >
      {children}
      {required && (
        <span
          aria-hidden="true"
          style={{ color: T.orange, marginLeft: '4px', fontWeight: 700 }}
        >
          *
        </span>
      )}
    </label>
  );
}

// ─── CharCounter ──────────────────────────────────────────────────────────────
function CharCounter({ current, max }) {
  const near = current / max > 0.85;
  return (
    <div
      aria-live="polite"
      aria-label={`${current} of ${max} characters used`}
      style={{
        fontFamily: F.mono,
        fontSize: '10px',
        color: near ? T.orange : T.muted,
        textAlign: 'right',
        marginBottom: '6px',
        letterSpacing: '0.06em',
        transition: 'color 180ms ease',
      }}
    >
      {current}/{max}
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
function Divider({ style = {} }) {
  return (
    <div
      role="separator"
      style={{
        height: '1px',
        background: T.whisper,
        margin: '48px 0',
        ...style,
      }}
    />
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────
function Field({ children, style = {} }) {
  return (
    <div style={{ marginBottom: '28px', ...style }}>
      {children}
    </div>
  );
}

// ─── RadioGroup ───────────────────────────────────────────────────────────────
function RadioGroup({ name, options, value, onChange }) {
  return (
    <div
      role="group"
      style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 24px', paddingTop: '2px' }}
    >
      {options.map((opt) => {
        const checked = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={checked}
            onClick={() => onChange(opt.value)}
            className="cob-radio-btn"
          >
            {/* Custom radio circle */}
            <span
              className="cob-radio-dot-outer"
              style={{
                width: '17px',
                height: '17px',
                borderRadius: '50%',
                border: `1.5px solid ${checked ? T.ink : T.whisper}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                transition: 'border-color 180ms ease',
              }}
            >
              {checked && (
                <span
                  style={{
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: T.ink,
                  }}
                />
              )}
            </span>
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── SelectField ─────────────────────────────────────────────────────────────
function SelectField({ id, value, onChange, options }) {
  return (
    <div style={{ position: 'relative' }}>
      <select
        id={id}
        value={value}
        onChange={onChange}
        className={`cob-select${value === '' ? ' placeholder' : ''}`}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} disabled={o.value === '' ? true : undefined}>
            {o.label}
          </option>
        ))}
      </select>
      {/* Custom chevron */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '2px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          fontFamily: F.mono,
          fontSize: '11px',
          color: T.muted,
        }}
      >
        ▾
      </span>
    </div>
  );
}

// ─── CobTopBar ────────────────────────────────────────────────────────────────
function CobTopBar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: T.paper,
        borderBottom: `1px solid ${T.whisper}`,
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 40px',
          height: '58px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Wordmark / logo */}
        <a
          href="/"
          aria-label="Crew of Builders — home"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          {/* Try real logo; fall back to text wordmark */}
          <img
            src="/assets/crew-logo-black.png"
            alt="Crew of Builders"
            style={{ height: '22px', width: 'auto', display: 'block' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'block'; }}
          />
          <span
            style={{
              display: 'none',
              fontFamily: F.serif,
              fontWeight: 700,
              fontSize: '17px',
              color: T.ink,
              letterSpacing: '-0.01em',
            }}
          >
            Crew of Builders
          </span>
        </a>

        {/* Back link */}
        <a href="/" className="cob-nav-back" aria-label="Back to home">
          ← Home
        </a>
      </div>
    </header>
  );
}

// ─── CobFooter ────────────────────────────────────────────────────────────────
function CobFooter() {
  return (
    <footer
      style={{
        borderTop: `1px solid ${T.whisper}`,
        padding: '36px 0',
        marginTop: '96px',
      }}
    >
      <div
        style={{
          maxWidth: '1160px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <span
          style={{
            fontFamily: F.serif,
            fontSize: '16px',
            fontWeight: 700,
            color: T.ink,
            letterSpacing: '-0.01em',
          }}
        >
          Crew of Builders
        </span>

        <span
          style={{
            fontFamily: F.mono,
            fontSize: '10px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: T.muted,
          }}
        >
          © {new Date().getFullYear()} WE Heart
        </span>
      </div>
    </footer>
  );
}

// ─── SuccessState ─────────────────────────────────────────────────────────────
function SuccessState() {
  return (
    <div style={{ padding: '72px 0 16px' }} role="alert" aria-live="assertive">
      <Reveal>
        <p
          style={{
            fontFamily: F.mono,
            fontSize: '11px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: T.orange,
            margin: '0 0 28px',
          }}
        >
          Application received
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1
          style={{
            fontFamily: F.serif,
            fontSize: 'clamp(72px, 14vw, 108px)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            color: T.ink,
            margin: '0 0 56px',
          }}
        >
          In.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginBottom: '64px',
          }}
        >
          {[
            'We read every application.',
            "You'll hear back within a week — yes or no.",
            'Watch your inbox.',
          ].map((line) => (
            <p
              key={line}
              style={{
                fontFamily: F.sans,
                fontSize: '18px',
                lineHeight: 1.6,
                color: T.muted,
                margin: 0,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      </Reveal>

      <Reveal delay={260}>
        <a href="/" className="cob-success-link">
          ← Back to crewofbuilders.com
        </a>
      </Reveal>
    </div>
  );
}

// ─── ApplyPage ────────────────────────────────────────────────────────────────
const INITIAL_FORM = {
  name:        '',
  email:       '',
  linkedIn:    '',
  location:    '',
  area:        '',
  building:    '',   // 'yes' | 'not-yet'
  stage:       '',
  whatBuilding:'',
  whyCrew:     '',
  howHeard:    '',
};

export default function ApplyPage() {
  const [form, setForm]       = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const setField = useCallback(
    (key) => (e) =>
      setForm((prev) => ({
        ...prev,
        [key]: e?.target ? e.target.value : e,
      })),
    []
  );

  const isBuilding = form.building === 'yes';
  const canSubmit  = isFormValid(form) && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    await mockSubmit(form);
    setLoading(false);
    setSuccess(true);
    // Scroll to top so user sees the success state
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scoped styles */}
      <style>{PAGE_STYLES}</style>

      <div style={{ background: T.paper, minHeight: '100vh', color: T.ink }}>
        <CobTopBar />

        <main
          className="cob-top-pad"
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '72px 24px 0',
          }}
        >
          {success ? (
            <SuccessState />
          ) : (
            <>
              {/* ── Page header ───────────────────────────────────────── */}
              <Reveal>
                <p
                  style={{
                    fontFamily: F.mono,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: T.muted,
                    margin: '0 0 18px',
                  }}
                >
                  Crew of Builders · Apply
                </p>
              </Reveal>

              <Reveal delay={60}>
                <h1
                  style={{
                    fontFamily: F.serif,
                    fontSize: 'clamp(38px, 8vw, 60px)',
                    fontWeight: 700,
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    color: T.ink,
                    margin: '0 0 20px',
                  }}
                >
                  Ready to build<br />with the right people?
                </h1>
              </Reveal>

              <Reveal delay={120}>
                <p
                  style={{
                    fontFamily: F.sans,
                    fontSize: '17px',
                    lineHeight: 1.7,
                    color: T.muted,
                    margin: '0 0 52px',
                  }}
                >
                  Applications are reviewed personally. We're not looking for
                  the most experienced — we're looking for the most committed.
                </p>
              </Reveal>

              <Divider style={{ margin: '0 0 52px' }} />

              {/* ── Form ─────────────────────────────────────────────── */}
              <form onSubmit={handleSubmit} noValidate>

                {/* 1 · Name */}
                <Field>
                  <FieldLabel htmlFor="cob-name" required>Name</FieldLabel>
                  <input
                    id="cob-name"
                    type="text"
                    value={form.name}
                    onChange={setField('name')}
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                    className="cob-input"
                  />
                </Field>

                {/* 2 · Email */}
                <Field>
                  <FieldLabel htmlFor="cob-email" required>Email</FieldLabel>
                  <input
                    id="cob-email"
                    type="email"
                    value={form.email}
                    onChange={setField('email')}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="cob-input"
                  />
                </Field>

                {/* 3 · LinkedIn / Link */}
                <Field>
                  <FieldLabel htmlFor="cob-linkedin">
                    LinkedIn or personal link
                  </FieldLabel>
                  <input
                    id="cob-linkedin"
                    type="url"
                    value={form.linkedIn}
                    onChange={setField('linkedIn')}
                    placeholder="https://linkedin.com/in/…"
                    autoComplete="url"
                    className="cob-input"
                  />
                </Field>

                {/* 4 · Location */}
                <Field>
                  <FieldLabel htmlFor="cob-location" required>Location</FieldLabel>
                  <input
                    id="cob-location"
                    type="text"
                    value={form.location}
                    onChange={setField('location')}
                    placeholder="City, Country"
                    autoComplete="country-name"
                    required
                    className="cob-input"
                  />
                </Field>

                <Divider />

                {/* 5 · Area */}
                <Field>
                  <FieldLabel htmlFor="cob-area" required>Area</FieldLabel>
                  <SelectField
                    id="cob-area"
                    value={form.area}
                    onChange={setField('area')}
                    options={AREA_OPTIONS}
                  />
                </Field>

                {/* 6 · Currently building? */}
                <Field>
                  <FieldLabel required>Currently building something?</FieldLabel>
                  <RadioGroup
                    name="building"
                    value={form.building}
                    onChange={setField('building')}
                    options={[
                      { value: 'yes',     label: 'Yes'     },
                      { value: 'not-yet', label: 'Not yet' },
                    ]}
                  />
                </Field>

                {/* 7 · Stage — conditional on building = yes */}
                <ConditionalField show={isBuilding}>
                  <Field>
                    <FieldLabel>Stage</FieldLabel>
                    <RadioGroup
                      name="stage"
                      value={form.stage}
                      onChange={setField('stage')}
                      options={STAGE_OPTIONS}
                    />
                  </Field>
                </ConditionalField>

                {/* 8 · What are you building? — conditional, max 200 */}
                <ConditionalField show={isBuilding}>
                  <Field>
                    <FieldLabel htmlFor="cob-what-building">
                      What are you building?
                    </FieldLabel>
                    <CharCounter
                      current={form.whatBuilding.length}
                      max={200}
                    />
                    <textarea
                      id="cob-what-building"
                      value={form.whatBuilding}
                      onChange={setField('whatBuilding')}
                      placeholder="One or two sentences. Be specific — vague answers won't make the cut."
                      maxLength={200}
                      rows={3}
                      className="cob-textarea"
                    />
                  </Field>
                </ConditionalField>

                <Divider />

                {/* 9 · Why the Crew, why now? — required, max 500 */}
                <Field>
                  <FieldLabel htmlFor="cob-why-crew" required>
                    Why the Crew, why now?
                  </FieldLabel>
                  <CharCounter
                    current={form.whyCrew.length}
                    max={500}
                  />
                  <textarea
                    id="cob-why-crew"
                    value={form.whyCrew}
                    onChange={setField('whyCrew')}
                    placeholder="What changes for you in 15 days if you're in this batch?"
                    maxLength={500}
                    rows={5}
                    required
                    className="cob-textarea"
                  />
                </Field>

                {/* 10 · How did you hear about us? */}
                <Field>
                  <FieldLabel htmlFor="cob-how-heard">
                    How did you hear about us?
                  </FieldLabel>
                  <SelectField
                    id="cob-how-heard"
                    value={form.howHeard}
                    onChange={setField('howHeard')}
                    options={SOURCE_OPTIONS}
                  />
                </Field>

                {/* ── Submit ─────────────────────────────────────────── */}
                <div style={{ marginTop: '56px', marginBottom: '80px' }}>
                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="cob-submit"
                    aria-disabled={!canSubmit}
                  >
                    {loading ? 'Sending…' : 'Submit application →'}
                  </button>

                  <p
                    style={{
                      marginTop: '14px',
                      fontFamily: F.mono,
                      fontSize: '10px',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: T.muted,
                      margin: '14px 0 0',
                    }}
                  >
                    FREE · ~4 MINUTES · REVIEWED WITHIN A WEEK
                  </p>
                </div>
              </form>
            </>
          )}
        </main>

        <CobFooter />
      </div>
    </>
  );
}
