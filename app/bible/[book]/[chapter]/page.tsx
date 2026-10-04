import Link from "next/link";
import Header from "../../../../components/layout/Header";
import { bibleBooks } from "../../../../content/bible/books";
import { getChapterMeta } from "../../../../content/bible/chapters";
import { storyMap } from "../../../../content/stories";

export function generateStaticParams() {
  return bibleBooks.flatMap(book => Array.from({ length: book.chapters }, (_, i) => ({ book: book.slug, chapter: String(i + 1) })));
}

export default async function BibleChapterPage({ params }: { params: Promise<{ book: string; chapter: string }> }) {
  const { book: bookSlug, chapter: chapterParam } = await params;
  const book = bibleBooks.find(item => item.slug === bookSlug);
  const chapter = Number(chapterParam);
  if (!book || !Number.isInteger(chapter) || chapter < 1 || chapter > book.chapters) return <div className="shell"><Header/><main className="mx-auto max-w-3xl px-6 py-24"><h1 className="text-4xl font-semibold">Chapter not found</h1><Link className="sans mt-6 inline-block text-sm font-bold text-[var(--accent)]" href="/bible">Return to Bible Explorer →</Link></main></div>;

  const meta = getChapterMeta(book.slug, chapter, book.name);
  const previous = chapter > 1 ? chapter - 1 : null;
  const next = chapter < book.chapters ? chapter + 1 : null;
  const related = (meta.relatedStories ?? []).map(slug => storyMap[slug]).filter(Boolean);
  const bibleChapterLabel = `${book.name} ${chapter}`;
  const bibleGatewayUrl = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(bibleChapterLabel)}&version=NRSVUE`;

  return <div className="shell"><Header/><main className="mx-auto max-w-[1180px] px-5 py-10 sm:px-6 sm:py-14">
    <div className="sans flex flex-wrap items-center gap-2 text-xs font-bold text-[var(--muted)]"><Link href="/bible" className="hover:text-[var(--text)]">Bible</Link><span>/</span><Link href={`/bible?book=${book.slug}`} className="hover:text-[var(--text)]">{book.name}</Link><span>/</span><span className="text-[var(--accent)]">Chapter {chapter}</span></div>
    <header className="mt-8 max-w-4xl"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">{book.testament} · {book.section}</p><h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">{meta.title}</h1><p className="mt-5 text-xl leading-9 text-[var(--muted)]">{meta.summary}</p></header>

    <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <article className="space-y-6">
        <section className="panel rounded-3xl p-6 sm:p-9"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]">Chapter overview</p><h2 className="mt-3 text-2xl font-semibold">Read {bibleChapterLabel}</h2><p className="mt-3 leading-8 text-[var(--muted)]">This page is the chapter-level knowledge node for {bibleChapterLabel}. It deliberately does not reproduce a copyrighted Bible translation. Use an external Bible provider for the full text, then return here for historical context, related people, places and research connections.</p><a href={bibleGatewayUrl} target="_blank" rel="noreferrer" className="sans mt-5 inline-flex rounded-xl bg-[var(--accent)] px-4 py-3 text-sm font-bold text-white">Read the full chapter externally ↗</a></section>
        <section className="panel rounded-3xl p-6 sm:p-9"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]">Historical lens</p><h2 className="mt-3 text-2xl font-semibold">What to investigate</h2><p className="mt-4 text-lg leading-8 text-[var(--muted)]">{meta.historicalLens}</p></section>
        {related.length ? <section className="panel rounded-3xl p-6 sm:p-9"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]">Connected encyclopedia entries</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{related.map((story:any)=><Link key={story.slug} href={`/story/${story.slug}`} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)]"><span className="sans text-xs font-bold uppercase tracking-wider text-[var(--accent)]">{story.category ?? "Encyclopedia"}</span><h3 className="mt-1 text-lg font-semibold">{story.title}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{story.summary ?? story.subtitle ?? "Explore the related article."}</p></Link>)}</div></section> : null}
        <section className="panel-muted rounded-3xl p-6 sm:p-9"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]">Themes</p><div className="mt-4 flex flex-wrap gap-2">{meta.themes.map(theme=><span key={theme} className="sans rounded-full bg-[var(--surface)] px-3 py-2 text-xs font-semibold text-[var(--muted)]">{theme}</span>)}</div></section>
      </article>
      <aside className="space-y-4 lg:sticky lg:top-24 lg:h-fit"><div className="panel rounded-3xl p-5"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--muted)]">Chapter navigation</p><div className="mt-4 grid grid-cols-2 gap-2">{previous ? <Link href={`/bible/${book.slug}/${previous}`} className="sans rounded-xl border border-[var(--border)] px-3 py-3 text-center text-xs font-bold">← {previous}</Link> : <span/>}{next ? <Link href={`/bible/${book.slug}/${next}`} className="sans rounded-xl border border-[var(--border)] px-3 py-3 text-center text-xs font-bold">{next} →</Link> : <span/>}</div><Link href={`/bible?book=${book.slug}`} className="sans mt-3 block rounded-xl bg-[var(--surface-2)] px-3 py-3 text-center text-xs font-bold">All {book.name} chapters</Link></div><div className="panel rounded-3xl p-5"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--muted)]">Book context</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Step back from this chapter to see the literary structure, historical setting, archaeology and major themes of {book.name}.</p>{book.guideSlug ? <Link href={`/story/${book.guideSlug}`} className="sans mt-4 inline-block text-sm font-bold text-[var(--accent)]">Open {book.name} guide →</Link> : <Link href="/canon" className="sans mt-4 inline-block text-sm font-bold text-[var(--accent)]">View canon context →</Link>}</div></aside>
    </div>
  </main></div>;
}
