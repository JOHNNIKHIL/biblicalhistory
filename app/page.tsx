import Timeline from "../components/Timeline";
import { Compass, Layers3, ScrollText, ShieldQuestion } from "lucide-react";

export default function Home() {
  return (
    <div className="paper-grid grain min-h-screen">
      <header className="border-b border-[#d8cdbb] bg-[#18212a] text-[#f6efe3]">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5">
              <Compass size={23} />
            </div>
            <div>
              <div className="sans text-[10px] font-bold uppercase tracking-[.28em] text-[#d8bd8e]">
                The Biblical World
              </div>
              <h1 className="text-lg font-bold sm:text-xl">
                Historical Master Timeline
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section className="border-b border-[#d8cdbb] bg-[#efe7d7]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20">
          <div className="max-w-4xl">
            <div className="sans text-xs font-bold uppercase tracking-[.24em] text-[#8b5e34]">
              A living historical atlas
            </div>

            <h2 className="mt-4 text-5xl font-bold leading-[.98] tracking-tight sm:text-7xl">
              The Bible in its
              <br />
              <span className="text-[#8b5e34]">historical world.</span>
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700 sm:text-xl">
              A chronological journey placing biblical narratives beside
              archaeology, inscriptions, imperial records and ancient
              historical sources.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto grid max-w-7xl gap-0 sm:grid-cols-3">
          <Metric icon={<Layers3 size={21} />} value="V5" label="Iron Age expansion" />
          <Metric icon={<ScrollText size={21} />} value="15+" label="new research events" />
          <Metric icon={<ShieldQuestion size={21} />} value="JSON" label="validated data layer" />
        </div>
      </section>

      <Timeline />

      <footer className="border-t border-[#d8cdbb] bg-[#18212a] text-[#d7d1c7]">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="sans text-xs font-bold uppercase tracking-[.2em] text-[#d8bd8e]">
            Research project
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#aaa49b]">
            Historical claims are presented with explicit evidence layers and
            caution notes. Biblical texts, archaeology, inscriptions and later
            historical sources are not assumed to answer identical questions.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Metric({
  icon,
  value,
  label
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-[#e4dbce] px-5 py-5 sm:border-b-0 sm:border-r">
      <div className="text-[#8b5e34]">{icon}</div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="sans text-xs uppercase tracking-wider text-stone-500">
          {label}
        </div>
      </div>
    </div>
  );
}
