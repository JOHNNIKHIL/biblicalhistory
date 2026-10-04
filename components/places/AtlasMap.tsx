import Link from "next/link";
import { places } from "../../content/places";

const minLon=10,maxLon=48,minLat=24,maxLat=42;
const x=(lon:number)=>8+((lon-minLon)/(maxLon-minLon))*84;
const y=(lat:number)=>92-((lat-minLat)/(maxLat-minLat))*84;

export default function AtlasMap(){
  return <div className="panel overflow-hidden rounded-3xl p-3 sm:p-5">
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-2"><div><p className="sans text-xs font-black uppercase tracking-[.18em] text-[var(--accent)]">Ancient world atlas</p><h2 className="mt-1 text-2xl font-semibold">Levant, Mesopotamia & Mediterranean</h2></div><span className="sans rounded-full bg-[var(--surface-2)] px-3 py-2 text-xs font-bold text-[var(--muted)]">Schematic map · not to scale</span></div>
    <svg viewBox="0 0 100 100" className="h-auto w-full rounded-2xl bg-[var(--surface-2)]" role="img" aria-label="Schematic map of Biblical world locations">
      <rect x="0" y="0" width="100" height="100" fill="var(--surface-2)"/>
      <path d="M14 5 C28 14 31 25 34 35 C39 48 35 61 43 72 C52 82 69 86 93 91 L100 100 L0 100 L0 0 Z" fill="var(--surface)" opacity=".72"/>
      <path d="M31 0 C35 13 34 22 38 32 C42 43 47 50 53 59 C59 68 69 74 85 80" fill="none" stroke="var(--border)" strokeWidth=".6" strokeDasharray="2 2"/>
      <text x="5" y="10" fontSize="3.2" fill="var(--muted)">MEDITERRANEAN</text><text x="67" y="16" fontSize="3.2" fill="var(--muted)">MESOPOTAMIA</text><text x="45" y="44" fontSize="3.2" fill="var(--muted)">LEVANT</text><text x="21" y="72" fontSize="3.2" fill="var(--muted)">EGYPT</text>
      {places.filter(p=>p.coordinates.lon>=minLon&&p.coordinates.lon<=maxLon&&p.coordinates.lat>=minLat&&p.coordinates.lat<=maxLat).map(p=><g key={p.slug}><circle cx={x(p.coordinates.lon)} cy={y(p.coordinates.lat)} r="1.35" fill="var(--accent)"/><title>{p.name}</title></g>)}
    </svg>
    <div className="mt-4 flex flex-wrap gap-2 px-2">{places.filter(p=>["jerusalem","jericho","hazor","lachish","samaria","megiddo","babylon","nineveh","ur","nazareth","capernaum"].includes(p.slug)).map(p=><Link key={p.slug} href={`/places/${p.slug}`} className="sans rounded-full border border-[var(--border)] px-3 py-2 text-xs font-bold hover:border-[var(--accent)]">{p.name}</Link>)}</div>
  </div>
}
