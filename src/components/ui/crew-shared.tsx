// Shared data + tokens for the Crew of Builders page.
// Each member has: what they shipped lately + what they're learning out loud.
// That's the protagonist content — not the avatar, not the title.

export const CREW_MEMBERS = [
  {
    name: "Rafael Mendes", co: "Caju Energia", role: "Co-founder & CEO",
    city: "Recife", stage: "Pre-seed",
    shipped: "First 2 microgrids running in Pernambuco. 14 households, 18% cheaper than the grid.",
    learning: "Why distribution beats hardware. Bought a delivery van before our second inverter.",
    photo: "assets/member-01.png",
  },
  {
    name: "Beatriz Carvalho", co: "Pilar", role: "Founder",
    city: "São Paulo", stage: "Idea",
    shipped: "A 9-page memo on embedded credit for restaurant SMBs. 14 founder calls in 3 weeks.",
    learning: "How to ask for a no. The faster the no, the cheaper the lesson.",
    photo: "assets/member-02.png",
  },
  {
    name: "Thiago Albuquerque", co: "Norte——", role: "Founder, 2nd time",
    city: "Belo Horizonte", stage: "Pre-seed",
    shipped: "Pivoted away from FTL into yard management. Killed 4 months of code in one weekend.",
    learning: "Founder-market fit is real. Industry-market fit is realer.",
    photo: "assets/member-03.png",
  },
  {
    name: "Camila Rocha", co: "Lume Health", role: "Co-founder",
    city: "São Paulo", stage: "Building",
    shipped: "Telehealth flow live in 3 states. 600 consultations, NPS 71.",
    learning: "Regulatory work is product work. Anvisa is now half my Notion.",
    photo: "assets/member-04.png",
  },
  {
    name: "Diogo Pires", co: "Forja", role: "Founder",
    city: "Curitiba", stage: "Idea",
    shipped: "Vision model running on 3 paper machines. 22% fewer breaks in week one.",
    learning: "Industrial buyers want the boring outcome, not the AI story.",
    photo: "assets/member-05.png",
  },
  {
    name: "Mariana Tavares", co: "Vinco", role: "Co-founder & CEO",
    city: "São Paulo", stage: "Pre-seed",
    shipped: "Punch-list app on 11 sites. 240 users, 8 paying GCs.",
    learning: "Construction sells through trust, not demos. We hired a former site engineer.",
    photo: "assets/member-06.png",
  },
  {
    name: "Pedro Antunes", co: "Castanha", role: "Founder, 3rd time",
    city: "Rio de Janeiro", stage: "Stealth",
    shipped: "Open-finance aggregator MVP. 3 banks integrated, 1 in production.",
    learning: "How to read a regulatory consultation paper. Brazil ships rules at the speed of code.",
    photo: "assets/member-07.png",
  },
  {
    name: "Ana Beatriz Lima", co: "Pomar", role: "Co-founder",
    city: "Goiânia", stage: "Building",
    shipped: "Credit decisioning for soybean farmers. R$4.2M underwritten, zero defaults.",
    learning: "Underwriting is storytelling backwards. The model is the easy part.",
    photo: "assets/member-08.png",
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
