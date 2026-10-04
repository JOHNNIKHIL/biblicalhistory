import Link from 'next/link';
import { events } from '../../content/events';

const featured = ["battle-of-qarqar","jehu-coup","mesha-war","assyria-conquers-israel","sennacherib-701","jerusalem-586","fall-of-babylon","temple-rededication","pompey-jerusalem","jerusalem-70"];

export default function Timeline() {
  return <div className="timeline-list">
    {featured.map(slug => { const e = events.find(x => x.slug === slug); if (!e) return null; return <Link key={slug} href={`/events/${slug}`} className="timeline-mini panel block rounded-2xl p-5"><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{e.date}</p><h3 className="mt-1 text-xl font-semibold">{e.name}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{e.summary}</p></Link>; })}
  </div>;
}
