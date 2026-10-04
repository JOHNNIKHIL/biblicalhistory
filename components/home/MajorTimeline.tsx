import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { events } from "../../content/events";

const featured = ["battle-of-qarqar","jehu-coup","mesha-war","assyria-conquers-israel","sennacherib-701","jerusalem-586","fall-of-babylon","temple-rededication","pompey-jerusalem","jerusalem-70"];
function yearValue(date: string) { const m = date.match(/(\d{3,4})/); return m ? Number(m[1]) : 0; }

export default function MajorTimeline() {
  const selected = featured.map(slug => events.find(e => e.slug === slug)).filter(Boolean).sort((a,b) => yearValue(a!.date)-yearValue(b!.date));
  return <section className="major-timeline border-y border-[var(--border)] bg-[var(--surface-2)]">
    <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:py-20">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div><p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">A first journey</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Major moments in Biblical history.</h2><p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">A deliberately small chronological spine. Follow the story first; open the deeper event, person, place and evidence layers when you want them.</p></div>
        <Link href="/timeline" className="inline-flex items-center gap-2 sans text-sm font-bold text-[var(--accent)]">See the full timeline <ArrowRight size={16}/></Link>
      </div>
      <div className="mt-10 overflow-x-auto pb-2">
        <div className="major-timeline-track relative flex min-w-[1040px] pt-3">
          <div className="absolute left-0 right-0 top-[56px] h-px bg-[var(--border)]" />
          {selected.map(event => event && <Link href={`/events/${event.slug}`} key={event.slug} className="timeline-stop group relative w-[208px] shrink-0 pr-5 pt-9">
            <span className="absolute left-0 top-[51px] z-10 size-3 -translate-y-1/2 rounded-full border-[3px] border-[var(--surface-2)] bg-[var(--accent)] transition group-hover:scale-125" />
            <div className="pl-5">
              <p className="sans flex items-center gap-1 text-[10px] font-black uppercase tracking-[.13em] text-[var(--accent)]"><CalendarDays size={11}/>{event.date}</p>
              <h3 className="mt-2 text-lg font-semibold leading-6 transition group-hover:text-[var(--accent)]">{event.name}</h3>
              <p className="mt-2 line-clamp-3 text-xs leading-5 text-[var(--muted)]">{event.summary}</p>
            </div>
          </Link>)}
        </div>
      </div>
    </div>
  </section>;
}
