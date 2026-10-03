import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import ChapterGrid from "../components/home/ChapterGrid";
import Link from "next/link";

export default function Home() {
  const starts = ["creation","adam-and-eve","the-fall","cain-and-abel","noah","the-flood","tower-of-babel"];
  return (
    <>
      <Header />
      <Hero />
      <ChapterGrid />
      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="border-t border-stone-200 pt-12">
          <h2 className="text-3xl font-semibold">Start with Genesis</h2>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-stone-600">
            These are full reference articles, not short timeline cards. Major stories
            are designed to grow into several pages of detailed reading.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {starts.map(s => (
              <Link key={s} href={"/story/" + s} className="sans rounded-full border border-stone-300 bg-white px-4 py-2 text-sm">
                {s.replaceAll("-", " ")}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}