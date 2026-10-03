'use client';

import { useMemo, useState } from "react";
import { BookOpen, ExternalLink, MapPin, Search, ShieldCheck, X } from "lucide-react";
import { events, eras, sourceCatalog } from "../data/timeline-v5";
import type { Event, Evidence, Confidence } from "../data/types";

const evidenceStyle: Record<Evidence, string> = {
  Biblical: "bg-amber-50 text-amber-900 border-amber-200",
  Archaeological: "bg-stone-100 text-stone-800 border-stone-300",
  Epigraphic: "bg-sky-50 text-sky-900 border-sky-200",
  Imperial: "bg-slate-100 text-slate-800 border-slate-300",
  Classical: "bg-violet-50 text-violet-900 border-violet-200",
  Material: "bg-emerald-50 text-emerald-900 border-emerald-200",
  Textual: "bg-rose-50 text-rose-900 border-rose-200"
};

const confidenceStyle: Record<Confidence, string> = {
  Strong: "text-emerald-800 bg-emerald-50 border-emerald-200",
  Moderate: "text-blue-800 bg-blue-50 border-blue-200",
  Debated: "text-orange-800 bg-orange-50 border-orange-200",
  Uncertain: "text-red-800 bg-red-50 border-red-200"
};

export default function Timeline() {
  const [era, setEra] = useState("all");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Event | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return [...events]
      .sort((a, b) => a.sortYear - b.sortYear)
      .filter((event) => {
        if (era !== "all" && event.era !== era) {
          return false;
        }

        if (!q) {
          return true;
        }

        const searchable = [
          event.title,
          event.summary,
          event.location,
          event.significance ?? "",
          event.historicalNote ?? "",
          ...event.people,
          ...event.bible,
          ...event.sources,
          ...(event.tags ?? [])
        ].join(" ").toLowerCase();

        return searchable.includes(q);
      });
  }, [era, query]);

  return (
    <>
      <section className="border-b border-[#d8cdbb] bg-[#fbf8f0]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-5 lg:grid-cols-[1.3fr_.7fr]">
            <div>
              <div className="sans text-[10px] font-bold uppercase tracking-[.24em] text-[#8b5e34]">
                V5 · Iron Age & Monarchy
              </div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Israel, Judah and the rise of external evidence
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
                Saul, David, Solomon, the divided kingdom, Omri, Ahab, Qarqar,
                Jehu, Mesha, Elijah, Elisha, Assyria and the road to Samaria.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Stat value={String(events.length)} label="V5 research events" />
              <Stat value="7" label="evidence families" />
              <Stat value="4" label="confidence levels" />
              <Stat value="0" label="hand-written array commas" />
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 border-b border-[#d8cdbb] bg-[#f7f2e8]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <EraButton active={era === "all"} onClick={() => setEra("all")}>
                All
              </EraButton>

              {eras.map((item) => (
                <EraButton
                  key={item.id}
                  active={era === item.id}
                  onClick={() => setEra(item.id)}
                >
                  {item.label}
                </EraButton>
              ))}
            </div>

            <label className="relative block min-w-0 lg:w-96">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500"
                size={17}
              />

              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search kings, prophets, sites, references..."
                className="w-full rounded-full border border-[#cdbfa9] bg-white/80 py-2.5 pl-10 pr-9 text-sm outline-none focus:border-[#8b5e34]"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-stone-500"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </label>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="sans text-xs font-bold uppercase tracking-[.22em] text-[#8b5e34]">
              Historical field notes
            </p>
            <h2 className="mt-2 text-3xl font-bold">The long timeline</h2>
          </div>

          <p className="sans text-sm text-stone-500">
            <strong className="text-stone-900">{filtered.length}</strong> events shown
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-[#cdbfa9] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {filtered.map((event, index) => {
              const isRight = index % 2 === 1;

              return (
                <article
                  key={event.id}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  <div
                    className={`${
                      isRight ? "md:col-start-2" : "md:col-start-1"
                    } pl-12`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelected(event)}
                      className="group w-full text-left"
                    >
                      <div className="absolute left-[10px] top-1.5 h-5 w-5 rounded-full border-4 border-[#f7f2e8] bg-[#8b5e34] md:left-1/2 md:-translate-x-1/2" />

                      <div className="sans text-xs font-bold uppercase tracking-[.16em] text-[#8b5e34]">
                        {event.date}
                      </div>

                      <h3 className="mt-1 text-2xl font-bold leading-tight group-hover:text-[#8b5e34]">
                        {event.title}
                      </h3>

                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {event.evidence.map((item) => (
                          <span
                            key={item}
                            className={`rounded-full border px-2 py-1 sans text-[10px] font-semibold ${evidenceStyle[item]}`}
                          >
                            {item}
                          </span>
                        ))}

                        <span
                          className={`rounded-full border px-2 py-1 sans text-[10px] font-semibold ${confidenceStyle[event.confidence]}`}
                        >
                          {event.confidence}
                        </span>
                      </div>

                      <p className="mt-3 text-[15px] leading-7 text-stone-700">
                        {event.summary}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3 sans text-xs text-stone-500">
                        <span className="inline-flex items-center gap-1">
                          <MapPin size={13} />
                          {event.location}
                        </span>

                        {event.bible.length > 0 && (
                          <span className="inline-flex items-center gap-1">
                            <BookOpen size={13} />
                            {event.bible.length} Biblical references
                          </span>
                        )}
                      </div>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center text-stone-500">
            No events match the current filter.
          </div>
        )}
      </main>

      <section className="border-t border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div>
            <div className="sans text-xs font-bold uppercase tracking-[.2em] text-[#8b5e34]">
              Research shelf
            </div>
            <h2 className="mt-2 text-2xl font-bold">
              Core source families
            </h2>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {sourceCatalog.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#ded3c3] bg-white p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-bold">{source.name}</div>
                    <div className="mt-1 sans text-[10px] uppercase tracking-wider text-stone-500">
                      {source.kind}
                    </div>
                  </div>

                  <ExternalLink size={15} className="text-stone-400" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <EventDrawer
          event={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[#ded3c3] bg-white/70 p-3">
      <div className="text-xl font-bold">{value}</div>
      <div className="sans text-[10px] uppercase tracking-wider text-stone-500">
        {label}
      </div>
    </div>
  );
}

function EraButton({
  active,
  onClick,
  children
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm ${
        active
          ? "border-[#8b5e34] bg-[#8b5e34] text-white"
          : "border-[#cdbfa9] bg-white/70"
      }`}
    >
      {children}
    </button>
  );
}

function EventDrawer({
  event,
  onClose
}: {
  event: Event;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/45 p-3 sm:p-6"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <aside className="ml-auto h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] shadow-2xl">
        <div className="sticky top-0 z-10 border-b border-[#ded3c3] bg-[#fffdf8]/95 p-5 backdrop-blur">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="sans text-xs font-bold uppercase tracking-[.18em] text-[#8b5e34]">
                {event.date}
              </div>

              <h2 className="mt-2 text-3xl font-bold leading-tight">
                {event.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#d2c5b2] p-2 text-stone-500"
              aria-label="Close details"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="space-y-7 p-5 sm:p-6">
          <section>
            <h3 className="font-bold">Historical summary</h3>
            <p className="mt-2 text-[15px] leading-7 text-stone-700">
              {event.summary}
            </p>
          </section>

          {event.significance && (
            <section className="rounded-xl border border-[#e0d2bd] bg-[#f7f0e2] p-4">
              <h3 className="font-bold">Why this matters</h3>
              <p className="mt-2 text-sm leading-6 text-stone-700">
                {event.significance}
              </p>
            </section>
          )}

          {event.historicalNote && (
            <section className="rounded-xl border border-orange-200 bg-orange-50/70 p-4">
              <h3 className="font-bold text-orange-950">Historical caution</h3>
              <p className="mt-2 text-sm leading-6 text-orange-950/80">
                {event.historicalNote}
              </p>
            </section>
          )}

          <section className="grid gap-5 sm:grid-cols-2">
            <InfoList title="People / figures" items={event.people} />
            <InfoList title="Biblical references" items={event.bible} />
          </section>

          <section>
            <h3 className="font-bold">Source trail</h3>
            <div className="mt-3 space-y-2">
              {event.sources.map((source) => (
                <div
                  key={source}
                  className="flex gap-3 rounded-lg border border-[#e2d8ca] bg-white p-3 text-sm"
                >
                  <ShieldCheck
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8b5e34]"
                  />
                  <span>{source}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <div className="sans text-[10px] font-bold uppercase tracking-wider text-stone-500">
              Location
            </div>
            <div className="mt-1 text-sm text-stone-700">
              {event.location}
            </div>

            {event.tags && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {event.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-100 px-2 py-1 sans text-[10px] text-stone-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </section>
        </div>
      </aside>
    </div>
  );
}

function InfoList({
  title,
  items
}: {
  title: string;
  items: string[];
}) {
  const safeItems = items.length > 0 ? items : ["None recorded"];

  return (
    <div>
      <div className="font-bold">{title}</div>

      <ul className="mt-2 space-y-1.5 text-sm leading-6 text-stone-600">
        {safeItems.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}
