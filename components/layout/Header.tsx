import Link from "next/link";

export default function Header() {
  return (
    <header className="sans sticky top-0 z-20 border-b border-stone-200/80 bg-[#faf8f3]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-bold tracking-[.12em]">BIBLICAL HISTORY</Link>
        <nav className="flex gap-6 text-sm text-stone-600">
          <Link href="/">Journey</Link>
          <Link href="/story/creation">Start at Genesis</Link>
        </nav>
      </div>
    </header>
  );
}