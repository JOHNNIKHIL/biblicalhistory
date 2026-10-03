export default function Hero() {
  return (
    <section className="border-b border-stone-200 bg-[#eee5d8]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
        <p className="sans text-xs font-bold uppercase tracking-[.28em] text-[#7b3f24]">
          A Biblical History Encyclopedia
        </p>
        <h1 className="mt-5 max-w-5xl text-5xl font-semibold leading-[1.02] md:text-7xl">
          The story begins<br />with the beginning.
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-8 text-stone-600">
          A detailed journey from Creation, Adam and Eve, Noah and Abraham through
          Exodus, Israel&apos;s kingdoms, exile, the Second Temple, Jesus and the early church.
        </p>
      </div>
    </section>
  );
}