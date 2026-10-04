import Header from "../../components/layout/Header";
import Link from "next/link";
import AtlasMap from "../../components/places/AtlasMap";
import { places } from "../../content/places";

export default async function PlacesPage({searchParams}:{searchParams?:Promise<{q?:string;region?:string}>}){
  const params=searchParams?await searchParams:{};
  const q=(params.q??"").trim().toLowerCase();
  const region=params.region??"All regions";
  const regions=["All regions",...Array.from(new Set(places.map(p=>p.region)))];
  const filtered=places.filter(p=>(!q||[p.name,p.type,p.region,p.era,p.summary,...p.themes].join(" ").toLowerCase().includes(q))&&(region==="All regions"||p.region===region));
  return <div className="shell"><Header/><main className="mx-auto max-w-[1250px] px-4 py-10 sm:px-6 sm:py-14">
    <p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Biblical atlas</p><h1 className="mt-3 text-5xl font-semibold">Places & Ancient World Atlas</h1><p className="mt-4 max-w-3xl text-lg leading-8 text-[var(--muted)]">Cities, regions, archaeological sites and travel corridors connected to Biblical history. Each place separates biblical significance from what archaeology and external historical evidence can actually establish.</p>
    <div className="mt-10"><AtlasMap/></div>
    <form className="mt-10 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 md:grid-cols-[1fr_240px_auto]"><input name="q" defaultValue={params.q??""} placeholder="Search places, regions, periods or themes…" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 outline-none focus:border-[var(--accent)]"/><select name="region" defaultValue={region} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3"><option>All regions</option>{regions.slice(1).map(r=><option key={r}>{r}</option>)}</select><button className="sans rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white">Filter atlas</button></form>
    <div className="mt-8 flex items-center justify-between"><p className="sans text-sm font-bold text-[var(--muted)]">{filtered.length} places in the current atlas</p><Link href="/people" className="sans text-sm font-bold text-[var(--accent)]">Explore connected people →</Link></div>
    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{filtered.map(p=><Link key={p.slug} href={`/places/${p.slug}`} className="panel rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"><div className="flex items-start justify-between gap-3"><span className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{p.type}</span><span className="sans text-[10px] font-bold text-[var(--muted)]">{p.region}</span></div><h2 className="mt-2 text-2xl font-semibold">{p.name}</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{p.summary}</p><div className="mt-4 flex flex-wrap gap-2">{p.themes.slice(0,3).map(t=><span key={t} className="sans rounded-full bg-[var(--surface-2)] px-2.5 py-1 text-[10px] font-bold text-[var(--muted)]">{t}</span>)}</div></Link>)}</div>
  </main></div>
}
