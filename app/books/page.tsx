import Header from "../../components/layout/Header";
import Link from "next/link";
import { bibleBooks } from "../../content/bible/books";
import { canonComparison } from "../../content/bible/canons";
import { extendedScriptureBooks } from "../../content/extended/books";
import { deepBookMap } from "../../content/bible/deep";

const statusFor = (name: string) => canonComparison.find(row => row.name === name);
const sectionOrder = ["Torah", "Historical Books", "Wisdom & Poetry", "Prophets", "Gospels", "History", "Pauline Epistles", "Pastoral Epistles", "General Epistles", "Apocalyptic"];

function BookCard({ book }: { book: (typeof bibleBooks)[number] }) {
  const status = statusFor(book.name);
  const deep = Boolean(deepBookMap[book.slug]);
  return <Link href={`/books/${book.slug}`} className="group panel rounded-2xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
    <div className="flex items-start justify-between gap-3">
      <p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{book.section}</p>
      {deep ? <span className="sans rounded-full bg-[var(--accent)] px-2 py-1 text-[9px] font-black uppercase tracking-wider text-white">Deep guide</span> : null}
    </div>
    <h2 className="mt-2 text-xl font-semibold group-hover:text-[var(--accent)]">{book.name}</h2>
    <p className="mt-1 sans text-[10px] font-bold uppercase tracking-[.12em] text-[var(--muted)]">{book.chapters} {book.chapters === 1 ? "chapter" : "chapters"}</p>
    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{deep ? deepBookMap[book.slug].subtitle : (book.canonicalNotes ?? "Explore the book, its chapters and connected historical material.")}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      <span className="sans rounded-full bg-[var(--surface-2)] px-2.5 py-1.5 text-[10px] font-semibold">{book.testament}</span>
      {status ? <span className="sans rounded-full bg-[var(--surface-2)] px-2.5 py-1.5 text-[10px] font-semibold">{status.catholic === "canonical" ? "Shared Christian canon" : status.catholic === "deuterocanonical" ? "Catholic deuterocanonical" : "Shared core"}</span> : null}
    </div>
  </Link>;
}

export default function BooksPage() {
  return <div className="shell"><Header/><main className="mx-auto max-w-[1400px] px-4 py-10 sm:px-6 sm:py-14">
    <header className="max-w-4xl">
      <p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Study library</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight sm:text-6xl">The Bible, book by book.</h1>
      <p className="mt-5 text-lg leading-8 text-[var(--muted)]">A complete 66-book core plus the Catholic, Orthodox and Ethiopian materials already present in the encyclopedia. Open a book to study its structure, chapters, history and connections.</p>
      <div className="mt-7 flex flex-wrap gap-2">
        <span className="sans rounded-full border border-[var(--border)] px-3 py-2 text-xs font-bold">66-book core</span>
        <span className="sans rounded-full border border-[var(--border)] px-3 py-2 text-xs font-bold">{extendedScriptureBooks.length} tradition-specific works</span>
        <Link href="/canon" className="sans rounded-full bg-[var(--accent)] px-3 py-2 text-xs font-bold text-white">Compare canons →</Link>
      </div>
    </header>

    <section className="mt-12 space-y-12">
      {sectionOrder.map(section => {
        const sectionBooks = bibleBooks.filter(book => book.section === section).sort((a,b)=>a.order-b.order);
        if (!sectionBooks.length) return null;
        return <section key={section}>
          <div className="flex items-end justify-between gap-4 border-b border-[var(--border)] pb-3">
            <div><p className="sans text-[10px] font-black uppercase tracking-[.2em] text-[var(--accent)]">Bible library</p><h2 className="mt-1 text-2xl font-semibold">{section}</h2></div>
            <span className="sans text-xs font-bold text-[var(--muted)]">{sectionBooks.length} {sectionBooks.length === 1 ? "book" : "books"}</span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{sectionBooks.map(book => <BookCard key={book.slug} book={book}/>)}</div>
        </section>;
      })}
    </section>

    <section className="mt-16 rounded-[2rem] bg-[var(--surface-2)] p-6 sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="sans text-[10px] font-black uppercase tracking-[.2em] text-[var(--accent)]">Beyond the shared 66</p><h2 className="mt-2 text-3xl font-semibold">Tradition-specific Scripture & related texts</h2></div>
        <Link href="/extended" className="sans text-sm font-bold text-[var(--accent)]">Open the extended library →</Link>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">These works are not being treated as a miscellaneous “extra books” pile. Their canonical status varies by tradition, so each is identified according to the tradition that receives or preserves it.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {extendedScriptureBooks.map(book => <Link key={book.slug} href={`/books/${book.slug}`} className="panel rounded-2xl p-4 transition hover:border-[var(--accent)]"><div className="flex items-start justify-between gap-3"><p className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{book.family}</p><span className="sans text-[10px] font-bold text-[var(--muted)]">{book.tradition.join(" · ")}</span></div><h3 className="mt-2 text-lg font-semibold">{book.name}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{book.summary}</p></Link>)}
      </div>
    </section>
  </main></div>;
}
