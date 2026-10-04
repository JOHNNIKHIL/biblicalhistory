import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import StartHere from "../components/home/StartHere";
import MajorTimeline from "../components/home/MajorTimeline";
import ExploreSearch from "../components/home/ExploreSearch";
import { stories } from "../content/stories";
import { bibleBooks } from "../content/bible/books";
import { events } from "../content/events";

export default function Home() {
  const places = stories.filter((s:any) => String(s.slug).includes("site") || ["jerusalem","samaria","megiddo","hazor","bethlehem","nazareth","capernaum","bethsaida","caesarea-maritima","egypt-and-the-nile","sinai-wilderness"].includes(s.slug)).length;
  return <div className="shell"><Header/><main>
    <Hero/>
    <StartHere/>
    <MajorTimeline/>
    <ExploreSearch/>
    <section className="mx-auto max-w-[1440px] px-4 pb-24 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {[[stories.length,"encyclopedia entries"],[bibleBooks.length,"Bible books"],[events.length,"historical events"]].map(([n,label]) => <div key={String(label)} className="panel-muted rounded-2xl p-5"><p className="text-3xl font-semibold">{n}+</p><p className="sans mt-1 text-[10px] font-black uppercase tracking-[.16em] text-[var(--muted)]">{label}</p></div>)}
      </div>
      <p className="mt-3 text-center text-xs text-[var(--faint)]">The atlas currently contains {places}+ major place/site references. The library continues to grow.</p>
    </section>
  </main></div>;
}
