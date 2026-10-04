import Link from "next/link";
import { ArrowRight, Search, Clock3 } from "lucide-react";

export default function Hero() {
  return <section className="hero border-b border-[var(--border)]">
    <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      <div className="max-w-5xl">
        <p className="sans text-xs font-black uppercase tracking-[.28em] text-[var(--accent)]">Biblical history · encyclopedia · atlas</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-tight sm:text-6xl lg:text-[6.4rem]">The Bible,<br/><em className="font-normal">inside its world.</em></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">Explore Scripture through its people, places, kingdoms, archaeology and major historical events — without getting lost in the interface.</p>
        <div className="mt-8 flex flex-wrap gap-3 sans">
          <Link href="/timeline" className="inline-flex items-center rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:opacity-90">Start with the timeline <ArrowRight size={16} className="ml-2"/></Link>
          <Link href="/search" className="inline-flex items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-bold"><Search size={16} className="mr-2"/> Search the library</Link>
        </div>
      </div>
      <div className="hero-note mt-12 grid max-w-5xl gap-3 border-t border-[var(--border)] pt-5 sm:grid-cols-3">
        <div><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]">Core path</p><p className="mt-1 text-sm">Timeline → Bible → People → Places</p></div>
        <div><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]">Deep layers</p><p className="mt-1 text-sm">Kingdoms · Evidence · Events · Connections</p></div>
        <div><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]">Traditions</p><p className="mt-1 text-sm">Canon · Deuterocanon · Extended Scripture</p></div>
      </div>
    </div>
  </section>;
}
