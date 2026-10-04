import Link from "next/link";
import { BookOpen, Compass, Map, Search, Clock3 } from "lucide-react";
import ThemeSwitcher from "./ThemeSwitcher";
import MoreMenu from "./MoreMenu";
import MobileNav from "./MobileNav";

export default function Header() {
  return <>
    <header className="topbar sans sticky top-0 z-50 border-b">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center gap-2 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--accent)] text-white shadow-sm"><BookOpen size={18}/></span>
          <span className="hidden min-w-0 sm:block">
            <span className="block text-sm font-black tracking-[.16em]">BIBLICAL HISTORY</span>
            <span className="block text-[10px] uppercase tracking-[.18em] text-[var(--muted)]">Encyclopedia · Atlas · Timeline</span>
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          <Link className="nav-item rounded-xl px-3 py-2 text-sm font-semibold" href="/"><Compass size={15} className="mr-1.5 inline"/>Explore</Link>
          <Link className="nav-item rounded-xl px-3 py-2 text-sm font-semibold" href="/timeline"><Clock3 size={15} className="mr-1.5 inline"/>Timeline</Link>
          <Link className="nav-item rounded-xl px-3 py-2 text-sm font-semibold" href="/bible"><BookOpen size={15} className="mr-1.5 inline"/>Bible</Link>
          <Link className="nav-item rounded-xl px-3 py-2 text-sm font-semibold" href="/places"><Map size={15} className="mr-1.5 inline"/>Atlas</Link>
          <MoreMenu />
        </nav>
        <Link href="/search" className="nav-icon rounded-xl p-2.5" title="Search" aria-label="Search"><Search size={18}/></Link>
        <ThemeSwitcher />
      </div>
    </header>
    <MobileNav />
  </>;
}
