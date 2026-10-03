'use client';

import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { BookOpen, ExternalLink, MapPin, Search, ScrollText, ShieldCheck, X, Globe2, Layers3 } from 'lucide-react';
import { events, eras, Event, Evidence, Confidence, sourceCatalog } from '../data/timeline';

const evidenceStyle: Record<Evidence, string> = {
  Biblical: 'bg-amber-50 text-amber-900 border-amber-200',
  Archaeological: 'bg-stone-100 text-stone-800 border-stone-300',
  Epigraphic: 'bg-sky-50 text-sky-900 border-sky-200',
  Imperial: 'bg-slate-100 text-slate-800 border-slate-300',
  Classical: 'bg-violet-50 text-violet-900 border-violet-200',
  Material: 'bg-emerald-50 text-emerald-900 border-emerald-200',
  Textual: 'bg-rose-50 text-rose-900 border-rose-200',
};

const confidenceStyle: Record<Confidence, string> = {
  Strong: 'text-emerald-800 bg-emerald-50 border-emerald-200',
  Moderate: 'text-blue-800 bg-blue-50 border-blue-200',
  Debated: 'text-orange-800 bg-orange-50 border-orange-200',
  Uncertain: 'text-red-800 bg-red-50 border-red-200',
};

export default function Timeline() {
  const [era, setEra] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Event | null>(null);
  const [worldOpen, setWorldOpen] = useState(true);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return events.filter((event) => {
      if (era !== 'all' && event.era !== era) return false;
      if (!q) return true;
      const searchable = [
        event.title, event.summary, event.location, event.significance ?? '', event.historicalNote ?? '',
        ...event.people, ...event.bible, ...event.sources, ...(event.tags ?? []),
        ...(event.world ?? []).flatMap((item) => [item.region, ...item.developments]),
      ].join(' ').toLowerCase();
      return searchable.includes(q);
    });
  }, [era, query]);

  const activeEra = eras.find((item) => item.id === era);

  return (
    <>
      <section className="border-b border-[#d8cdbb] bg-[#fbf8f0]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="sans text-[10px] font-bold uppercase tracking-[.24em] text-[#8b5e34]">V3 · Exodus & Conquest</div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">The ancient world around the Bible</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600">
                V3 adds the Exodus and conquest research layer. Competing chronological models, Egyptian context, inscriptions and archaeological sites are kept side-by-side so evidence and interpretation do not get mixed together.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {[
                ['50+', 'historical events'],
                ['9', 'eras'],
                ['7', 'evidence types'],
                ['4', 'confidence levels'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl border border-[#ded3c3] bg-white/70 p-3">
                  <div className="text-xl font-bold">{value}</div>
                  <div className="sans text-[10px] uppercase tracking-wider text-stone-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 border-b border-[#d8cdbb] bg-[#f7f2e8]/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar">
              <button type="button" onClick={() => setEra('all')} className={`shrink-0 rounded-full border px-4 py-2 text-sm sans ${era === 'all' ? 'border-[#8b5e34] bg-[#8b5e34] text-white' : 'border-[#cdbfa9] bg-white/60'}`}>All eras</button>
              {eras.map((item) => (
                <button key={item.id} type="button" onClick={() => setEra(item.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm sans ${era === item.id ? 'border-[#8b5e34] bg-[#8b5e34] text-white' : 'border-[#cdbfa9] bg-white/60'}`}>
                  {item.label}
                </button>
              ))}
            </div>
            <label className="relative block min-w-0 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={17} />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search events, people, Bible references, sites, sources…" className="w-full rounded-full border border-[#cdbfa9] bg-white/70 py-2.5 pl-10 pr-9 text-sm sans outline-none focus:border-[#8b5e34]" />
              {query && <button type="button" onClick={() => setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-500" aria-label="Clear search"><X size={16} /></button>}
            </label>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-10">
        {activeEra && (
          <div className="mb-8 rounded-2xl border border-[#d9cdbb] bg-[#fffaf0] p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="sans text-[10px] font-bold uppercase tracking-[.2em] text-[#8b5e34]">Selected era</div>
                <h3 className="mt-1 text-2xl font-bold">{activeEra.label}</h3>
                <p className="sans mt-1 text-xs font-semibold text-stone-500">{activeEra.range}</p>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-stone-600">{activeEra.description}</p>
            </div>
          </div>
        )}

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="sans text-xs font-bold uppercase tracking-[.22em] text-[#8b5e34]">Historical field notes</p>
            <h2 className="mt-2 text-3xl font-bold">The long timeline</h2>
            <p className="mt-2 max-w-2xl text-stone-600">Click any event to inspect its Biblical references, evidence layers, historical caveats and source trail.</p>
          </div>
          <div className="flex items-center gap-2 sans text-sm text-stone-500"><strong className="text-stone-900">{filtered.length}</strong> events shown</div>
        </div>

        {era === "exodus" && (
          <section className="mb-12 rounded-2xl border border-[#d8cdbb] bg-white overflow-hidden">
            <div className="border-b border-[#ded3c3] bg-[#fffaf0] px-5 py-5 sm:px-6">
              <div className="sans text-[10px] font-bold uppercase tracking-[.2em] text-[#8b5e34]">Chronology lab</div>
              <h3 className="mt-1 text-2xl font-bold">The Exodus question — two major chronological models</h3>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-stone-600">
                The interface deliberately presents competing models rather than silently choosing one. Biblical chronology, Egyptian chronology, place-name arguments and archaeology answer different questions and must be evaluated separately.
              </p>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="border-b border-[#ded3c3] p-5 md:border-b-0 md:border-r sm:p-6">
                <div className="sans text-[10px] font-bold uppercase tracking-[.18em] text-stone-500">Model A</div>
                <h4 className="mt-2 text-xl font-bold">Early-date model · c. 15th century BCE</h4>
                <p className="mt-2 text-sm leading-6 text-stone-600">Often associated with a more literal reading of the 480-year figure in 1 Kings 6:1. It creates a different Egyptian and Canaanite archaeological window than the later model.</p>
                <div className="mt-4 rounded-xl bg-stone-50 p-4">
                  <div className="sans text-[10px] font-bold uppercase tracking-wider text-stone-500">Key Biblical anchor</div>
                  <div className="mt-1 font-semibold">1 Kings 6:1</div>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="sans text-[10px] font-bold uppercase tracking-[.18em] text-stone-500">Model B</div>
                <h4 className="mt-2 text-xl font-bold">Later-date model · c. 13th century BCE</h4>
                <p className="mt-2 text-sm leading-6 text-stone-600">Often considers the Ramesside-period setting of Exodus 1:11 alongside Late Bronze Age chronology and the Egyptian presence in Canaan.</p>
                <div className="mt-4 rounded-xl bg-stone-50 p-4">
                  <div className="sans text-[10px] font-bold uppercase tracking-wider text-stone-500">Key Biblical anchor</div>
                  <div className="mt-1 font-semibold">Exodus 1:11</div>
                </div>
              </div>
            </div>
            <div className="border-t border-[#ded3c3] bg-[#18212a] px-5 py-4 text-sm leading-6 text-white/75 sm:px-6">
              <strong className="text-white">Research rule:</strong> neither model is treated as proven merely because a Biblical verse can be aligned with an Egyptian date. The site records the evidence, assumptions and unresolved problems separately.
            </div>
          </section>
        )}

        {worldOpen && era === 'origins' && (
          <section className="mb-12 overflow-hidden rounded-2xl border border-[#d8cdbb] bg-[#18212a] text-[#f5eee2]">
            <div className="border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2"><Globe2 size={18} className="text-[#d8bd8e]" /><div><div className="sans text-[10px] font-bold uppercase tracking-[.2em] text-[#d8bd8e]">Parallel world context</div><h3 className="mt-1 text-xl font-bold">While the Biblical story is being situated…</h3></div></div>
                <button type="button" onClick={() => setWorldOpen(false)} className="rounded-full border border-white/15 px-3 py-1.5 sans text-xs text-white/70">Hide</button>
              </div>
            </div>
            <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {bronzeWorldCards().map((item) => (
                <div key={item.region} className="bg-[#18212a] p-5"><div className="sans text-xs font-bold uppercase tracking-wider text-[#d8bd8e]">{item.region}</div><ul className="mt-3 space-y-2 text-sm leading-6 text-white/75">{item.developments.map((development) => <li key={development}>• {development}</li>)}</ul></div>
              ))}
            </div>
          </section>
        )}

        <div className="relative">
          <div className="absolute left-[18px] top-0 h-full w-px timeline-line md:left-[50%] md:-translate-x-1/2" />
          <div className="space-y-10">
            {filtered.map((event, index) => {
              const isRight = index % 2 === 1;
              return (
                <article key={event.id} className="relative md:grid md:grid-cols-2 md:gap-12">
                  <div className={`${isRight ? 'md:col-start-2' : 'md:col-start-1'} pl-12`}>
                    <button type="button" onClick={() => setSelected(event)} className="group w-full text-left">
                      <div className="absolute left-[9px] top-1.5 h-5 w-5 rounded-full border-4 border-[#f7f2e8] bg-[#8b5e34] shadow-sm md:left-1/2 md:-translate-x-1/2" />
                      <div className="sans text-xs font-bold uppercase tracking-[.16em] text-[#8b5e34]">{event.date}</div>
                      <h3 className="mt-1 text-2xl font-bold leading-tight group-hover:text-[#8b5e34]">{event.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {event.evidence.map((item) => <span key={item} className={`rounded-full border px-2 py-1 sans text-[10px] font-semibold ${evidenceStyle[item]}`}>{item}</span>)}
                        <span className={`rounded-full border px-2 py-1 sans text-[10px] font-semibold ${confidenceStyle[event.confidence]}`}>{event.confidence}</span>
                      </div>
                      <p className="mt-3 text-[15px] leading-7 text-stone-700">{event.summary}</p>
                      <div className="mt-3 flex flex-wrap gap-3 sans text-xs text-stone-500">
                        <span className="inline-flex items-center gap-1"><MapPin size={13} />{event.location}</span>
                        {event.bible.length > 0 && <span className="inline-flex items-center gap-1"><BookOpen size={13} />{event.bible.length} Biblical references</span>}
                        <span className="inline-flex items-center gap-1"><ScrollText size={13} />{event.sources.length} source trails</span>
                      </div>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {!filtered.length && <div className="py-20 text-center text-stone-500">No events match that search/filter combination.</div>}
      </main>

      <section className="border-t border-[#d8cdbb] bg-[#fffdf8]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between gap-4"><div><div className="sans text-xs font-bold uppercase tracking-[.2em] text-[#8b5e34]">Research shelf</div><h2 className="mt-2 text-2xl font-bold">Core source families</h2></div><Layers3 size={23} className="text-[#8b5e34]" /></div>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {sourceCatalog.map((source) => <a key={source.name} href={source.url} target="_blank" rel="noreferrer" className="group rounded-xl border border-[#ded3c3] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#bda27c]"><div className="flex items-start justify-between gap-3"><div><div className="font-bold leading-5">{source.name}</div><div className="mt-1 sans text-[10px] uppercase tracking-wider text-stone-500">{source.kind}</div></div><ExternalLink size={15} className="shrink-0 text-stone-400 group-hover:text-[#8b5e34]" /></div></a>)}
          </div>
        </div>
      </section>

      {selected && <EventDrawer event={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

function bronzeWorldCards() {
  return [
    {region:'Egypt',developments:['Middle Kingdom state traditions','Second Intermediate Period','New Kingdom imperial expansion']},
    {region:'Mesopotamia',developments:['Sumerian and Akkadian legacies','Ur III bureaucracy','Old Babylonian kingdoms']},
    {region:'Canaan',developments:['Fortified Middle Bronze Age cities','Trade and diplomacy','Egyptian imperial oversight']},
    {region:'Anatolia',developments:['Hittite expansion','Syria–Anatolia diplomacy','Late Bronze Age collapse']},
  ];
}

function EventDrawer({ event, onClose }: { event: Event; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/45 p-3 sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <aside className="ml-auto h-full w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#d8cdbb] bg-[#fffdf8] shadow-2xl">
        <div className="sticky top-0 z-10 border-b border-[#ded3c3] bg-[#fffdf8]/95 p-5 backdrop-blur sm:p-6">
          <div className="flex items-start justify-between gap-4"><div><div className="sans text-xs font-bold uppercase tracking-[.18em] text-[#8b5e34]">{event.date}</div><h2 className="mt-2 text-3xl font-bold leading-tight">{event.title}</h2></div><button type="button" onClick={onClose} className="rounded-full border border-[#d2c5b2] p-2 text-stone-500" aria-label="Close details"><X size={18} /></button></div>
          <div className="mt-3 flex flex-wrap gap-1.5">{event.evidence.map((item) => <span key={item} className={`rounded-full border px-2 py-1 sans text-[10px] font-semibold ${evidenceStyle[item]}`}>{item}</span>)}<span className={`rounded-full border px-2 py-1 sans text-[10px] font-semibold ${confidenceStyle[event.confidence]}`}>{event.confidence}</span></div>
        </div>
        <div className="space-y-7 p-5 sm:p-6">
          <section><h3 className="font-bold">Historical summary</h3><p className="mt-2 text-[15px] leading-7 text-stone-700">{event.summary}</p></section>
          {event.significance && <section className="rounded-xl border border-[#e0d2bd] bg-[#f7f0e2] p-4"><h3 className="font-bold">Why this matters</h3><p className="mt-2 text-sm leading-6 text-stone-700">{event.significance}</p></section>}
          {event.historicalNote && <section className="rounded-xl border border-orange-200 bg-orange-50/60 p-4"><h3 className="font-bold text-orange-950">Historical caution</h3><p className="mt-2 text-sm leading-6 text-orange-950/80">{event.historicalNote}</p></section>}
          <section className="grid gap-5 sm:grid-cols-2">
            <InfoList title="People / figures" icon={<MapPin size={15} />} items={event.people.length ? event.people : ['No named figure attached']} />
            <InfoList title="Biblical references" icon={<BookOpen size={15} />} items={event.bible.length ? event.bible : ['No direct Biblical reference']} />
          </section>
          {event.world && <section><h3 className="font-bold">Parallel world context</h3><div className="mt-3 grid gap-3 sm:grid-cols-2">{event.world.map((item) => <div key={item.region} className="rounded-xl border border-[#ded3c3] bg-white p-4"><div className="sans text-xs font-bold uppercase tracking-wider text-[#8b5e34]">{item.region}</div><ul className="mt-2 space-y-1 text-sm leading-6 text-stone-600">{item.developments.map((d) => <li key={d}>• {d}</li>)}</ul></div>)}</div></section>}
          <section><h3 className="font-bold">Source trail</h3><div className="mt-3 space-y-2">{event.sources.map((source) => <div key={source} className="flex gap-3 rounded-lg border border-[#e2d8ca] bg-white p-3 text-sm"><ShieldCheck size={16} className="mt-0.5 shrink-0 text-[#8b5e34]" /><span>{source}</span></div>)}</div></section>
          <section><div className="sans text-[10px] font-bold uppercase tracking-wider text-stone-500">Location</div><div className="mt-1 text-sm text-stone-700">{event.location}</div>{event.tags && <div className="mt-3 flex flex-wrap gap-1.5">{event.tags.map((tag) => <span key={tag} className="rounded-full bg-stone-100 px-2 py-1 sans text-[10px] text-stone-600">#{tag}</span>)}</div>}</section>
        </div>
      </aside>
    </div>
  );
}

function InfoList({ title, icon, items }: { title: string; icon: ReactNode; items: string[] }) {
  return <div><div className="flex items-center gap-2 font-bold">{icon}{title}</div><ul className="mt-2 space-y-1.5 text-sm leading-6 text-stone-600">{items.map((item) => <li key={item}>• {item}</li>)}</ul></div>;
}
