import Header from "../../../components/layout/Header";
import StoryHeader from "../../../components/story/StoryHeader";
import StoryBody from "../../../components/story/StoryBody";
import StoryMeta from "../../../components/story/StoryMeta";
import { stories, storyMap } from "../../../content/stories";
import Link from "next/link";

export function generateStaticParams() {
  return stories.map(s => ({ slug: s.slug }));
}

export default async function StoryPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const story = storyMap[slug];

  if (!story) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-24">
          <h1 className="text-4xl">Story not found</h1>
        </main>
      </>
    );
  }

  const i = stories.findIndex(s => s.slug === slug);
  const prev = stories[i - 1];
  const next = stories[i + 1];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-12 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,820px)_280px]">
          <article>
            <StoryHeader story={story} />
            <div className="mt-12"><StoryBody sections={story.sections} /></div>
            <div className="sans mt-14 flex justify-between gap-6 border-t border-stone-200 pt-7 text-sm">
              {prev ? <Link href={"/story/" + prev.slug}>← {prev.title}</Link> : <span />}
              {next ? <Link href={"/story/" + next.slug} className="text-right">{next.title} →</Link> : null}
            </div>
          </article>
          <StoryMeta story={story} />
        </div>
      </main>
    </>
  );
}