import Header from "../../components/layout/Header";
import Link from "next/link";
import { stories } from "../../content/stories";

export default function BooksPage() {
  const books = stories.filter((s:any)=>String(s.slug).startsWith("book-"));
  return <div className="shell"><Header/><main className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Study library</p><h1 className="mt-3 text-5xl font-semibold">Bible Book Guides</h1><p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--muted)]">Book-by-book entries designed to sit beside the historical timeline, people, places and evidence layers.</p><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{books.map((s:any)=><Link key={s.slug} href={`/story/${s.slug}`} className="panel rounded-2xl p-5 hover:border-[var(--accent)]"><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{s.category}</p><h2 className="mt-2 text-xl font-semibold">{s.title}</h2><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{s.summary}</p></Link>)}</div></main></div>;
}
