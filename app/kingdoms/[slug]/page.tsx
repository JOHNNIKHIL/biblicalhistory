import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/layout/Header";
import { kingdomMap, kingdoms } from "../../../content/kingdoms";
import { people } from "../../../content/people";

export function generateStaticParams(){ return kingdoms.map(k=>({slug:k.slug})); }

export default async function KingdomPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const kingdom=kingdomMap[slug];
  if(!kingdom) notFound();
  const linkedPeople=kingdom.people.map(slug=>people.find(p=>p.slug===slug)).filter(Boolean);
  return <div className="shell"><Header/><main className="mx-auto max-w-[1100px] px-5 py-10 sm:px-6 sm:py-14">
    <Link href="/kingdoms" className="sans text-sm font-bold text-[var(--accent)]">← All kingdoms & empires</Link>
    <header className="mt-8 border-b border-[var(--border)] pb-10"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">{kingdom.type} · {kingdom.era}</p><h1 className="mt-3 text-5xl font-semibold sm:text-6xl">{kingdom.name}</h1><p className="mt-4 max-w-4xl text-xl leading-9 text-[var(--muted)]">{kingdom.summary}</p><div className="mt-7 grid gap-3 sm:grid-cols-3"><div className="panel-muted rounded-2xl p-4"><p className="sans text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Dates</p><p className="mt-1 font-semibold">{kingdom.dates}</p></div><div className="panel-muted rounded-2xl p-4"><p className="sans text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Capital</p><p className="mt-1 font-semibold">{kingdom.capital}</p></div><div className="panel-muted rounded-2xl p-4"><p className="sans text-[10px] font-black uppercase tracking-widest text-[var(--muted)]">Region</p><p className="mt-1 font-semibold">{kingdom.region}</p></div></div></header>
    <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]"><article className="article"><section><h2>Biblical significance</h2><p>{kingdom.biblicalSignificance}</p></section><section><h2>Historical significance</h2><p>{kingdom.historicalSignificance}</p></section><section><h2>External evidence & archaeology</h2><ul>{kingdom.evidence.map(e=><li key={e}>{e}</li>)}</ul></section><section><h2>Biblical references</h2><div className="flex flex-wrap gap-2">{kingdom.bibleReferences.map(r=><span key={r} className="sans rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold">{r}</span>)}</div></section></article>
      <aside className="space-y-5"><section className="panel rounded-3xl p-5"><h2 className="text-xl font-semibold">Major rulers</h2><ul className="mt-3 space-y-2">{kingdom.rulers.map(r=><li key={r} className="text-sm leading-6 text-[var(--muted)]">{r}</li>)}</ul></section><section className="panel rounded-3xl p-5"><h2 className="text-xl font-semibold">Connected people</h2><div className="mt-3 space-y-2">{linkedPeople.map(p=><Link key={p!.slug} href={`/people/${p!.slug}`} className="block rounded-xl border border-[var(--border)] p-3 transition hover:border-[var(--accent)]"><span className="font-semibold">{p!.name}</span><span className="sans mt-1 block text-xs text-[var(--muted)]">{p!.role}</span></Link>)}</div></section><section className="panel rounded-3xl p-5"><h2 className="text-xl font-semibold">Associated places</h2><div className="mt-3 flex flex-wrap gap-2">{kingdom.places.map(p=><span key={p} className="sans rounded-full bg-[var(--surface-2)] px-3 py-1.5 text-xs font-semibold text-[var(--muted)]">{p}</span>)}</div></section><section className="panel rounded-3xl p-5"><h2 className="text-xl font-semibold">Themes</h2><div className="mt-3 flex flex-wrap gap-2">{kingdom.themes.map(t=><span key={t} className="sans rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold">{t}</span>)}</div></section></aside></div>
  </main></div>
}
