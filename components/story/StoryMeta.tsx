export default function StoryMeta({ story }: { story: any }) {
  const bible = story.bible ?? [];
  const people = story.people ?? [];
  const topics = story.topics ?? [];

  return (
    <aside className="sans space-y-5 rounded-2xl border border-stone-200 bg-white p-6 lg:sticky lg:top-24 lg:self-start">
      <div>
        <b>Bible references</b>
        <div className="mt-2 text-sm leading-6 text-stone-600">
          {bible.length ? bible.join(" · ") : "See the article text for references and context."}
        </div>
      </div>
      <div>
        <b>People</b>
        <div className="mt-2 text-sm leading-6 text-stone-600">
          {people.length ? people.join(" · ") : "Not specified"}
        </div>
      </div>
      <div>
        <b>Topics</b>
        <div className="mt-2 text-sm leading-6 text-stone-600">
          {topics.length ? topics.join(" · ") : story.category ?? "Biblical history"}
        </div>
      </div>
    </aside>
  );
}
