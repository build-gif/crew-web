import { useState, useEffect } from "react";

// Shared data + tokens for the Crew of Builders page.
// Each member has: what they shipped lately + what they're learning out loud.
// That's the protagonist content — not the avatar, not the title.

export const CREW_MEMBERS = [
  {
    name: "Gabriel Ribeiro", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/gabriel-ribeiro.png",
  },
  {
    name: "Lucas da Silva", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/lucas-da-silva.png",
  },
  {
    name: "Marco Puerari", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/marco-puerari.png",
  },
  {
    name: "Mikael Carvalho", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/mikael-carvalho.png",
  },
  {
    name: "Nathan Nobrega", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/nathan-nobrega.png",
  },
  {
    name: "Pedro Nagamine", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/pedro-nagamine.png",
  },
  {
    name: "Vinicius Moreira", co: "Crew of Builders", role: "Builder",
    city: "São Paulo", stage: "Building",
    shipped: "",
    learning: "",
    photo: "assets/builders/vinicius-moreira.png",
  },
{
    name: "Lucas Veloso", co: "Brasa Foods", role: "Founder",
    city: "São Paulo", stage: "Pre-seed",
    shipped: "Inventory + ordering for 22 dark kitchens. Cut food waste 31%.",
    learning: "Operators don't read changelogs. We made a WhatsApp-only release stream.",
    photo: "assets/member-09.png",
  },
  {
    name: "Isabela Moraes", co: "Atlas Trabalho", role: "Founder",
    city: "Florianópolis", stage: "Idea",
    shipped: "Field-research diary across 6 cities. 41 interviews with shift workers.",
    learning: "The frontline does not need an app. They need a cleaner paycheck.",
    photo: "assets/member-10.png",
  },
  {
    name: "Henrique Sotto", co: "Poste", role: "Co-founder & CTO",
    city: "São Paulo", stage: "Pre-seed",
    shipped: "Routing engine cut last-mile cost 19% for our pilot bakery chain.",
    learning: "Logistics margins live in 2-minute windows. Everything else is theater.",
    photo: "assets/member-11.png",
  },
  {
    name: "Renata Bicalho", co: "Cura", role: "Founder",
    city: "Salvador", stage: "Building",
    shipped: "Mobile clinic loop in 4 rural municipalities. 1,800 patients seen.",
    learning: "Public-sector procurement is a product. We hired a doctor who's also a lawyer.",
    photo: "assets/member-12.png",
  },
  {
    name: "Caio Bertoldi", co: "Cofre", role: "Founder",
    city: "São Paulo", stage: "Stealth",
    shipped: "Treasury dashboard for 8 design-partner startups. Saved 3 of them ~R$80k each.",
    learning: "Sell to CFOs in their language: variance, not vibes.",
    photo: "assets/member-13.png",
  },
  {
    name: "Larissa Andrade", co: "Tecelã", role: "Co-founder",
    city: "São Paulo", stage: "Pre-seed",
    shipped: "PLM tool for small fashion brands. 30 paying brands, 92% retention 6mo in.",
    learning: "Vertical SaaS wins by knowing one industry better than the industry knows itself.",
    photo: "assets/member-14.png",
  },
  {
    name: "Bruno Nakamura", co: "Ferro", role: "Founder",
    city: "São Paulo", stage: "Idea",
    shipped: "Pricing index for steel rebar. Free, 600 weekly readers, 4 mills now contributing data.",
    learning: "Marketplaces start as media. Liquidity follows trust.",
    photo: "assets/member-15.png",
  },
];

export const CREW_TOKENS = {
  orange: '#FF5A1F', orangeDark: '#E64A0F',
  ink: '#0A0A0A', ink2: '#161616',
  cream: '#F5EFE6', bone: '#EFE9DE',
  line: 'rgba(10,10,10,0.12)',
};

const TYPEWRITER_WORDS = ["builders", "founders", "investors"];

export function useTypewriter(words = TYPEWRITER_WORDS, typingSpeed = 150, deletingSpeed = 100, pauseTime = 3000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (charIndex < currentWord.length) {
        const timer = setTimeout(() => {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        return () => clearTimeout(timer);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      const timer = setTimeout(() => setPhase("deleting"), pauseTime);
      return () => clearTimeout(timer);
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setCharIndex(charIndex - 1);
          setText(currentWord.slice(0, charIndex - 1));
        }, deletingSpeed);
        return () => clearTimeout(timer);
      } else {
        setWordIndex((prev) => (prev + 1) % words.length);
        setPhase("typing");
      }
    }
  }, [phase, charIndex, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export const CrewIcon = {
  Arrow: ({ s = 14, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="square">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  ArrowUR: ({ s = 14, c = 'currentColor' }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="square">
      <path d="M6 18L18 6M8 6h10v10" />
    </svg>
  ),
};
