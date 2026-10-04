import Link from "next/link";
import Header from "../../components/layout/Header";
import { bibleBooks } from "../../content/bible/books";

const highlights: Record<string, string[]> = {
  genesis: ["Creation", "The Fall", "Flood", "Abrahamic covenant", "Joseph in Egypt"],
  exodus: ["Moses", "Passover", "Exodus", "Sinai covenant", "Tabernacle"],
  leviticus: ["Sacrifice", "Priesthood", "Holiness", "Purity", "Festivals"],
  numbers: ["Wilderness", "Census", "Rebellion", "Balaam", "Moab"],
  deuteronomy: ["Moses' speeches", "Covenant renewal", "Law", "Moab", "Moses' death"],
  joshua: ["Jordan", "Jericho", "Settlement", "Land allotment", "Covenant renewal"],
  judges: ["Othniel", "Deborah", "Gideon", "Jephthah", "Samson"],
  "1-samuel": ["Samuel", "Saul", "David", "Goliath", "The rise of kingship"],
  "2-samuel": ["David's reign", "Jerusalem", "Davidic covenant", "Absalom", "David's final years"],
  "1-kings": ["Solomon", "Temple", "Divided kingdom", "Elijah", "Ahab"],
  "2-kings": ["Elisha", "Fall of Samaria", "Hezekiah", "Josiah", "Fall of Jerusalem"],
  isaiah: ["Isaiah's calling", "Immanuel", "Assyria", "Servant passages", "New creation"],
  jeremiah: ["Jeremiah's call", "Judah's crisis", "New covenant", "Jerusalem's fall", "Exile"],
  ezekiel: ["Visions", "Temple", "Watchman", "Dry bones", "Restoration"],
  daniel: ["Exile", "Nebuchadnezzar", "Fiery furnace", "Daniel in the lions' den", "Visions"],
  matthew: ["Birth of Jesus", "Sermon on the Mount", "Parables", "Passion", "Resurrection"],
  mark: ["John the Baptist", "Galilean ministry", "Parables", "Passion", "Resurrection"],
  luke: ["Birth narratives", "Ministry", "Parables", "Jerusalem", "Resurrection"],
  john: ["Prologue", "Signs", "I AM sayings", "Passion", "Resurrection"],
  acts: ["Pentecost", "Jerusalem church", "Paul's missions", "Council of Jerusalem", "Rome"],
};

export default async function BiblePage({ searchParams }: { searchParams: Promise<{ book?: string }> }) {
  const { book: selectedSlug } = await searchParams;
  const selected = bibleBooks.find(b => b.slug === selectedSlug) ?? bibleBooks[0];
  const selectedHighlights = highlights[selected.slug] ?? [];
  return <div className="shell"><Header/><main className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6">
    <div className="max-w-4xl"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Bible Explorer</p><h1 className="mt-3 text-5xl font-semibold">Explore the Bible, book by book</h1><p className="mt-4 text-lg leading-8 text-[var(--muted)]">A structured reading layer connecting books and chapters with the historical encyclopedia. The core library now covers all 66 books of the Protestant canon. Use Canon & Traditions to compare Catholic, Eastern Orthodox, Ethiopian Orthodox and Syriac canonical histories.</p></div>
    <div className="mt-10 grid gap-8 lg:grid-cols-[360px_1fr]">
      <aside className="panel rounded-3xl p-4 lg:sticky lg:top-24 lg:h-fit"><div className="sans px-2 pb-3 text-xs font-black uppercase tracking-[.18em] text-[var(--muted)]">Library</div><div className="space-y-1">{["Old Testament","New Testament"].map(testament=><div key={testament}><p className="sans px-2 py-3 text-xs font-bold uppercase tracking-[.15em] text-[var(--accent)]">{testament}</p>{bibleBooks.filter(b=>b.testament===testament).map(b=><Link key={b.slug} href={`/bible?book=${b.slug}`} className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${selected.slug===b.slug ? "bg-[var(--accent-soft)] font-bold" : "hover:bg-[var(--surface-2)]"}`}><span>{b.name}</span><span className="sans text-[11px] text-[var(--muted)]">{b.chapters}</span></Link>)}</div>)}</div></aside>
      <section className="min-w-0"><div className="panel rounded-3xl p-6 sm:p-9"><div className="flex flex-wrap items-start justify-between gap-5"><div><p className="sans text-xs font-black uppercase tracking-[.18em] text-[var(--accent)]">{selected.testament} · {selected.section}</p><h2 className="mt-2 text-4xl font-semibold">{selected.name}</h2><p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Browse the {selected.name} chapter structure, then jump to the existing historical guide for wider context.</p></div>{selected.guideSlug ? <Link href={`/story/${selected.guideSlug}`} className="sans rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-white">Open guide</Link> : <Link href="/canon" className="sans rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-white">Canon context</Link>}</div>
      <div className="mt-9"><div className="flex items-end justify-between"><div><h3 className="text-xl font-semibold">Chapters</h3><p className="sans mt-1 text-xs text-[var(--muted)]">{selected.chapters} chapters</p></div></div><div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">{Array.from({length:selected.chapters},(_,i)=>i+1).map(ch=><Link key={ch} title={`${selected.name} ${ch}`} href={`/bible/${selected.slug}/${ch}`} className="sans rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-2 py-3 text-center text-sm font-semibold transition hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]">{ch}</Link>)}</div></div>
      {selectedHighlights.length ? <div className="mt-10 border-t border-[var(--border)] pt-7"><h3 className="text-xl font-semibold">Key chapters & themes to explore</h3><div className="mt-4 flex flex-wrap gap-2">{selectedHighlights.map(x=><span key={x} className="sans rounded-full bg-[var(--surface-2)] px-3 py-2 text-xs font-semibold text-[var(--muted)]">{x}</span>)}</div></div> : null}
      <div className="mt-10 rounded-2xl bg-[var(--surface-2)] p-5"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--accent)]">Canon-aware study</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Chapter pages are knowledge nodes with historical context and external Bible references. Canon differences are documented separately so the book list is not silently treated as universal.</p><Link href="/canon" className="sans mt-3 inline-block text-sm font-bold text-[var(--accent)]">Compare canonical traditions →</Link></div>
      </div></section>
    </div>
  </main></div>;
}
