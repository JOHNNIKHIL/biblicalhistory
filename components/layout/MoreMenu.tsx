"use client";

import Link from "next/link";
import { ChevronDown, Users, Crown, Landmark, Swords, Network, LibraryBig, ScrollText, BookMarked } from "lucide-react";
import { useState } from "react";

const items = [
  ["People", "/people", Users],
  ["Kingdoms", "/kingdoms", Crown],
  ["Evidence", "/evidence", Landmark],
  ["Events", "/events", Swords],
  ["Connections", "/connections", Network],
  ["Canon", "/canon", LibraryBig],
  ["Extended Scripture", "/extended", ScrollText],
  ["Bible Books", "/books", BookMarked],
] as const;

export default function MoreMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(v => !v)} className="nav-item flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-semibold" aria-expanded={open}>
        More <ChevronDown size={14} className={open ? "rotate-180 transition" : "transition"}/>
      </button>
      {open && <>
        <button className="fixed inset-0 z-40 cursor-default" aria-label="Close menu" onClick={() => setOpen(false)} />
        <div className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-2xl">
          <p className="px-3 pb-2 pt-2 font-sans text-[10px] font-black uppercase tracking-[.18em] text-[var(--faint)]">Reference layers</p>
          <div className="grid grid-cols-2 gap-1">
            {items.map(([label, href, Icon]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="nav-menu-item rounded-xl p-3">
              <Icon size={17} className="text-[var(--accent)]"/>
              <span className="mt-2 block text-xs font-semibold leading-4">{label}</span>
            </Link>)}
          </div>
        </div>
      </>}
    </div>
  );
}
