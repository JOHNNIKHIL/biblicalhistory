"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { stories } from "../../content/stories";

export default function ExploreSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stories.slice(0, 6);
    return stories.filter((s:any) => `${s.title} ${s.summary ?? ""} ${s.category ?? ""} ${s.subtitle ?? ""}`.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);
  return <section className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:py-20">
    <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
      <div className="lg:sticky lg:top-28">
        <p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">When you know what you want</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Search the whole library.</h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">Stories, people, places and historical material are connected behind the scenes. Search first, then keep following the thread.</p>
        <Link href="/search" className="mt-5 inline-flex items-center gap-2 sans text-sm font-bold text-[var(--accent)]">Open advanced search <ArrowRight size={15}/></Link>
      </div>
      <div className="panel overflow-hidden rounded-[1.75rem]">
        <div className="p-4 sm:p-6">
          <form action="/search" className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent)]" size={19}/>
            <input name="q" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search Jerusalem, Exodus, David, Sennacherib…" className="sans w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] py-4 pl-12 pr-24 text-sm outline-none transition focus:border-[var(--accent)]" />
            {query && <button type="button" onClick={()=>setQuery("")} className="absolute right-20 top-1/2 -translate-y-1/2 text-[var(--muted)]"><X size={16}/></button>}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-[var(--accent)] px-3 py-2 sans text-xs font-bold text-white">Search</button>
          </form>
        </div>
        <div className="grid border-t border-[var(--border)] sm:grid-cols-2">
          {results.map((s:any)=><Link key={s.slug} href={`/story/${s.slug}`} className="border-b border-[var(--border)] p-5 transition hover:bg-[var(--surface-2)] sm:[&:nth-child(odd)]:border-r">
            <p className="sans text-[9px] font-black uppercase tracking-[.18em] text-[var(--accent)]">{s.category ?? "Reference"}</p>
            <h3 className="mt-1 font-semibold">{s.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{s.summary ?? s.subtitle ?? "Explore this entry."}</p>
          </Link>)}
        </div>
      </div>
    </div>
  </section>;
}
