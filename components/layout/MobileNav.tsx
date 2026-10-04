"use client";

import Link from "next/link";
import { BookOpen, Clock3, Compass, Map, MoreHorizontal, Users, Crown, Landmark, Swords, Network, LibraryBig, ScrollText, BookMarked } from "lucide-react";
import { useState } from "react";

const moreItems = [
  ["People", "/people", Users], ["Kingdoms", "/kingdoms", Crown], ["Evidence", "/evidence", Landmark], ["Events", "/events", Swords],
  ["Connections", "/connections", Network], ["Canon", "/canon", LibraryBig], ["Extended", "/extended", ScrollText], ["Bible Books", "/books", BookMarked],
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return <>
    {open && <div className="mobile-more-panel fixed inset-x-3 bottom-[76px] z-[70] rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-3 shadow-2xl sm:hidden">
      <div className="grid grid-cols-4 gap-1">
        {moreItems.map(([label, href, Icon]) => <Link href={href} key={href} onClick={() => setOpen(false)} className="rounded-2xl p-3 text-center hover:bg-[var(--surface-2)]">
          <Icon size={18} className="mx-auto text-[var(--accent)]"/><span className="mt-2 block font-sans text-[10px] font-bold text-[var(--muted)]">{label}</span>
        </Link>)}
      </div>
    </div>}
    <nav className="mobile-bottom-nav fixed inset-x-3 bottom-3 z-[60] grid grid-cols-5 rounded-2xl border border-[var(--border)] bg-[var(--header)] p-1.5 shadow-2xl backdrop-blur-xl sm:hidden" aria-label="Mobile navigation">
      <Link href="/" className="mobile-nav-link"><Compass size={18}/><span>Explore</span></Link>
      <Link href="/timeline" className="mobile-nav-link"><Clock3 size={18}/><span>Timeline</span></Link>
      <Link href="/bible" className="mobile-nav-link"><BookOpen size={18}/><span>Bible</span></Link>
      <Link href="/places" className="mobile-nav-link"><Map size={18}/><span>Atlas</span></Link>
      <button onClick={() => setOpen(v => !v)} className={open ? "mobile-nav-link active" : "mobile-nav-link"}><MoreHorizontal size={18}/><span>More</span></button>
    </nav>
  </>;
}
