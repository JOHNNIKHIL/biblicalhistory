import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Map, Users } from "lucide-react";

const cards = [
  { href: "/timeline", icon: Clock3, number: "01", title: "Walk through history", text: "Start with the major turning points and see how the Biblical world changes over time." },
  { href: "/bible", icon: BookOpen, number: "02", title: "Open the Scriptures", text: "Move from any book to its chapters, historical setting and connected material." },
  { href: "/places", icon: Map, number: "03", title: "See the ancient world", text: "Discover the cities, regions and archaeological sites where the story unfolds." },
  { href: "/people", icon: Users, number: "04", title: "Follow the people", text: "Trace prophets, rulers, apostles and other figures through their world." },
];

export default function StartHere() {
  return <section className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:py-20">
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div><p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">Choose your path</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Four simple ways in.</h2></div>
      <p className="max-w-md text-sm leading-6 text-[var(--muted)] sm:text-right">You do not need to understand the whole library before you begin. Pick one thread and follow it.</p>
    </div>
    <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
      {cards.map(({href, icon: Icon, number, title, text}) => <Link href={href} key={href} className="start-card panel group rounded-[1.5rem] p-5 transition duration-200 hover:-translate-y-1 hover:border-[var(--accent)]">
        <div className="flex items-start justify-between"><span className="sans text-[10px] font-black tracking-[.16em] text-[var(--accent)]">{number}</span><Icon size={19} className="text-[var(--muted)] transition group-hover:text-[var(--accent)]" /></div>
        <h3 className="mt-12 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p>
        <span className="mt-5 inline-flex items-center gap-1 sans text-xs font-bold text-[var(--accent)]">Explore <ArrowRight size={13} className="transition group-hover:translate-x-1" /></span>
      </Link>)}
    </div>
  </section>;
}
