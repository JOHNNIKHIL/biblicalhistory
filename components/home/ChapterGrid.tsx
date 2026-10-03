import Link from "next/link";
import { chapters } from "../../content/chapters";

export default function ChapterGrid() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16">
      <p className="sans text-xs font-bold uppercase tracking-[.2em] text-[#7b3f24]">The journey</p>
      <h2 className="mt-2 text-3xl font-semibold">Eleven chapters of the biblical story</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((c, i) => (
          <div key={c.id} className="rounded-2xl border border-stone-200 bg-white p-6">
            <p className="sans text-xs font-bold text-stone-400">PART {i + 1}</p>
            <h3 className="mt-2 text-2xl font-semibold">{c.title}</h3>
            <p className="mt-2 leading-7 text-stone-600">{c.description}</p>
            {c.stories[0] && (
              <Link href={"/story/" + c.stories[0]} className="sans mt-5 inline-block text-sm font-bold text-[#7b3f24]">
                Begin →
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}