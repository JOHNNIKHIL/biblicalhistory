import Link from "next/link";
import { BookOpen, Compass, Map, Search, Clock3, Users, Crown, Landmark } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  return (
    <header className="topbar sans sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--accent)] text-white"><BookOpen size={18}/></span>
          <span className="hidden sm:block">
            <span className="block text-sm font-black tracking-[.16em]">BIBLICAL HISTORY</span>
            <span className="block text-[10px] uppercase tracking-[.2em] text-[var(--muted)]">Encyclopedia · Atlas · Timeline</span>
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 lg:flex">
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/"><Compass size={15} className="mr-2 inline"/>Explore</Link>
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/timeline"><Clock3 size={15} className="mr-2 inline"/>Timeline</Link>
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/people"><Users size={15} className="mr-2 inline"/>People</Link>
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/places"><Map size={15} className="mr-2 inline"/>Places</Link>
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/kingdoms"><Crown size={15} className="mr-2 inline"/>Kingdoms</Link>
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/evidence"><Landmark size={15} className="mr-2 inline"/>Evidence</Link>
          <Link className="soft-link rounded-lg px-3 py-2 text-sm" href="/books"><BookOpen size={15} className="mr-2 inline"/>Bible Books</Link>
        </nav>
        <Link href="/search" className="soft-link rounded-xl p-2" title="Search"><Search size={18}/></Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}
