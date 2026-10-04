import Link from "next/link";
import { chapters } from "../../content/chapters";
import { ArrowUpRight } from "lucide-react";

export default function ChapterGrid() {
  return <section className="mx-auto max-w-[1500px] px-4 py-12 sm:px-6 lg:py-16">
    <div className="flex items-end justify-between gap-5"><div><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Browse by pathway</p><h2 className="mt-2 text-3xl font-semibold sm:text-4xl">The library is bigger than the timeline</h2></div><p className="hidden max-w-sm text-right text-sm leading-6 text-[var(--muted)] md:block">Start with the canonical story, then branch into books, people, places, archaeology and historical questions.</p></div>
    <div className="mt-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      {chapters.map((c, i) => <Link key={c.id} href={c.stories[0] ? `/story/${c.stories[0]}` : "#"} className="panel group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
        <div className="flex items-start justify-between gap-4"><span className="sans text-[10px] font-black tracking-[.18em] text-[var(--faint)]">{String(i+1).padStart(2,"0")}</span><ArrowUpRight size={17} className="text-[var(--faint)] transition group-hover:text-[var(--accent)]"/></div>
        <h3 className="mt-8 text-xl font-semibold">{c.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{c.description}</p>
        <p className="sans mt-4 text-xs font-bold text-[var(--accent)]">{c.stories.length} entries</p>
      </Link>)}
    </div>
  </section>;
}
