import Header from "../../../components/layout/Header";
import StoryHeader from "../../../components/story/StoryHeader";
import StoryBody from "../../../components/story/StoryBody";
import StoryMeta from "../../../components/story/StoryMeta";
import { stories, storyMap } from "../../../content/stories";
import Link from "next/link";

export function generateStaticParams() { return stories.map(s => ({ slug: s.slug })); }

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = storyMap[slug];
  if (!story) return <><Header/><main className="mx-auto max-w-4xl px-5 py-24"><h1 className="text-4xl">Story not found</h1><Link className="sans mt-5 inline-block text-[var(--accent)]" href="/">← Return to encyclopedia</Link></main></>;
  const i = stories.findIndex(s => s.slug === slug);
  const prev = stories[i - 1], next = stories[i + 1];
  return <div className="shell"><Header/><main className="mx-auto max-w-[1500px] px-4 py-8 sm:px-6 lg:py-14"><div className="grid gap-10 lg:grid-cols-[minmax(0,820px)_300px] lg:justify-center"><article><StoryHeader story={story}/><div className="mt-10"><StoryBody sections={story.sections}/></div><nav className="sans mt-14 grid grid-cols-2 gap-3 border-t border-[var(--border)] pt-6 text-sm">{prev?<Link className="panel rounded-xl p-4 hover:border-[var(--accent)]" href={`/story/${prev.slug}`}><span className="block text-xs text-[var(--muted)]">Previous</span><span className="mt-1 block font-semibold">← {prev.title}</span></Link>:<span/>}{next?<Link className="panel rounded-xl p-4 text-right hover:border-[var(--accent)]" href={`/story/${next.slug}`}><span className="block text-xs text-[var(--muted)]">Next</span><span className="mt-1 block font-semibold">{next.title} →</span></Link>:null}</nav></article><StoryMeta story={story}/></div></main></div>;
}
