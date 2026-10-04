import Link from "next/link";
import Header from "../../components/layout/Header";
import { events } from "../../content/events";

const featured = [
  "jericho-tradition","hazor-campaign","battle-of-deborah","david-goliath","david-captures-jerusalem","battle-of-qarqar","jehu-coup","mesha-war","assyria-conquers-israel","sennacherib-701","jerusalem-586","fall-of-babylon","alexander-conquest-levant","temple-rededication","pompey-jerusalem","paul-missionary-journeys","jewish-war-66-70","jerusalem-70","masada-siege"
];
const eraOrder = ["Origins & Bronze Age","Judges & Early Monarchy","United Monarchy","Divided Kingdoms","Exile & Persia","Hellenistic World","Roman World"];

function yearValue(date: string) {
  const m = date.match(/(\d{3,4})/);
  if (!m) return 9999;
  return Number(m[1]);
}

export default function TimelinePage() {
  const selected = featured.map(slug => events.find(e => e.slug === slug)).filter(Boolean).sort((a,b)=>yearValue(a!.date)-yearValue(b!.date));
  return <div className="shell"><Header/><main className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:py-14">
    <header className="max-w-4xl"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">The core timeline</p><h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">Major events, in order.</h1><p className="mt-5 text-lg leading-8 text-[var(--muted)]">This is the readable spine of the encyclopedia. It deliberately highlights major turning points rather than dumping every article onto one enormous page.</p></header>
    <div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="panel-muted rounded-2xl p-5"><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">Focus</p><p className="mt-2 font-semibold">Major historical moments</p></div><div className="panel-muted rounded-2xl p-5"><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">Method</p><p className="mt-2 font-semibold">Biblical tradition + historical context</p></div><div className="panel-muted rounded-2xl p-5"><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">Branch out</p><p className="mt-2 font-semibold">Open an event to explore its network</p></div></div>
    <div className="timeline-list mt-14">
      {selected.map((event, i) => event && <article key={event.slug} className="timeline-row group grid gap-5 sm:grid-cols-[120px_28px_minmax(0,1fr)]">
        <div className="sm:pt-5"><p className="sans text-xs font-black uppercase tracking-[.13em] text-[var(--accent)]">{event.date}</p><p className="mt-1 text-xs text-[var(--faint)]">{event.era}</p></div>
        <div className="timeline-rail relative hidden sm:block"><span className="absolute left-1/2 top-7 size-3 -translate-x-1/2 rounded-full border-[3px] border-[var(--bg)] bg-[var(--accent)]"/><span className="absolute bottom-0 left-1/2 top-10 w-px -translate-x-1/2 bg-[var(--border)]"/></div>
        <Link href={`/events/${event.slug}`} className="panel timeline-event rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)] sm:p-6"><div className="flex items-start justify-between gap-4"><div><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]">{event.type} · {event.location}</p><h2 className="mt-2 text-xl font-semibold sm:text-2xl">{event.name}</h2></div><span className="sans shrink-0 text-xs font-bold text-[var(--accent)]">Explore →</span></div><p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">{event.summary}</p><div className="mt-4 flex flex-wrap gap-2">{event.themes.slice(0,4).map(theme=><span key={theme} className="sans rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-bold text-[var(--muted)]">{theme}</span>)}</div></Link>
      </article>)}
    </div>
    <section className="mt-14 border-t border-[var(--border)] pt-8"><p className="sans text-xs font-black uppercase tracking-[.18em] text-[var(--accent)]">Go deeper</p><div className="mt-4 flex flex-wrap gap-2">{eraOrder.map(era=><span key={era} className="rounded-full border border-[var(--border)] px-3 py-2 text-sm text-[var(--muted)]">{era}</span>)}<Link href="/events" className="rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-bold text-white">Browse all events →</Link></div></section>
  </main></div>;
}
