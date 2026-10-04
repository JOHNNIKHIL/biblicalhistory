import Link from "next/link";
import { ArrowUpRight, Search as SearchIcon } from "lucide-react";
import Header from "../../components/layout/Header";
import { stories } from "../../content/stories";
import { bibleBooks } from "../../content/bible/books";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const results = query
    ? stories.filter((s: any) => `${s.title ?? ""} ${s.summary ?? ""} ${s.subtitle ?? ""} ${s.category ?? ""} ${s.chapter ?? ""} ${s.location ?? ""}`.toLowerCase().includes(query)).slice(0, 60)
    : [];
  const books = query ? bibleBooks.filter(b => `${b.name} ${b.section} ${b.testament}`.toLowerCase().includes(query)) : [];

  return <div className="shell"><Header/><main className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6">
    <div className="max-w-4xl">
      <p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Universal search</p>
      <h1 className="mt-3 text-5xl font-semibold">Search the Biblical History library</h1>
      <p className="mt-4 text-lg leading-8 text-[var(--muted)]">Search across historical stories, people, places, archaeology, chronology and Bible book guides.</p>
      <form className="mt-7 flex gap-2" action="/search">
        <div className="relative flex-1"><SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={20}/><input name="q" defaultValue={q} autoFocus placeholder="Search Jerusalem, David, Exodus, Sennacherib…" className="sans w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-4 pl-12 pr-4 text-base outline-none focus:border-[var(--accent)]"/></div>
        <button className="sans rounded-2xl bg-[var(--accent)] px-6 font-bold text-white">Search</button>
      </form>
    </div>
    {query ? <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
      <section>
        <div className="flex items-end justify-between border-b border-[var(--border)] pb-3"><h2 className="text-2xl font-semibold">Encyclopedia results</h2><span className="sans text-xs font-bold text-[var(--muted)]">{results.length} shown</span></div>
        <div className="mt-3 divide-y divide-[var(--border)] rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
          {results.length ? results.map((s:any)=><Link key={s.slug} href={`/story/${s.slug}`} className="flex gap-4 p-5 transition hover:bg-[var(--surface-2)]"><div className="min-w-0 flex-1"><p className="sans text-[10px] font-black uppercase tracking-[.18em] text-[var(--accent)]">{s.category ?? s.chapter ?? "Reference"}</p><h3 className="mt-1 text-lg font-semibold">{s.title}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-[var(--muted)]">{s.summary ?? s.subtitle ?? "Explore this entry."}</p></div><ArrowUpRight className="mt-1 shrink-0 text-[var(--faint)]" size={17}/></Link>) : <div className="p-8 text-[var(--muted)]">No encyclopedia entries matched “{q}”.</div>}
        </div>
      </section>
      <aside className="space-y-4"><div className="panel rounded-2xl p-5"><p className="sans text-xs font-black uppercase tracking-[.18em] text-[var(--accent)]">Bible books</p><h2 className="mt-2 text-xl font-semibold">Book matches</h2>{books.length ? <div className="mt-4 space-y-2">{books.map(b=><Link key={b.slug} href={`/bible?book=${b.slug}`} className="block rounded-xl bg-[var(--surface-2)] p-3 hover:border-[var(--accent)]"><span className="font-semibold">{b.name}</span><span className="sans ml-2 text-xs text-[var(--muted)]">{b.section}</span></Link>)}</div> : <p className="mt-3 text-sm leading-6 text-[var(--muted)]">No direct book match.</p>}<Link href="/bible" className="sans mt-4 inline-block text-sm font-bold text-[var(--accent)]">Open Bible Explorer →</Link></div></aside>
    </div> : <div className="mt-12 panel rounded-3xl p-10"><h2 className="text-2xl font-semibold">Start exploring</h2><p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Try a person, place, ruler, biblical book, archaeological object or historical event. Search is intentionally broad so the same query can surface multiple layers of the encyclopedia.</p></div>}
  </main></div>;
}
