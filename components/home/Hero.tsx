import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Map, Search } from "lucide-react";

export default function Hero() {
  return <section className="hero home-hero border-b border-[var(--border)]">
    <div className="mx-auto max-w-[1440px] px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3"><span className="h-px w-10 bg-[var(--accent)]"/><p className="sans text-[10px] font-black uppercase tracking-[.28em] text-[var(--accent)]">A historical guide to Scripture</p></div>
        <h1 className="mt-6 text-[clamp(3.6rem,8vw,7.8rem)] font-semibold leading-[.86] tracking-[-.045em]">The Bible,<br/><em className="font-normal">inside its world.</em></h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">Explore Scripture through its books, people, places, kingdoms, events, archaeology and competing canonical traditions — without making you navigate a maze first.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/books" className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-3.5 sans text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90"><BookOpen size={16} className="mr-2"/>Explore the books</Link>
          <Link href="/timeline" className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 sans text-sm font-bold transition hover:bg-[var(--surface-2)]"><Clock3 size={16} className="mr-2"/>Walk the timeline</Link>
          <Link href="/places" className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 sans text-sm font-bold transition hover:bg-[var(--surface-2)]"><Map size={16} className="mr-2"/>Open the atlas</Link>
        </div>
      </div>
      <form action="/search" className="mt-10 max-w-3xl relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--accent)]" size={18}/>
        <input name="q" placeholder="Search Genesis, Jerusalem, David, Sennacherib…" className="sans w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] py-4 pl-12 pr-24 text-sm outline-none focus:border-[var(--accent)]"/>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-[var(--accent)] px-4 py-2.5 sans text-xs font-bold text-white">Search</button>
      </form>
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-t border-[var(--border)] pt-5 sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]"><span>Scripture</span><span>History</span><span>Geography</span><span>Archaeology</span><span>Traditions</span><span className="hidden sm:inline">Follow one thread at a time.</span></div>
    </div>
  </section>;
}
