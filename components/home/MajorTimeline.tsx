import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { events } from "../../content/events";

const featured = [
  "battle-of-qarqar",
  "jehu-coup",
  "mesha-war",
  "assyria-conquers-israel",
  "sennacherib-701",
  "jerusalem-586",
  "fall-of-babylon",
  "temple-rededication",
  "pompey-jerusalem",
  "jerusalem-70",
];

function yearValue(date: string) {
  const m = date.match(/(\d{3,4})/);
  return m ? Number(m[1]) : 0;
}

export default function MajorTimeline() {
  const selected = featured.map(slug => events.find(e => e.slug === slug)).filter(Boolean).sort((a, b) => yearValue(a!.date) - yearValue(b!.date));
  return <section className="major-timeline mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:py-16">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">The core timeline</p>
        <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">Major moments in Biblical history</h2>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">A readable chronological spine — not every article, not every event. Start here, then branch into the deeper library.</p>
      </div>
      <Link href="/timeline" className="sans inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)]">Open full timeline <ArrowRight size={16}/></Link>
    </div>
    <div className="mt-9 overflow-x-auto pb-3">
      <div className="major-timeline-track relative flex min-w-[980px] gap-0 pt-8">
        <div className="absolute left-0 right-0 top-[50px] h-px bg-[var(--border)]"/>
        {selected.map((event, i) => event && <Link href={`/events/${event.slug}`} key={event.slug} className="major-timeline-card group relative w-[190px] shrink-0 pr-4">
          <span className="timeline-dot absolute left-0 top-[45px] z-10 size-3 -translate-y-1/2 rounded-full border-[3px] border-[var(--bg)] bg-[var(--accent)]"/>
          <div className="pb-9 pl-5">
            <p className="sans flex items-center gap-1 text-[10px] font-black uppercase tracking-[.13em] text-[var(--accent)]"><CalendarDays size={12}/>{event.date}</p>
            <h3 className="mt-2 text-lg font-semibold leading-6 group-hover:text-[var(--accent)]">{event.name}</h3>
            <p className="mt-2 line-clamp-3 text-xs leading-5 text-[var(--muted)]">{event.summary}</p>
          </div>
        </Link>)}
      </div>
    </div>
  </section>;
}
