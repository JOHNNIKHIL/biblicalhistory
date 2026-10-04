import Link from "next/link";
import Header from "../../components/layout/Header";
import { graphNodes, graphNodeMap, getConnections, type GraphNodeType } from "../../content/graph";

const typeLabels:Record<GraphNodeType,string>={person:"People",place:"Places",kingdom:"Kingdoms & Empires",event:"Events",evidence:"Evidence",article:"Articles"};
const typeColors:Record<GraphNodeType,string>={person:"var(--accent)",place:"#3b82f6",kingdom:"#a16207",event:"#dc2626",evidence:"#7c3aed",article:"#475569"};

function NodeCard({n,relation}:{n:typeof graphNodes[number];relation?:string}){
  return <Link href={n.href} className="block rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
    <div className="flex items-start gap-3"><span className="mt-1 size-2.5 shrink-0 rounded-full" style={{background:typeColors[n.type]}}/><div className="min-w-0"><p className="sans text-[10px] font-black uppercase tracking-[.16em]" style={{color:typeColors[n.type]}}>{typeLabels[n.type].replace(/s$/i,"")}</p><h3 className="mt-1 font-semibold">{n.label}</h3>{relation?<p className="sans mt-1 text-xs font-semibold text-[var(--muted)]">{relation}</p>:null}</div></div>
  </Link>
}

export default async function ConnectionsPage({searchParams}:{searchParams?:Promise<{focus?:string;q?:string;type?:string}>}){
  const params=searchParams?await searchParams:{};
  const focus=params.focus ?? "";
  const q=(params.q??"").trim().toLowerCase();
  const type=(params.type??"all") as GraphNodeType|"all";
  const focused=focus?graphNodeMap[focus]:undefined;
  const connections=focused?getConnections(focus):[];
  const filteredNodes=graphNodes.filter(n=>(type==="all"||n.type===type)&&(!q||`${n.label} ${n.meta??""}`.toLowerCase().includes(q))).slice(0,80);
  const displayConnections=connections.slice(0,36);
  const angleStep=(Math.PI*2)/Math.max(displayConnections.length,1);
  return <div className="shell"><Header/><main className="mx-auto max-w-[1400px] px-5 py-10 sm:px-6 sm:py-14">
    <header className="max-w-5xl"><p className="sans text-xs font-black uppercase tracking-[.2em] text-[var(--accent)]">Knowledge graph</p><h1 className="mt-3 text-5xl font-semibold leading-tight sm:text-6xl">Explore connections</h1><p className="mt-5 text-xl leading-9 text-[var(--muted)]">Move between people, places, kingdoms, events, archaeological evidence and encyclopedia articles. Every connection is derived from the structured relationships already present in the library.</p></header>
    <form action="/connections" className="panel mt-9 grid gap-3 rounded-3xl p-4 sm:grid-cols-[1fr_220px_auto]"><input name="q" defaultValue={params.q??""} placeholder="Find David, Jerusalem, Assyria, Sennacherib…" className="sans rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]"/><select name="type" defaultValue={type} className="sans rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 py-3 text-sm"><option value="all">All entity types</option>{Object.entries(typeLabels).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select><button className="sans rounded-xl bg-[var(--accent)] px-5 py-3 text-sm font-bold text-white">Find</button></form>
    {!focused ? <section className="mt-8"><div className="flex items-end justify-between"><div><h2 className="text-2xl font-semibold">Choose an entity</h2><p className="mt-1 text-sm text-[var(--muted)]">Select a node to see its immediate network.</p></div><span className="sans text-xs font-bold text-[var(--muted)]">{graphNodes.length} nodes · {/** edges are intentionally summarized */} many connections</span></div><div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{filteredNodes.map(n=><NodeCard key={n.id} n={n}/>)}</div></section> : <section className="mt-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_330px]">
        <div className="panel rounded-[2rem] p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4"><div><p className="sans text-[10px] font-black uppercase tracking-[.18em] text-[var(--accent)]">Central node</p><h2 className="mt-2 text-3xl font-semibold">{focused.label}</h2><p className="sans mt-1 text-sm text-[var(--muted)]">{typeLabels[focused.type].replace(/s$/i,"")} · {focused.meta ?? ""}</p></div><Link href={focused.href} className="sans rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-bold text-white">Open profile →</Link></div>
          <div className="relative mx-auto mt-8 min-h-[650px] max-w-[820px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface-2)]">
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"><div className="grid size-36 place-items-center rounded-full border-4 bg-[var(--surface)] p-4 text-center shadow-xl" style={{borderColor:typeColors[focused.type]}}><span className="text-sm font-black leading-tight">{focused.label}</span></div></div>
            {displayConnections.map((c,i)=>{const angle=i*angleStep-Math.PI/2; const x=50+40*Math.cos(angle); const y=50+40*Math.sin(angle); return <div key={c.node.id} className="absolute z-10 w-36 -translate-x-1/2 -translate-y-1/2" style={{left:`${x}%`,top:`${y}%`}}><NodeCard n={c.node} relation={c.relation}/></div>})}
            {displayConnections.map((c,i)=>{const angle=i*angleStep-Math.PI/2; const x1=50+11*Math.cos(angle); const y1=50+11*Math.sin(angle); const x2=50+34*Math.cos(angle); const y2=50+34*Math.sin(angle); return <div key={`line-${c.node.id}`} className="absolute h-px origin-left bg-[var(--border)]" style={{left:`${x1}%`,top:`${y1}%`,width:`${Math.hypot(x2-x1,y2-y1)}%`,transform:`rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI}deg)`}}/>})}
          </div>
          <p className="sans mt-4 text-xs text-[var(--muted)]">Showing up to {displayConnections.length} direct connections. Follow a connected node to continue exploring.</p>
        </div>
        <aside className="space-y-4"><div className="panel rounded-3xl p-5"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--muted)]">Direct connections</p><p className="mt-2 text-3xl font-semibold">{connections.length}</p><p className="mt-1 text-sm text-[var(--muted)]">structured relationships found</p></div><div className="panel rounded-3xl p-5"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--muted)]">Legend</p><div className="mt-4 space-y-3">{Object.entries(typeLabels).map(([k,v])=><div key={k} className="flex items-center gap-3"><span className="size-3 rounded-full" style={{background:typeColors[k as GraphNodeType]}}/><span className="text-sm font-semibold">{v}</span></div>)}</div></div><Link href="/connections" className="panel block rounded-3xl p-5 hover:border-[var(--accent)]"><p className="sans text-xs font-black uppercase tracking-[.16em] text-[var(--muted)]">Start over</p><p className="mt-2 font-semibold">Choose another entity →</p></Link></aside>
      </div>
    </section>}
  </main></div>
}
