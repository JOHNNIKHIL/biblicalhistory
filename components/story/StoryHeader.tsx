import Badge from "../ui/Badge";

export default function StoryHeader({ story }: { story: any }) {
  return <header className="border-b border-[var(--border)] pb-8">
    <Badge>{story.chapter ?? story.category ?? "Biblical History"}</Badge>
    <p className="sans mt-5 text-xs font-bold uppercase tracking-[.16em] text-[var(--muted)]">{story.date ?? "Historical context"}{story.location ? ` · ${story.location}` : ""}</p>
    <h1 className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">{story.title}</h1>
    <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)] md:text-xl">{story.subtitle ?? story.summary ?? ""}</p>
  </header>;
}
