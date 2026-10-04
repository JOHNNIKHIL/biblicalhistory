import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import StartHere from "../components/home/StartHere";
import MajorTimeline from "../components/home/MajorTimeline";
import ExploreSearch from "../components/home/ExploreSearch";
import { stories } from "../content/stories";
import { bibleBooks } from "../content/bible/books";
import { events } from "../content/events";
import MediaGallery from "../components/media/MediaGallery";
import { mapMedia, artifactMedia } from "../content/media";

const principles = [
  ["01", "Start broad", "Use the timeline, Bible or atlas as your first doorway."],
  ["02", "Go deeper", "Follow people, places, kingdoms, events and evidence only when useful."],
  ["03", "Stay grounded", "Historical claims are separated from interpretation and tradition."],
];

export default function Home() {
  const places = stories.filter((s:any) => String(s.slug).includes("site") || ["jerusalem","samaria","megiddo","hazor","bethlehem","nazareth","capernaum","bethsaida","caesarea-maritima","egypt-and-the-nile","sinai-wilderness"].includes(s.slug)).length;
  return <div className="shell"><Header/><main>
    <Hero/>
    <StartHere/>
    <MajorTimeline/>
    <MediaGallery items={[mapMedia[1], mapMedia[2], artifactMedia[0]]} title="Maps & primary evidence"/>
    <ExploreSearch/>
    <section className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">How to use it</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">A library that stays out of your way.</h2></div>
          <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {principles.map(([n,t,d])=><div key={n} className="grid gap-3 py-5 sm:grid-cols-[48px_180px_1fr] sm:items-baseline"><span className="sans text-[10px] font-black tracking-[.16em] text-[var(--accent)]">{n}</span><strong className="text-lg font-semibold">{t}</strong><p className="text-sm leading-6 text-[var(--muted)]">{d}</p></div>)}
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-[1440px] px-4 pb-24 pt-12 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {[[stories.length,"encyclopedia entries"],[bibleBooks.length,"Bible books"],[events.length,"historical events"]].map(([n,label])=><div key={String(label)} className="panel-muted rounded-2xl p-5"><p className="text-3xl font-semibold">{n}+</p><p className="sans mt-1 text-[10px] font-black uppercase tracking-[.16em] text-[var(--muted)]">{label}</p></div>)}
      </div>
      <p className="mt-3 text-center text-xs text-[var(--faint)]">The atlas currently contains {places}+ major place/site references. The library continues to grow.</p>
    </section>
  </main></div>;
}
