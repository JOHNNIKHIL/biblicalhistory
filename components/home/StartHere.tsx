import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, MapPinned, Users } from "lucide-react";

const cards = [
  { href: "/books", icon: BookOpen, title: "Books", text: "Explore the complete 66-book core and the wider Catholic, Orthodox and Ethiopian library." },
  { href: "/timeline", icon: Clock3, title: "Timeline", text: "Move through the major historical turning points from the ancient Near East to Rome." },
  { href: "/places", icon: MapPinned, title: "Atlas", text: "See the cities, regions, kingdoms and archaeological sites behind the text." },
  { href: "/people", icon: Users, title: "People", text: "Follow rulers, prophets, patriarchs, apostles and other figures across books." },
];

export default function StartHere() {
  return <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 lg:py-16">
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"><div><p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">Start here</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Choose one doorway.</h2></div><p className="max-w-lg text-sm leading-6 text-[var(--muted)] sm:text-right">Everything connects underneath. You only need one starting point.</p></div>
    <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{cards.map(({href,icon:Icon,title,text})=><Link key={href} href={href} className="panel group rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"><div className="flex items-center justify-between"><Icon size={18} className="text-[var(--accent)]"/><ArrowRight size={15} className="text-[var(--faint)] transition group-hover:translate-x-1 group-hover:text-[var(--accent)]"/></div><h3 className="mt-8 text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{text}</p></Link>)}</div>
  </section>;
}
