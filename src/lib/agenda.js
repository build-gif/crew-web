// Agenda helpers for pages rendered on the server with ISR.
// "Today" is always São Paulo's date: events are scheduled in BRT.

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function todayInSaoPaulo(now = new Date()) {
  // en-CA formats as YYYY-MM-DD, which compares correctly as a string.
  return now.toLocaleDateString("en-CA", { timeZone: "America/Sao_Paulo" });
}

export function shortDate(isoDate) {
  const [, month, day] = isoDate.split("-").map(Number);
  return `${MONTHS[month - 1]} ${day}`;
}

export function isUpcoming(isoDate, today = todayInSaoPaulo()) {
  return isoDate >= today;
}

// Known dated events first (only the ones still ahead). Then each weekly
// format with no dated event left gets its generic row, so the card never
// shows a past date and never goes empty.
export function upcomingAgenda(dated, weekly, size = 4, today = todayInSaoPaulo()) {
  const ahead = dated
    .filter((e) => isUpcoming(e.date, today))
    .slice(0, size)
    .map((e) => ({ ...e, when: shortDate(e.date) }));
  const fill = weekly.filter((w) => !ahead.some((e) => e.kind === w.kind));
  return [...ahead, ...fill].slice(0, Math.max(size, fill.length));
}
