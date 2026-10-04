import Link from "next/link";
import Header from "../../components/layout/Header";
import { events } from "../../content/events";

const types = ["All", "Battle", "Conquest", "Revolt", "Siege", "Political event", "Journey / mission", "Destruction", "Religious / cultural event"] as const;

export default async function EventsPage({searchParams}:{searchParams:Promise<{q?:string;type?:string}>}) {
  const params = await searchParams;
  const q = (params.q ?? "").trim().toLowerCase();
  const type = params.type ?? "All";
  const filtered = events.filter(e => {
    const matchesType = type === "All" || e.type === type;
    const haystack = [e.name,e.summary,e.date,e.era,e.location,e.themes.join(" ")].join(" ").toLowerCase();
    return matchesType && (!q || haystack.includes(q));
  });
  return <div className="shell"><Header/><main className="mx-auto max-w-[1200px] px-5 py-10 sm:px-6 sm:py-14">
    <header className="max-w-4xl"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Wars · Conquests · Revolts · Turning points</p><h1 className="mt-3 text-5xl font-semibold sm:text-6xl">Events of Biblical History</h1><p className="mt-5 text-xl leading-9 text-[var(--muted)]">A dedicated event layer connecting battles, sieges, conquests, political crises, journeys and major turning points with the people, places, kingdoms and evidence that illuminate them.</p></header>
    <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_250px_auto]"><input name="q" defaultValue={params.q} placeholder="Search events, people, places, kingdoms…" className="panel rounded-2xl px-4 py-3 outline-none"/><select name="type" defaultValue={type} className="panel rounded-2xl px-4 py-3 outline-none">{types.map(t=><option key={t}>{t}</option>)}</select><button className="rounded-2xl bg-[var(--accent)] px-5 py-3 font-bold text-white">Search</button></form>
    <div className="mt-6 flex flex-wrap gap-2">{types.map(t=><Link key={t} href={t === "All" ? "/events" : `/events?type=${encodeURIComponent(t)}`} className={`sans rounded-full border px-3 py-1.5 text-xs font-bold ${type===t?"border-[var(--accent)] text-[var(--accent)]":"border-[var(--border)] text-[var(--muted)]"}`}>{t}</Link>)}</div>
    <p className="mt-8 sans text-sm font-semibold text-[var(--muted)]">{filtered.length} event{filtered.length===1?"":"s"} shown</p>
    <section className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{filtered.map(e=><Link key={e.slug} href={`/events/${e.slug}`} className="panel group rounded-3xl p-6 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"><div className="flex items-center justify-between gap-3"><span className="sans text-xs font-black uppercase tracking-widest text-[var(--accent)]">{e.type}</span><span className="sans text-xs text-[var(--muted)]">{e.date}</span></div><h2 className="mt-3 text-2xl font-semibold group-hover:text-[var(--accent)]">{e.name}</h2><p className="mt-3 text-sm leading-7 text-[var(--muted)]">{e.summary}</p><div className="mt-5 flex flex-wrap gap-2">{e.themes.slice(0,3).map(t=><span key={t} className="sans rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[11px] font-semibold">{t}</span>)}</div></Link>)}</section>
  </main></div>
}
