import Link from "next/link";
import { BookOpen, Clock3, Map, Search, Users, ArrowUpRight } from "lucide-react";

const cards = [
  { href: "/timeline", icon: Clock3, eyebrow: "01 · Chronology", title: "Start with the timeline", text: "Follow the major events from the ancient world through the first century." },
  { href: "/bible", icon: BookOpen, eyebrow: "02 · Scripture", title: "Explore the Bible", text: "Browse all 66 books, then move from a book into its chapters and historical context." },
  { href: "/places", icon: Map, eyebrow: "03 · Geography", title: "Open the atlas", text: "See the cities, regions and archaeological sites that form the physical world of Scripture." },
  { href: "/people", icon: Users, eyebrow: "04 · People", title: "Meet the people", text: "Trace prophets, kings, apostles and historical figures through their relationships and sources." },
];

export default function StartHere() {
  return <section className="mx-auto max-w-[1440px] px-4 py-10 sm:px-6 lg:py-14">
    <div className="flex items-end justify-between gap-4"><div><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Start here</p><h2 className="mt-2 text-3xl font-semibold">Four simple ways in</h2></div><Link href="/search" className="sans hidden items-center gap-2 text-sm font-bold text-[var(--muted)] sm:flex">Search everything <Search size={15}/></Link></div>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({href, icon: Icon, eyebrow, title, text}) => <Link href={href} key={href} className="start-card panel group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
        <div className="flex items-start justify-between"><span className="grid size-9 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]"><Icon size={18}/></span><ArrowUpRight size={16} className="text-[var(--faint)] transition group-hover:text-[var(--accent)]"/></div>
        <p className="sans mt-7 text-[10px] font-black uppercase tracking-[.16em] text-[var(--faint)]">{eyebrow}</p>
        <h3 className="mt-1 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
      </Link>)}
    </div>
  </section>;
}
