import Badge from "../ui/Badge";

export default function StoryHeader({ story }: { story: any }) {
  return (
    <>
      <Badge>{story.chapter ?? story.category ?? "Biblical History"}</Badge>
      <p className="sans mt-5 text-sm text-stone-500">
        {story.date ?? "Historical context"}{story.location ? ` · ${story.location}` : ""}
      </p>
      <h1 className="mt-3 text-5xl font-semibold leading-[1.05] md:text-6xl">{story.title}</h1>
      <p className="mt-6 max-w-3xl text-xl leading-8 text-stone-600">
        {story.subtitle ?? story.summary ?? ""}
      </p>
    </>
  );
}
