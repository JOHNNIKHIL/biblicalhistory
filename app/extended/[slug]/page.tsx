import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/layout/Header";
import { extendedScriptureBooks, extendedBookMap } from "../../../content/extended/books";

export function generateStaticParams() { return extendedScriptureBooks.map(book => ({ slug: book.slug })); }

export default async function ExtendedBookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = extendedBookMap[slug];
  if (!book) notFound();
  return <div className="shell"><Header/><main className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6">
    <Link href="/extended" className="sans text-sm font-bold text-[var(--accent)]">← Extended Scripture Library</Link>
    <header className="mt-7"><div className="flex flex-wrap gap-2">{book.tradition.map(t=><span key={t} className="sans rounded-full border border-[var(--border)] px-3 py-1 text-xs font-bold">{t}</span>)}</div><p className="sans mt-5 text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">{book.family}</p><h1 className="mt-2 text-5xl font-semibold leading-tight">{book.name}</h1><p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--muted)]">{book.summary}</p></header>
    <section className="mt-10 grid gap-4 md:grid-cols-3"><div className="panel rounded-3xl p-5"><p className="sans text-xs font-bold uppercase tracking-[.14em] text-[var(--muted)]">Structure</p><p className="mt-2 font-semibold">{book.approximateStructure ?? "Varies by edition"}</p></div><div className="panel rounded-3xl p-5"><p className="sans text-xs font-bold uppercase tracking-[.14em] text-[var(--muted)]">Historical period</p><p className="mt-2 font-semibold">{book.historicalPeriod}</p></div><div className="panel rounded-3xl p-5"><p className="sans text-xs font-bold uppercase tracking-[.14em] text-[var(--muted)]">Tradition status</p><p className="mt-2 font-semibold">{book.tradition.join(" · ")}</p></div></section>
    <section className="mt-8 grid gap-6 lg:grid-cols-2"><article className="panel rounded-3xl p-6"><h2 className="text-2xl font-semibold">Historical & literary lens</h2><p className="mt-4 text-sm leading-7 text-[var(--muted)]">{book.historicalLens}</p></article><article className="panel rounded-3xl p-6"><h2 className="text-2xl font-semibold">Important notes</h2><ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--muted)]">{book.notes.map(note=><li key={note}>• {note}</li>)}</ul></article></section>
    <section className="mt-8 panel rounded-3xl p-6"><h2 className="text-2xl font-semibold">Connections to the wider encyclopedia</h2><div className="mt-5 flex flex-wrap gap-2">{book.connections.map(c=><span key={c} className="sans rounded-full bg-[var(--surface-2)] px-3 py-2 text-xs font-bold">{c}</span>)}</div></section>
    <section className="mt-8 rounded-3xl bg-[var(--surface-2)] p-6"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]">How to study it here</p><p className="mt-2 text-sm leading-7 text-[var(--muted)]">Use the Canon Explorer to compare this work across traditions, then follow its people, places, kingdoms, events and archaeological evidence through the encyclopedia's connected layers. Full Bible translations are not reproduced in this application.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/canon" className="soft-link rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-bold">Compare canons</Link><Link href="/connections" className="soft-link rounded-xl border border-[var(--border)] px-4 py-2 text-sm font-bold">Explore connections</Link></div></section>
  </main></div>;
}
