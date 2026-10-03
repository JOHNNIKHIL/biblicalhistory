'use client';
import {useMemo,useState} from 'react';
import {BookOpen, ExternalLink, MapPin, Search, ScrollText, ShieldCheck, Sparkles, X} from 'lucide-react';
import {events,eras,Event,Evidence,Confidence,sourceCatalog} from '../data/timeline';

const evidenceStyle:Record<Evidence,string>={Biblical:'bg-amber-50 text-amber-900 border-amber-200',Archaeological:'bg-stone-100 text-stone-800 border-stone-300',Epigraphic:'bg-sky-50 text-sky-900 border-sky-200',Imperial:'bg-slate-100 text-slate-800 border-slate-300',Classical:'bg-violet-50 text-violet-900 border-violet-200',Material:'bg-emerald-50 text-emerald-900 border-emerald-200'};
const conf:Record<Confidence,string>={Strong:'text-emerald-800 bg-emerald-50 border-emerald-200',Moderate:'text-blue-800 bg-blue-50 border-blue-200',Debated:'text-orange-800 bg-orange-50 border-orange-200',Uncertain:'text-red-800 bg-red-50 border-red-200'};

export default function Timeline(){
 const [era,setEra]=useState('all'); const [query,setQuery]=useState(''); const [selected,setSelected]=useState<Event|null>(null);
 const filtered=useMemo(()=>events.filter(e=>(era==='all'||e.era===era)&&(`${e.title} ${e.summary} ${e.people.join(' ')} ${e.location}`.toLowerCase().includes(query.toLowerCase()))),[era,query]);
 return <>
  <div className="sticky top-0 z-20 border-b border-[#d8cdbb] bg-[#f7f2e8]/95 backdrop-blur">
   <div className="mx-auto max-w-7xl px-4 py-3">
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
     <div className="flex items-center gap-2 overflow-x-auto scrollbar pb-1">
      <button onClick={()=>setEra('all')} className={`shrink-0 rounded-full border px-4 py-2 text-sm sans ${era==='all'?'border-[#8b5e34] bg-[#8b5e34] text-white':'border-[#cdbfa9] bg-white/60'}`}>All eras</button>
      {eras.map(x=><button key={x.id} onClick={()=>setEra(x.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm sans ${era===x.id?'border-[#8b5e34] bg-[#8b5e34] text-white':'border-[#cdbfa9] bg-white/60'}`}>{x.label}</button>)}
     </div>
     <label className="relative block min-w-0 lg:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search people, places, events…" className="w-full rounded-full border border-[#cdbfa9] bg-white/70 py-2.5 pl-10 pr-9 text-sm sans outline-none focus:border-[#8b5e34]"/>{query&&<button type="button" onClick={()=>setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-500"><X size={16}/></button>}</label>
    </div>
   </div>
  </div>
  <main className="mx-auto max-w-6xl px-4 py-10">
   <div className="mb-8 flex items-end justify-between gap-4"><div><p className="sans text-xs font-bold uppercase tracking-[.22em] text-[#8b5e34]">Historical field notes</p><h2 className="mt-2 text-3xl font-bold">The long timeline</h2><p className="mt-2 max-w-2xl text-stone-600">A first-pass chronology connecting biblical narratives with external evidence. Dates and assessments are deliberately marked where scholarship is debated.</p></div><div className="hidden text-right sans text-sm text-stone-500 sm:block"><strong className="text-stone-900">{filtered.length}</strong> events shown</div></div>
   <div className="relative"><div className="absolute left-[18px] top-0 h-full w-px timeline-line md:left-[50%] md:-translate-x-1/2"/>
    <div className="space-y-10">{filtered.map((e,i)=><article key={e.id} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i%2?'':'md:text-right'}`}>
      <div className={`${i%2?'md:col-start-2 md:text-left':'md:col-start-1'} pl-12 md:pl-0`}>
       <button onClick={()=>setSelected(e)} className="group w-full text-left md:text-inherit">
        <div className="absolute left-[9px] top-1.5 h-5 w-5 rounded-full border-4 border-[#f7f2e8] bg-[#8b5e34] shadow-sm md:left-1/2 md:-translate-x-1/2"/>
        <div className="sans text-xs font-bold uppercase tracking-[.16em] text-[#8b5e34]">{e.date}</div>
        <h3 className="mt-1 text-2xl font-bold leading-tight group-hover:underline decoration-[#b58a56] decoration-2 underline-offset-4">{e.title}</h3>
        <p className="mt-2 text-[15px] leading-7 text-stone-700">{e.summary}</p>
        <div className={`mt-3 flex flex-wrap gap-1.5 ${i%2?'md:justify-start':'md:justify-end'}`}>{e.evidence.map(v=><span key={v} className={`rounded-full border px-2 py-1 text-[11px] font-semibold sans ${evidenceStyle[v]}`}>{v}</span>)}<span className={`rounded-full border px-2 py-1 text-[11px] font-semibold sans ${conf[e.confidence]}`}>{e.confidence}</span></div>
       </div>
      </button>
     </article>)}</div>
   </div>
   {!filtered.length&&<div className="py-20 text-center text-stone-500">No events match that search.</div>}
  </main>
  {selected&&<div className="fixed inset-0 z-40 flex items-end justify-center bg-black/30 p-0 sm:items-center sm:p-6" onMouseDown={e=>{if(e.target===e.currentTarget)setSelected(null)}}>
   <section className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl border border-[#d8cdbb] bg-[#fffdf8] p-6 shadow-2xl sm:rounded-3xl sm:p-8">
    <div className="flex items-start justify-between gap-4"><div><div className="sans text-xs font-bold uppercase tracking-[.18em] text-[#8b5e34]">{selected.date} · {selected.location}</div><h2 className="mt-2 text-3xl font-bold">{selected.title}</h2></div><button onClick={()=>setSelected(null)} className="rounded-full border border-stone-300 p-2" aria-label="Close"><X size={18}/></button></div>
    <p className="mt-5 text-[17px] leading-8 text-stone-700">{selected.summary}</p>
    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <div className="rounded-2xl border border-[#ddd2c2] bg-[#f8f3e9] p-5"><h3 className="flex items-center gap-2 font-bold"><BookOpen size={18}/> Biblical references</h3>{selected.bible.length?<ul className="mt-3 space-y-2 text-sm text-stone-700">{selected.bible.map(x=><li key={x}>• {x}</li>)}</ul>:<p className="mt-3 text-sm text-stone-500">No direct Biblical reference listed for this event.</p>}</div>
      <div className="rounded-2xl border border-[#ddd2c2] bg-[#f8f3e9] p-5"><h3 className="flex items-center gap-2 font-bold"><ShieldCheck size={18}/> Evidence assessment</h3><div className="mt-3 flex flex-wrap gap-2">{selected.evidence.map(v=><span key={v} className={`rounded-full border px-2 py-1 text-xs font-semibold sans ${evidenceStyle[v]}`}>{v}</span>)}</div><p className="mt-3 text-sm text-stone-600">Assessment: <strong>{selected.confidence}</strong>. This describes the strength of the historical anchor, not a theological judgment.</p></div>
    </div>
    <div className="mt-5 rounded-2xl border border-[#ddd2c2] p-5"><h3 className="flex items-center gap-2 font-bold"><ScrollText size={18}/> People & sources</h3><div className="mt-3 flex flex-wrap gap-2">{selected.people.map(p=><span key={p} className="rounded-full bg-stone-100 px-3 py-1.5 text-sm sans">{p}</span>)}</div><ul className="mt-4 space-y-2 text-sm text-stone-700">{selected.sources.map(s=><li key={s}>• {s}</li>)}</ul></div>
    <div className="mt-6 flex flex-wrap gap-3"><span className="inline-flex items-center gap-2 rounded-full border border-[#d8cdbb] px-3 py-2 text-xs sans text-stone-600"><MapPin size={14}/> {selected.location}</span><span className="inline-flex items-center gap-2 rounded-full border border-[#d8cdbb] px-3 py-2 text-xs sans text-stone-600"><Sparkles size={14}/> Research note</span></div>
   </section>
  </div>}
  <section className="mx-auto max-w-6xl px-4 pb-16 pt-4"><div className="border-t border-[#d8cdbb] pt-8"><h2 className="text-2xl font-bold">Source shelf</h2><p className="mt-2 max-w-2xl text-stone-600">The project will grow this catalog as each historical period is researched. Primary objects and ancient texts are kept distinct from modern interpretations.</p><div className="mt-5 grid gap-3 md:grid-cols-2">{sourceCatalog.map(s=><a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="group rounded-2xl border border-[#ddd2c2] bg-white/50 p-4 hover:bg-white"><div className="flex items-start justify-between gap-3"><div><div className="font-semibold">{s.name}</div><div className="mt-1 text-xs text-stone-500 sans">{s.kind}</div></div><ExternalLink size={16} className="shrink-0 text-stone-400 group-hover:text-[#8b5e34]"/></div></a>)}</div></div></section>
 </>
}
