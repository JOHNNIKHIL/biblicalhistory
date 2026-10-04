import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero home-hero overflow-hidden border-b border-[var(--border)]">
      <div className="mx-auto max-w-[1440px] px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.25fr_.75fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[var(--accent)]" />
              <p className="sans text-[10px] font-black uppercase tracking-[.28em] text-[var(--accent)]">A historical guide to Scripture</p>
            </div>
            <h1 className="mt-6 max-w-5xl text-[clamp(3.7rem,9vw,8.5rem)] font-semibold leading-[.84] tracking-[-.045em]">
              The Bible,<br /><em className="font-normal">inside its world.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              Follow the people, places, kingdoms and events behind Scripture — beginning with a clear historical timeline and branching out only when you want to go deeper.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/timeline" className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-5 py-3.5 sans text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:opacity-90">
                Begin with the timeline <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link href="/bible" className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3.5 sans text-sm font-bold transition hover:-translate-y-0.5 hover:bg-[var(--surface-2)]">
                <BookOpen size={16} className="mr-2" /> Explore the Bible
              </Link>
            </div>
          </div>

          <div className="relative lg:pb-2">
            <div className="panel-muted overflow-hidden rounded-[2rem]">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-2)]">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Near_East_topographic_map_with_toponyms_3000bc-en.svg" alt="Ancient Near East map" className="h-full w-full object-cover opacity-90" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 pt-16 text-white sm:p-6 sm:pt-20">
                  <p className="sans text-[10px] font-black uppercase tracking-[.2em] text-white/75">The world behind Scripture</p>
                  <p className="mt-1 text-2xl font-semibold">Places, powers, routes and evidence.</p>
                </div>
              </div>
              <div className="grid gap-2 p-4 sm:grid-cols-3">
                <Link href="/timeline" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-sm font-semibold hover:border-[var(--accent)]">Timeline <span className="block sans mt-1 text-[10px] font-bold text-[var(--muted)]">Major moments</span></Link>
                <Link href="/places" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-sm font-semibold hover:border-[var(--accent)]">Atlas <span className="block sans mt-1 text-[10px] font-bold text-[var(--muted)]">Places & maps</span></Link>
                <Link href="/visuals" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-3 text-sm font-semibold hover:border-[var(--accent)]">Visuals <span className="block sans mt-1 text-[10px] font-bold text-[var(--muted)]">Images & evidence</span></Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-[var(--border)] pt-5 sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]">
          <span>Scripture</span><span>History</span><span>Geography</span><span>Archaeology</span><span>Traditions</span>
          <span className="ml-auto hidden sm:inline">Explore at your own depth</span>
        </div>
      </div>
    </section>
  );
}
