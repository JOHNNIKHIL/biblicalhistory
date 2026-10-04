"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, X } from "lucide-react";
import { stories } from "../../content/stories";

export default function ExploreSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return stories.slice(0, 8);
    return stories.filter((s: any) => `${s.title} ${s.summary ?? ""} ${s.category ?? ""} ${s.subtitle ?? ""}`.toLowerCase().includes(q)).slice(0, 12);
  }, [query]);

  return (
    <section id="search" className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6">
      <div className="panel overflow-hidden rounded-3xl shadow-sm">
        <div className="border-b border-[var(--border)] p-5 sm:p-7">
          <div className="flex items-center gap-3">
            <Search className="text-[var(--accent)]" size={22}/>
            <div>
              <p className="sans text-xs font-bold uppercase tracking-[.2em] text-[var(--accent)]">Explore the encyclopedia</p>
              <h2 className="mt-1 text-2xl font-semibold">Search stories, people, places & evidence</h2>
            </div>
          </div>
          <div className="relative mt-5">
            <form action="/search" className="relative mt-5"><input name="q" value={query} onChange={e => setQuery(e.target.value)} placeholder="Try “Jerusalem”, “Exodus”, “Sennacherib”, “Paul”…" className="sans w-full rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] px-5 py-4 pr-12 outline-none transition focus:border-[var(--accent)]"/><button className="absolute right-3 top-1/2 -translate-y-1/2 rounded-xl bg-[var(--accent)] px-3 py-2 text-xs font-bold text-white">Search</button></form>
            {query && <button type="button" onClick={() => setQuery("")} className="absolute right-24 top-1/2 -translate-y-1/2 text-[var(--muted)]"><X size={17}/></button>}
          </div>
        </div>
        <div className="grid gap-px bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-3">
          {results.map((s: any) => <Link key={s.slug} href={`/story/${s.slug}`} className="bg-[var(--surface)] p-5 transition hover:bg-[var(--surface-2)]">
            <div className="flex items-start justify-between gap-4"><div><p className="sans text-[10px] font-bold uppercase tracking-[.18em] text-[var(--accent)]">{s.category ?? s.chapter ?? "Reference"}</p><h3 className="mt-1 font-semibold">{s.title}</h3></div><ArrowUpRight size={16} className="mt-1 shrink-0 text-[var(--faint)]"/></div>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{s.summary ?? s.subtitle ?? "Explore this entry in the encyclopedia."}</p>
          </Link>)}
        </div>
      </div>
    </section>
  );
}
