"use client";

import React, { useState } from "react";
import { CrewIcon, CREW_MEMBERS } from "@/components/ui/crew-shared";

const APPLY_HREF = "https://app.crewofbuilders.com/login";

const applyBtnClass =
  "inline-flex items-center gap-2.5 rounded-sm bg-[#0A0A0A] text-[#F5EFE6] no-underline font-semibold";

const kickerClass =
  "font-mono text-[11px] font-bold uppercase tracking-[0.18em]";

function memberPhotoSrc(photo: string) {
  return photo.startsWith("/") ? photo : `/${photo}`;
}

function TopBar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#0A0A0A]/10 bg-[#F5EFE6]/[0.86] px-8 py-4 backdrop-blur-[14px]">
      <div className="flex items-center gap-2.5">
        <img
          src="/assets/crew-logo-black.svg"
          alt="Crew of Builders"
          className="block h-7 w-auto"
        />
        <span className="text-[13px] font-bold uppercase tracking-[0.02em] text-[#0A0A0A]">
          Crew of Builders
        </span>
      </div>
      <a href={APPLY_HREF} className={`${applyBtnClass} px-[22px] py-3.5 text-sm`}>
        Join the Crew <CrewIcon.Arrow s={14} />
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-8 pb-[72px] pt-[88px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-16 md:grid-cols-[1.15fr_1fr]">
        <div>
          <h1 className="m-0 text-[clamp(56px,7vw,108px)] font-bold leading-[0.88] tracking-[-0.04em] text-[#0A0A0A]">
            Builders build{" "}
            <br className="md:hidden" />
            <span className="text-[#FF5A1F]">with builders.</span>
          </h1>
          <p className="mb-10 mt-8 max-w-[540px] text-xl leading-[1.45] text-[#0A0A0A]/72">
            A community of founders showing what they&apos;re building and
            learning from each other.
          </p>
          <div className="flex flex-wrap items-center gap-[18px]">
            <a
              href={APPLY_HREF}
              className={`${applyBtnClass} px-[26px] py-[18px] text-[15px]`}
            >
              Join the Crew <CrewIcon.Arrow s={15} />
            </a>
            <span className="text-[13px] text-[#0A0A0A]/55">
              Instant access after onboarding.
            </span>
          </div>
        </div>
        <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-sm border border-[#0A0A0A]/10 bg-[#0A0A0A] p-14">
          <img
            src="/assets/crew-logo.svg"
            alt=""
            className="block w-[78%] max-w-none"
          />
          <div className="absolute left-[22px] top-[18px] text-[11px] font-bold tracking-[0.16em] text-[#F5EFE6]/55">
            EST. 2026 · SP
          </div>
          <div className="absolute right-[22px] top-[18px] flex items-center gap-1.5 text-[11px] font-bold tracking-[0.16em] text-[#FF5A1F]">
            <span className="size-1.5 rounded-sm bg-[#FF5A1F]" />
            THE ROOM IS OPEN
          </div>
          <div className="absolute bottom-[18px] left-[22px] right-[22px] flex justify-between text-[11px] font-bold tracking-[0.16em] text-[#F5EFE6]/55">
            <span>№ 001</span>
            <span>BY WE HEART ↗</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const MARQUEE_ITEMS = [
  "Crew of Builders",
  "WE Heart",
  "São Paulo",
  "Builders in the open",
  "Batch 01",
  "First cheque thesis",
];

function Marquee() {
  const strip = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section
      className="border-y border-[#0A0A0A]/10 bg-white py-5"
      aria-label="Brand marquee"
    >
      <div className="overflow-hidden">
        <div className="flex w-max animate-[crew-marquee_40s_linear_infinite] gap-12 px-8 motion-reduce:animate-none">
          {strip.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="flex shrink-0 items-center gap-3 border border-[#0A0A0A]/10 bg-[#F5EFE6] px-5 py-2.5"
            >
              <img
                src="/assets/crew-logo-black.svg"
                alt=""
                className="h-5 w-auto opacity-80"
              />
              <span className={`${kickerClass} text-[#0A0A0A]/80`}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feed() {
  const [tab, setTab] = useState<"shipped" | "learning">("shipped");
  const [hovered, setHovered] = useState<number | null>(null);
  const members = CREW_MEMBERS;

  return (
    <section className="px-8 py-[112px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className={`${kickerClass} mb-3.5 text-[#FF5A1F]`}>The feed</div>
            <h2 className="m-0 text-[clamp(40px,5vw,76px)] font-bold leading-[0.92] tracking-[-0.035em] text-[#0A0A0A]">
              See what the
              <br />
              crew is building
              <br />
              this week.
            </h2>
          </div>
          <div className="max-w-[380px] text-base leading-[1.55] text-[#0A0A0A]/65">
            <p className="mb-3.5 mt-0">
              The community runs on members posting what they shipped and what
              they&apos;re stuck on. Once you&apos;re in, you do the same.
            </p>
            <p className="m-0 text-[13px] text-[#0A0A0A]/45">
              {members.length} active builders · updated weekly
            </p>
          </div>
        </div>

        <div className="mb-7 flex flex-wrap items-center gap-2">
          {(
            [
              { id: "shipped" as const, label: "Shipped this month" },
              { id: "learning" as const, label: "Learning out loud" },
            ] as const
          ).map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`cursor-pointer rounded-sm border px-4 py-2.5 font-sans text-[13px] font-semibold tracking-[-0.005em] ${
                tab === t.id
                  ? "border-[#0A0A0A] bg-[#0A0A0A] text-[#F5EFE6]"
                  : "border-[#0A0A0A]/10 bg-transparent text-[#0A0A0A]"
              }`}
            >
              {t.label}
            </button>
          ))}
          <span className="ml-2 text-xs text-[#0A0A0A]/40">
            ↳ This is what membership feels like.
          </span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {members.map((m, i) => {
            const body = tab === "shipped" ? m.shipped : m.learning;
            const isHov = hovered === i;
            return (
              <article
                key={m.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`flex flex-col gap-3.5 rounded-sm border bg-white p-5 transition-[border-color,transform] duration-200 ${
                  isHov
                    ? "-translate-y-0.5 border-[#FF5A1F]/45"
                    : "border-[#0A0A0A]/10"
                }`}
              >
                <header className="flex items-center gap-3">
                  <div className="size-11 shrink-0 overflow-hidden rounded-sm border border-[#0A0A0A]/10 bg-[#0A0A0A]">
                    <img
                      src={memberPhotoSrc(m.photo)}
                      alt=""
                      className="block size-full object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-0.5 truncate text-sm font-semibold leading-tight text-[#0A0A0A]">
                      {m.name}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-[#0A0A0A]/55">
                      <span className="font-semibold text-[#FF5A1F]">{m.co}</span>
                      <span>·</span>
                      <span>{m.city}</span>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-sm border border-[#0A0A0A]/10 bg-[#0A0A0A]/[0.02] px-2 py-1 text-[10px] font-bold tracking-[0.1em] text-[#0A0A0A]/60">
                    {m.stage.toUpperCase()}
                  </span>
                </header>
                <div
                  className={`${kickerClass} text-[10px] ${
                    tab === "shipped" ? "text-[#FF5A1F]" : "text-[#0A0A0A]/50"
                  }`}
                >
                  {tab === "shipped" ? "→ Shipped" : "~ Learning"}
                </div>
                <p className="m-0 text-[15px] leading-[1.45] text-[#0A0A0A]/85">
                  {body}
                </p>
                <footer className="mt-auto flex items-center justify-between border-t border-[#0A0A0A]/10 pt-2 text-xs text-[#0A0A0A]/50">
                  <span>{m.role}</span>
                  <span
                    className={`inline-flex items-center gap-1 font-semibold transition-colors ${
                      isHov ? "text-[#FF5A1F]" : "text-[#0A0A0A]/50"
                    }`}
                  >
                    Open <CrewIcon.Arrow s={11} />
                  </span>
                </footer>
              </article>
            );
          })}
          <div className="flex min-h-[240px] flex-col justify-between rounded-sm border-2 border-dashed border-[#0A0A0A]/18 bg-transparent p-5">
            <div>
              <div className={`${kickerClass} mb-3 text-[10px] text-[#0A0A0A]/40`}>
                Empty seat
              </div>
              <div className="mb-2.5 text-[22px] font-bold leading-[1.05] tracking-[-0.02em] text-[#0A0A0A]">
                Your post goes
                <br />
                here next.
              </div>
              <p className="m-0 text-[13px] leading-normal text-[#0A0A0A]/60">
                Apply, get reviewed, post what you shipped this week.
              </p>
            </div>
            <a
              href={APPLY_HREF}
              className={`${applyBtnClass} mt-4 w-fit px-4 py-3 text-[13px]`}
            >
              Apply <CrewIcon.Arrow s={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const rituals = [
    {
      cadence: "Every Monday",
      title: "Show your work",
      body: "Post what you shipped last week — a PR, a memo, a number, a screenshot. Read each other before any meeting.",
      tag: "Async · Slack thread",
    },
    {
      cadence: "Every Wednesday",
      title: "Stuck thread",
      body: "Drop the thing blocking you. Someone in the room has solved it before — Anvisa, hiring, regulators, first paying customer.",
      tag: "Async · 24h response",
    },
    {
      cadence: "Once a month",
      title: "Expert drop",
      body: "A founder or operator joins for a 90-minute working session on something specific — fundraising, GTM, a hard hire. Recorded for the room.",
      tag: "Live · invite-only",
    },
    {
      cadence: "Once a month",
      title: "Crew dinner",
      body: "A small dinner in São Paulo. No talks, no pitches. 12 builders eating and going home early.",
      tag: "In-person · São Paulo",
    },
  ];

  return (
    <section className="border-y border-[#0A0A0A]/10 bg-white px-8 py-[112px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-14 max-w-[820px]">
          <div className={`${kickerClass} mb-3.5 text-[#FF5A1F]`}>
            How the room runs
          </div>
          <h2 className="m-0 text-[clamp(40px,5vw,76px)] font-bold leading-[0.92] tracking-[-0.035em] text-[#0A0A0A]">
            A rhythm,
            <br />
            not a syllabus.
          </h2>
          <p className="mt-6 max-w-[640px] text-lg leading-normal text-[#0A0A0A]/65">
            Four repeating moments a month. Async by default, live when it
            matters. You&apos;ll know what&apos;s happening and when — no fear
            of missing out, no homework.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(260px,1fr))]">
          {rituals.map((r, i) => (
            <div
              key={r.title}
              className={`flex min-h-[260px] flex-col gap-3.5 rounded-sm border border-[#0A0A0A]/10 border-t-[3px] bg-[#F5EFE6] p-7 ${
                i < 2 ? "border-t-[#FF5A1F]" : "border-t-[#0A0A0A]"
              }`}
            >
              <div className={`${kickerClass} text-[10px] text-[#FF5A1F]`}>
                {r.cadence}
              </div>
              <div className="text-[26px] font-bold leading-none tracking-[-0.025em] text-[#0A0A0A]">
                {r.title}
              </div>
              <p className="m-0 text-sm leading-[1.55] text-[#0A0A0A]/72">
                {r.body}
              </p>
              <div className="mt-auto border-t border-[#0A0A0A]/10 pt-3.5 text-[11px] font-semibold tracking-[0.04em] text-[#0A0A0A]/45">
                {r.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <section className="px-4 py-16 sm:px-8 sm:py-[88px]">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-16">
        <div className="relative grid aspect-[4/3] cursor-pointer grid-cols-[1.15fr_0.85fr] gap-6 overflow-hidden rounded-[22px] bg-[#FF5A1F] p-7 shadow-[0_30px_70px_rgba(255,90,31,0.25)] sm:p-9">
          <div className="relative z-[2] flex flex-col justify-between">
            <div>
              <div className={`${kickerClass} mb-3.5 text-[#0A0A0A]`}>WATCH · 2:14</div>
              <h3 className="m-0 text-[clamp(28px,3vw,44px)] font-bold leading-[0.92] tracking-[-0.025em] text-[#0A0A0A]">
                What is the Crew?
              </h3>
            </div>
            <p className="m-0 text-sm font-semibold text-[#0A0A0A]/80">Daniel Muniz · WE Heart</p>
          </div>
          <div className="relative z-[2] flex items-end justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-white/95 pl-1 text-xl text-[#0A0A0A]">
              ▶
            </span>
          </div>
        </div>
        <div>
          <div className={`${kickerClass} mb-3.5 text-[#FF5A1F]`}>What is the Crew?</div>
          <h2 className="m-0 text-[clamp(36px,4.6vw,68px)] font-bold leading-[0.92] tracking-[-0.035em]">
            A community of
            <br />
            founders building
            <br />
            <span className="text-[#FF5A1F]">in the open.</span>
          </h2>
          <p className="mt-6 max-w-[540px] text-lg leading-[1.55] text-[#0A0A0A]/78">
            The Crew is the community of builders powered by{" "}
            <strong className="text-[#0A0A0A]">WE Heart Impact</strong> — bringing founders,
            experts, content, and opportunities together.
          </p>
          <a
            href={APPLY_HREF}
            className={`${applyBtnClass} mt-8 px-6 py-4 text-sm`}
          >
            Join the Crew <CrewIcon.Arrow s={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

const MEMBER_SWATCHES = [
  { bg: "#FF5A1F", name: "#0A0A0A", role: "rgba(10,10,10,0.7)" },
  { bg: "#0A0A0A", name: "#F5EFE6", role: "rgba(245,239,230,0.7)" },
  { bg: "#F5EFE6", name: "#0A0A0A", role: "rgba(10,10,10,0.65)" },
  { bg: "#1A1A1A", name: "#FF5A1F", role: "rgba(245,239,230,0.7)" },
  { bg: "#FFE0CC", name: "#0A0A0A", role: "rgba(10,10,10,0.7)" },
  { bg: "#FF7A45", name: "#0A0A0A", role: "rgba(10,10,10,0.75)" },
];

function MembersGrid() {
  const members = CREW_MEMBERS.slice(0, 7);
  return (
    <section className="border-t border-[#0A0A0A]/10 bg-white px-4 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 flex flex-wrap items-baseline justify-between gap-6 border-b border-[#0A0A0A]/12 pb-6">
          <div className="flex flex-wrap items-baseline gap-6">
            <h2 className="m-0 text-[clamp(28px,3.2vw,44px)] font-bold leading-none tracking-[-0.025em]">
              Already in.
            </h2>
            <span className="text-sm text-[#0A0A0A]/45">
              Builders already in the community.
            </span>
          </div>
          <span className={`${kickerClass} text-[11px] text-[#0A0A0A]/40`}>↓ More joining</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {members.map((m) => {
            return (
              <article
                key={m.name}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
              >
                <img
                  src={memberPhotoSrc(m.photo)}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{ display: "block", width: "100%", height: "100%" }}
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%]"
                  style={{
                    background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.55))",
                  }}
                />
                <div className="absolute bottom-4 left-4 right-4 z-[2]">
                  <p className="m-0 text-sm font-semibold leading-tight text-white">
                    {m.name}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: "Is this a course or an accelerator?",
      a: "Neither. There's no curriculum and no demo day. The Crew is a community where founders show their work to each other and learn out loud.",
    },
    {
      q: "How much time does it take?",
      a: "Honestly: about 30 minutes a week if you want value, an hour if you want to give back. Most activity is async.",
    },
    {
      q: "How much does it cost?",
      a: "Nothing. The Crew is free for accepted founders.",
    },
    {
      q: "Will WE Heart try to invest in my company?",
      a: "Maybe — only if it fits. Joining the Crew creates zero obligation.",
    },
    {
      q: "Who gets in?",
      a: "Founders building serious companies — pre-seed to Series A — who care more about shipping than networking.",
    },
    {
      q: "How does the application work?",
      a: "A short form (~10 minutes), reviewed by a human within a week.",
    },
  ];
  return (
    <section className="bg-white px-4 py-20 sm:px-8 sm:py-[120px]">
      <div className="mx-auto max-w-[980px]">
        <div className="mb-14 text-center">
          <div className={`${kickerClass} mb-3.5 text-[#FF5A1F]`}>Honest questions</div>
          <h2 className="m-0 text-[clamp(36px,4vw,56px)] font-bold leading-[0.95] tracking-[-0.03em]">
            What you&apos;re
            <br />
            actually wondering.
          </h2>
        </div>
        <div className="border-t border-[#0A0A0A]/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-[#0A0A0A]/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 border-0 bg-transparent py-6 text-left font-sans"
                >
                  <span className="text-[clamp(18px,2vw,26px)] font-bold leading-tight tracking-[-0.02em]">
                    {f.q}
                  </span>
                  <span
                    className={`flex size-9 shrink-0 items-center justify-center rounded-full text-lg font-bold transition-transform ${
                      isOpen ? "rotate-45 bg-[#FF5A1F] text-[#0A0A0A]" : "bg-[#0A0A0A]/[0.06] text-[#0A0A0A]"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all ${isOpen ? "max-h-60 pb-6" : "max-h-0"}`}
                >
                  <p className="m-0 max-w-[720px] text-base leading-relaxed text-[#0A0A0A]/70">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Batch01() {
  const pillars = [
    {
      kicker: "01",
      title: "Operators in the room.",
      body: "Sessions and conversations with builders who've shipped what you're shipping. Recorded for when you can't make it live. The shortcut you wish you had two years ago.",
      bullets: [
        "Live sessions with operators",
        "Members-only library",
        "Async, on your schedule",
      ],
    },
    {
      kicker: "02",
      title: "Direct line to capital.",
      body: "WE Heart is a venture builder. We write first checks for the right teams. Being inside the Crew is how we find them early.",
      bullets: [
        "Direct line to WE Heart partners",
        "Honest feedback on your raise",
        "Zero obligation to pitch",
      ],
    },
    {
      kicker: "03",
      title: "Visibility, when you want it.",
      body: "Every member gets a builder profile. When you ship something, the room knows. When you don't, no pressure.",
      bullets: [
        "Public builder profile",
        "Amplified when you ship",
        "No posting quota",
      ],
    },
  ];

  return (
    <section className="bg-[#F5EFE6] px-8 py-[120px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-16 max-w-[820px]">
          <div className={`${kickerClass} mb-3.5 text-[#FF5A1F]`}>
            What we put in your corner
          </div>
          <h2 className="m-0 text-[clamp(40px,5vw,76px)] font-bold leading-[0.92] tracking-[-0.035em] text-[#0A0A0A]">
            Three things,
            <br />
            in your corner.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {pillars.map((p, i) => (
            <div
              key={p.kicker}
              className={`flex flex-col gap-[18px] rounded-sm p-9 ${
                i === 1
                  ? "bg-[#0A0A0A] text-[#F5EFE6]"
                  : "border border-[#0A0A0A]/10 bg-white text-[#0A0A0A]"
              }`}
            >
              <div className={`flex items-center gap-2.5 ${kickerClass} text-[13px] text-[#FF5A1F]`}>
                <span className="flex size-8 items-center justify-center rounded-sm bg-[#FF5A1F] text-[13px] font-bold tracking-normal text-[#0A0A0A]">
                  {p.kicker}
                </span>
              </div>
              <h3 className="m-0 whitespace-pre-line text-[34px] font-bold leading-[0.98] tracking-[-0.03em]">
                {p.title}
              </h3>
              <p
                className={`m-0 text-[15px] leading-[1.55] ${
                  i === 1 ? "text-[#F5EFE6]/78" : "text-[#0A0A0A]/72"
                }`}
              >
                {p.body}
              </p>
              <ul className="m-0 mt-2 flex list-none flex-col gap-2.5 p-0">
                {p.bullets.map((b) => (
                  <li
                    key={b}
                    className={`relative pl-[18px] text-[13px] font-medium leading-[1.45] ${
                      i === 1 ? "text-[#F5EFE6]/85" : "text-[#0A0A0A]/78"
                    }`}
                  >
                    <span className="absolute left-0 top-[7px] h-0.5 w-2 bg-[#FF5A1F]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Context() {
  return (
    <section className="bg-[#0A0A0A] px-8 py-[112px] text-[#F5EFE6]">
      <div className="mx-auto grid max-w-[1100px] gap-16 md:grid-cols-[1fr_1.45fr]">
        <div>
          <div className={`${kickerClass} mb-3.5 text-[#FF5A1F]`}>
            Run by WE Heart
          </div>
          <h2 className="m-0 text-[clamp(40px,5vw,76px)] font-bold leading-[0.92] tracking-[-0.035em] text-[#F5EFE6]">
            Saying it
            <br />
            out loud.
          </h2>
          <div className="mt-9 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.04em] text-[#F5EFE6]/70">
            <span className="size-2 rounded-sm bg-[#FF5A1F]" />
            <a
              href="https://weheart.vc"
              className="text-inherit no-underline"
              target="_blank"
              rel="noreferrer"
            >
              weheart.vc ↗
            </a>
          </div>
        </div>
        <div className="text-[19px] leading-[1.55] text-[#F5EFE6]/88">
          <p className="mb-[22px] mt-0">
            The Crew is run by{" "}
            <strong className="font-bold text-[#F5EFE6]">WE Heart</strong>, a
            venture builder. Their thesis:{" "}
            <strong className="font-bold text-[#FF5A1F]">
              be the first cheque
            </strong>{" "}
            — which means knowing founders before they have a CNPJ.
          </p>
          <p className="mb-[22px] mt-0">
            The Crew is how that happens. It&apos;s where we meet you while
            you&apos;re still figuring it out, watch what you ship, and learn
            alongside you.
          </p>
          <p className="m-0 border-t border-[#F5EFE6]/14 pt-6 text-[15px] text-[#F5EFE6]/60">
            We&apos;re saying this here because senior operators detect
            funnel-disguised-as-community. Joining doesn&apos;t mean we&apos;ll
            invest. Not joining doesn&apos;t mean we won&apos;t. The Crew is its
            own thing — useful on its own, with or without WE Heart.
          </p>
        </div>
      </div>
    </section>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("ok");
      setEmail("");
    } catch {
      setStatus("err");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-md border border-[#0A0A0A]/10 bg-white p-6"
    >
      <p className={`${kickerClass} mb-4 text-[#FF5A1F]`}>
        Terminal B2B · Waitlist
      </p>
      <div className="mb-4">
        <label
          htmlFor="waitlist-email"
          className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-[#0A0A0A]/80"
        >
          Work email
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          className="w-full rounded-none border border-[#0A0A0A]/10 bg-[#0A0A0A]/[0.02] px-3 py-3 text-sm text-[#0A0A0A] placeholder:text-[#0A0A0A]/35 focus:border-[#0A0A0A] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-sm bg-[#0A0A0A] py-3.5 text-sm font-semibold text-[#F5EFE6] disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Join the waitlist"}
      </button>
      {status === "ok" && (
        <p className="mt-3 text-sm text-[#0A0A0A]/65">
          You&apos;re on the list. Check your inbox.
        </p>
      )}
      {status === "err" && (
        <p className="mt-3 text-sm text-[#FF5A1F]">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}

function FooterSection() {
  return (
    <footer className="text-[#0A0A0A]">
      <section className="border-t border-[#0A0A0A]/10 bg-[#F5EFE6] px-8 py-[120px]">
        <div className="mx-auto grid max-w-[1100px] gap-16 md:grid-cols-[1.1fr_1fr]">
          <div>
            <div className={`${kickerClass} mb-4 text-[#FF5A1F]`}>Apply</div>
            <h2 className="m-0 text-[clamp(56px,7vw,112px)] font-bold leading-[0.92] tracking-[-0.035em]">
              You build.
              <br />
              We&apos;re listening.
            </h2>
            <p className="mb-10 mt-8 max-w-[600px] text-[19px] leading-normal text-[#0A0A0A]/70">
              Tell us what you&apos;re building, what you&apos;ve shipped lately,
              and what you&apos;re stuck on. A human reads every application
              within a week.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href={APPLY_HREF}
                className={`${applyBtnClass} px-8 py-5 text-base font-bold`}
              >
                Apply to the Crew <CrewIcon.Arrow s={16} />
              </a>
              <span className="text-[13px] text-[#0A0A0A]/50">
                ~4 minutes · Free
              </span>
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>
      <div className="bg-[#0A0A0A] px-8 pb-7 pt-14 text-[#F5EFE6]">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 gap-8 border-b border-[#F5EFE6]/14 pb-9 md:grid-cols-[1.6fr_1fr_1fr]">
            <div>
              <img
                src="/assets/crew-logo.svg"
                alt="Crew of Builders"
                className="mb-[18px] w-[130px]"
              />
              <div className="max-w-[360px] text-sm leading-normal text-[#F5EFE6]/65">
                A community of founders showing what they&apos;re building and
                learning from each other.
              </div>
            </div>
            <div>
              <div className={`${kickerClass} mb-3.5 text-[#F5EFE6]/40`}>
                Join
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                <a href={APPLY_HREF} className="text-inherit no-underline">
                  Apply to the Crew
                </a>
                <a href={APPLY_HREF} className="text-inherit no-underline">
                  Apply to Batch 01
                </a>
              </div>
            </div>
            <div>
              <div className={`${kickerClass} mb-3.5 text-[#F5EFE6]/40`}>
                Run by
              </div>
              <div className="flex flex-col gap-2.5 text-sm">
                <a
                  href="https://weheart.vc"
                  className="text-inherit no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  WE Heart ↗
                </a>
                <span>Contact</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-2.5 pt-6 text-xs text-[#F5EFE6]/45">
            <span>© 2026 Crew of Builders</span>
            <span>Made in São Paulo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-full w-full overflow-x-hidden bg-[#F5EFE6] font-sans text-[#0A0A0A] tracking-[-0.01em] antialiased [font-feature-settings:'ss01','cv11']">
      <TopBar />
      <Hero />
      <Marquee />
      <WhatIs />
      <Feed />
      <HowItWorks />
      <Batch01 />
      <MembersGrid />
      <Context />
      
      <FooterSection />
    </div>
  );
}
