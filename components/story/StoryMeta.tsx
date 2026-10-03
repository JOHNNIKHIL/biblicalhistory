export default function StoryMeta({ story }: { story: any }) {
  return (
    <aside className="sans space-y-5 rounded-2xl border border-stone-200 bg-white p-6 lg:sticky lg:top-24 lg:self-start">
      <div>
        <b>Bible references</b>
        <div className="mt-2 text-sm leading-6 text-stone-600">{story.bible.join(" · ")}</div>
      </div>
      <div>
        <b>People</b>
        <div className="mt-2 text-sm leading-6 text-stone-600">{story.people.join(" · ")}</div>
      </div>
      <div>
        <b>Topics</b>
        <div className="mt-2 text-sm leading-6 text-stone-600">{story.topics.join(" · ")}</div>
      </div>
    </aside>
  );
}