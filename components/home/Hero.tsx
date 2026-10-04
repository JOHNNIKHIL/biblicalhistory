import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Map, ScrollText } from "lucide-react";

export default function Hero() {
  return <section className="relative overflow-hidden border-b border-[var(--border)]">
    <div className="mx-auto grid max-w-[1500px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.25fr_.75fr] lg:py-20">
      <div className="flex flex-col justify-center">
        <p className="sans text-xs font-black uppercase tracking-[.28em] text-[var(--accent)]">A living Biblical history reference</p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[.98] tracking-tight sm:text-6xl lg:text-8xl">Read the Bible<br/><em className="font-normal">inside its world.</em></h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--muted)] sm:text-xl">A long-form encyclopedia connecting Scripture, people, places, archaeology, inscriptions, chronology and the wider ancient world — built to grow far beyond a simple timeline.</p>
        <div className="mt-8 flex flex-wrap gap-3 sans">
          <Link href="#search" className="rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white transition hover:opacity-90">Explore the library <ArrowRight size={16} className="ml-2 inline"/></Link>
          <Link href="/timeline" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-bold">Open timeline</Link>
        </div>
      </div>
      <div className="panel relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
        <div className="absolute -right-20 -top-20 size-56 rounded-full bg-[var(--accent-soft)] opacity-60 blur-2xl"/>
        <p className="relative sans text-xs font-bold uppercase tracking-[.2em] text-[var(--muted)]">The new architecture</p>
        <div className="relative mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {[[BookOpen,"Bible Books","Book-by-book guides and chapter pathways"],[Clock3,"Timeline","Events from the ancient Near East to Rome"],[Map,"Atlas","Cities, regions, sites and archaeological context"],[ScrollText,"Evidence","Inscriptions, texts and material remains"]].map(([Icon,title,text]) => { const I=Icon as any; return <div key={title as string} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4"><I size={19} className="text-[var(--accent)]"/><h3 className="mt-3 font-semibold">{title as string}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{text as string}</p></div>})}
        </div>
      </div>
    </div>
  </section>;
}
