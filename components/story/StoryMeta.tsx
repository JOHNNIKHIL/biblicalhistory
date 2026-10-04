import Link from "next/link";

export default function StoryMeta({ story }: { story: any }) {
  const groups = [
    ["Bible references", story.bible ?? []],
    ["People", story.people ?? []],
    ["Topics", story.topics ?? []],
  ];
  return <aside className="sans space-y-5 lg:sticky lg:top-24 lg:self-start">
    <div className="panel rounded-2xl p-5"><p className="text-xs font-black uppercase tracking-[.18em] text-[var(--accent)]">Entry information</p>{groups.map(([label, value]: any) => <div key={label} className="mt-5 border-t border-[var(--border)] pt-4"><b className="text-sm">{label}</b><div className="mt-2 text-sm leading-6 text-[var(--muted)]">{Array.isArray(value) && value.length ? value.join(" · ") : "Not specified"}</div></div>)}</div>
    <div className="panel-muted rounded-2xl p-5"><p className="text-sm font-bold">Keep exploring</p><p className="mt-2 text-sm leading-6 text-[var(--muted)]">Use the navigation to branch into Bible books, places, the historical timeline and related evidence.</p><Link href="/" className="mt-4 inline-block text-sm font-bold text-[var(--accent)]">Back to encyclopedia →</Link></div>
  </aside>;
}
