// Everything the home says, in one place. Components only lay it out.

const APP = "https://app.crewofbuilders.com";

// Every CTA carries its own utm_content, so the app's first-touch cookie
// (cb_ft → profiles.signup_attribution) tells us which button converted.
export function signupUrl(track, content) {
  const params = new URLSearchParams({
    utm_source: "crewofbuilders",
    utm_medium: "site",
    utm_campaign: "home_v2",
    utm_content: content,
  });
  if (track) params.set("track", track);
  return `${APP}/signup?${params}`;
}

export const LINKS = {
  events: `${APP}/events`,
  missions: `${APP}/missions`,
  pitchDay: "/pitch-day",
  weHeart: "https://www.weheartimpact.com/",
  video: "https://www.youtube-nocookie.com/embed/ZdJgMSNp24U?autoplay=1&rel=0&modestbranding=1",
};

// The Pitch Day bar disappears on its own once the day has passed.
export const PITCH_DAY = { date: "2026-10-29", label: "Pitch Day #2 · Oct 29" };

export const ROTATING_WORDS = ["builders.", "experts.", "investors."];

// Hero constellation. Order matters: the first person takes the largest
// circle and the last one is placed farthest from it.
export const PEOPLE = [
  { name: "Mariana Ravedutti", slug: "mariana-ravedutti" },
  { name: "Ivan Freire", slug: "ivan-freire" },
  { name: "Cauê Albuquerque", slug: "caue-albuquerque" },
  { name: "Juliano Dias", slug: "juliano-dias" },
  { name: "Lucas Zanon", slug: "lucas-zanon" },
  { name: "Gabriel Ribeiro", slug: "gabriel-ribeiro" },
  { name: "Letícia Souza", slug: "leticia-souza" },
];

export const NUMBERS = [
  { value: "500", label: "members" },
  { value: "180", label: "startups being built" },
  { value: "50", label: "investors, VCs and angels" },
];

export const WAYS = [
  { title: "Builder", line: "You're building something.", track: "builder", cta: "Join as a builder", featured: true },
  { title: "Expert", line: "You want to help others to build", track: "explorer", cta: "Join as an expert" },
  { title: "Investor", line: "You back the ones building.", track: "investor", cta: "Join as an investor" },
];

export const INTRO_STEPS = [
  { label: "Requested", date: "Oct 2" },
  { label: "Forwarded", date: "Oct 3" },
  { label: "Accepted", date: "Oct 4" },
];

// Dated events we already know about. Past ones drop off on their own
// (see src/lib/agenda.js); the weekly rhythm fills the rest of the card.
export const AGENDA_DATED = [
  { date: "2026-10-20", kind: "WE POD", title: "Celso Berri, founder of Syncker", detail: "Live on YouTube" },
  { date: "2026-10-22", kind: "Meet the Crew", title: "Meet the Crew #15", detail: "Kelvin Berlatto pitches" },
  { date: "2026-10-29", kind: "Pitch Day", title: "Pitch Day #2", detail: "Startups from the Crew pitch to investors · 10am", highlight: true },
];

export const AGENDA_WEEKLY = [
  { when: "Tue", kind: "WE POD", title: "WE POD", detail: "Live with an operator or investor" },
  { when: "Thu", kind: "Meet the Crew", title: "Meet the Crew", detail: "One builder pitches, new members introduce themselves" },
];

export const MISSIONS = [
  {
    title: "Co-founder · Tô Grávida",
    line: "A pregnancy app built with creator Luluty. Own the path to its first paying subscribers.",
    meta: "Co-founder equity · Remote",
    image: "/assets/v2/missions/to-gravida.jpg",
    alt: "Tô Grávida",
  },
  {
    title: "Co-founder · Tempo Health",
    line: "A supplement brand born from a joint venture between WE Heart and Mude Wellness. Build it from day one.",
    meta: "Co-founder equity · Rio de Janeiro, hybrid",
    image: "/assets/v2/missions/tempo-health.jpg",
    alt: "Mude + WE Heart Impact",
  },
];

// fit: "contain" for covers that aren't close to 2:1 (the workshop banner
// is 4:1 and would lose its sides).
export const RECENT_EVENTS = [
  { slug: "live-donato-ramos", format: "Live", date: "Oct 6", who: "Donato Ramos", theme: "The Berkshire of Brazil's middle market" },
  { slug: "mtc-12-bruno-cesar", format: "Meet the Crew #12", date: "Oct 1", who: "Bruno César", theme: "Bruno César pitches, new members introduce themselves" },
  { slug: "workshop-pitch-to-win", format: "Workshop #1", date: "Sep 29", who: "Pitch to Win", theme: "Pitch to Win", fit: "contain" },
  { slug: "mtc-11-joao-saraiva", format: "Meet the Crew #11", date: "Sep 24", who: "João Saraiva", theme: "João Saraiva pitches Unya" },
  { slug: "wepod-bruno-lino", format: "WE POD #43", date: "Sep 8", who: "Bruno Lino", theme: "From Burger King EMEA president to investor in Brazilian founders" },
  { slug: "wepod-caue-albuquerque", format: "WE POD #41", date: "Aug 25", who: "Cauê Albuquerque", theme: "From building startups to investing in them" },
];

export const TESTIMONIALS = [
  {
    name: "Letícia Souza", slug: "leticia-souza", byline: "Founder",
    headline: "An intro after my first Meet the Crew.",
    quote: "As a first-time founder, I felt welcomed by the whole community. After my first Meet the Crew I got an intro to another builder and left with a lot of valuable insight.",
  },
  {
    name: "Ivan Freire", slug: "ivan-freire", byline: "Brio Educacional · Builder",
    headline: "Partners and new business.",
    quote: "The Crew connected me with people off the curve who are building things that matter, and opened doors to partnerships and new business. Seeing up close how others build raised my own bar.",
  },
  {
    name: "Mariana Ravedutti", slug: "mariana-ravedutti", byline: "e.feito Social · Builder",
    headline: "Real business opportunities.",
    quote: "Sharing the journey with others who are building, wins and mistakes included, has helped me learn faster, open doors and spot real business opportunities for e.feito Social.",
  },
  {
    name: "Gustavo André", slug: "gustavo-andre", byline: "Marketing Manager · B2B Expert",
    headline: "Access you can't buy.",
    quote: "Access is a huge edge. In the Crew you reach people, topics and possibilities that are truly rare, and that's priceless. If you want to stay ahead, the Crew is the place.",
  },
];

export const FAQ = [
  { q: "Is it really free?", a: "Yes. WE Heart Impact, a venture builder, runs the Crew. It's how we meet great builders early. You never have to pitch us." },
  { q: "Is it online?", a: "Yes, every event runs online." },
  { q: "How much time does it take?", a: "Meet the Crew is one hour a week. Everything else runs on your schedule." },
  { q: "I'm an investor or an expert. What's in it for me?", a: "Investors watch Crew startups pitch at Pitch Day and get double opt-in intros to founders. Experts get found by founders who need what they know, and can join teams through Missions." },
  { q: "Do I need to pitch to get in?", a: "No." },
];
