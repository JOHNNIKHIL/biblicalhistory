import Link from "next/link";
import Header from "../../components/layout/Header";
import { people } from "../../content/people";

const eras = ["Primeval","Patriarchal","Exodus","Settlement","Judges","United Monarchy","Divided Monarchy","Assyrian crisis","Babylonian crisis","Babylonian Exile","Persian Period","Early Persian Period","Hellenistic","Hasmonean rise","Roman Judea","Early Christianity"];

export default async function PeoplePage({ searchParams }: { searchParams: Promise<{ q?: string; era?: string }> }) {
  const params = await searchParams;
  const q = (params.q ?? "").trim().toLowerCase();
  const era = params.era ?? "";
  const filtered = people.filter(p => {
    const haystack = [p.name,p.epithet,p.role,p.era,p.period,p.summary,...p.themes].join(" ").toLowerCase();
    return (!q || haystack.includes(q)) && (!era || p.era === era);
  });
  return <div className="shell"><Header/><main className="mx-auto max-w-[1280px] px-5 py-10 sm:px-6 sm:py-14">
    <header className="max-w-4xl"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">People & relationships</p><h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">The people behind the history</h1><p className="mt-5 text-xl leading-9 text-[var(--muted)]">A growing biographical layer connecting biblical figures, rulers, prophets, priests, historians and other people in the wider Biblical world. Each profile distinguishes biblical tradition from independently established historical evidence.</p></header>
    <form className="panel mt-10 grid gap-3 rounded-3xl p-4 sm:grid-cols-[1fr_240px_auto]" action="/people"><input name="q" defaultValue={params.q ?? ""} className="sans rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" placeholder="Search people, roles, eras, themes…"/><select name="era" defaultValue={era} className="sans rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm"><option value="">All eras</option>{eras.map(e=><option key={e} value={e}>{e}</option>)}</select><button className="sans rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white">Search</button></form>
    <div className="mt-5 flex items-center justify-between"><p className="sans text-sm font-semibold text-[var(--muted)]">Showing {filtered.length} of {people.length} profiles</p>{(q || era) ? <Link href="/people" className="sans text-sm font-bold text-[var(--accent)]">Clear filters</Link> : null}</div>
    <section className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(person=><Link key={person.slug} href={`/people/${person.slug}`} className="panel rounded-3xl p-5 transition hover:-translate-y-1 hover:border-[var(--accent)]"><div className="flex items-start justify-between gap-3"><div><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{person.era}</p><h2 className="mt-2 text-2xl font-semibold">{person.name}</h2></div><span className="sans rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-bold text-[var(--muted)]">{person.testament}</span></div><p className="sans mt-2 text-sm font-semibold text-[var(--muted)]">{person.epithet ?? person.role}</p><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{person.summary}</p><div className="mt-4 flex flex-wrap gap-2">{person.themes.slice(0,3).map(t=><span key={t} className="sans rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold text-[var(--muted)]">{t}</span>)}</div><span className="sans mt-5 block text-sm font-bold text-[var(--accent)]">Open profile →</span></Link>)}</section>
  </main></div>;
}
