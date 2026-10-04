import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import StartHere from "../components/home/StartHere";
import MajorTimeline from "../components/home/MajorTimeline";
import { stories } from "../content/stories";
import { bibleBooks } from "../content/bible/books";
import { extendedScriptureBooks } from "../content/extended/books";
import { events } from "../content/events";

export default function Home() {
  return <div className="shell"><Header/><main>
    <Hero/>
    <StartHere/>
    <MajorTimeline/>
    <section className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:py-16">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">The library is growing</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">One connected historical encyclopedia.</h2></div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">Books are only one layer. Follow them into people, places, kingdoms, events, evidence and traditions without losing the thread.</p>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[[bibleBooks.length,"core Bible books","/books"],[extendedScriptureBooks.length,"wider-tradition works","/extended"],[events.length,"historical events","/events"],[stories.length,"encyclopedia entries","/search"]].map(([n,label,href])=><a key={String(label)} href={href as string} className="panel rounded-2xl p-5 transition hover:border-[var(--accent)]"><p className="text-3xl font-semibold">{n}+</p><p className="sans mt-1 text-[10px] font-black uppercase tracking-[.16em] text-[var(--muted)]">{label}</p></a>)}
        </div>
      </div>
    </section>
  </main></div>;
}
