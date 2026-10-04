import { people } from "../people";
import { places } from "../places";
import { kingdoms } from "../kingdoms";
import { events } from "../events";
import { evidenceItems } from "../evidence";
import { storyMap } from "../stories";

export type GraphNodeType = "person" | "place" | "kingdom" | "event" | "evidence" | "article";
export type GraphNode = { id:string; type:GraphNodeType; label:string; href:string; meta?:string };
export type GraphEdge = { from:string; to:string; relation:string };

const node = (type:GraphNodeType, slug:string, label:string, href:string, meta?:string):GraphNode => ({id:`${type}:${slug}`,type,label,href,meta});

export const graphNodes: GraphNode[] = [
  ...people.map(p=>node("person",p.slug,p.name,`/people/${p.slug}`,p.role)),
  ...places.map(p=>node("place",p.slug,p.name,`/places/${p.slug}`,p.type)),
  ...kingdoms.map(k=>node("kingdom",k.slug,k.name,`/kingdoms/${k.slug}`,k.type)),
  ...events.map(e=>node("event",e.slug,e.name,`/events/${e.slug}`,e.type)),
  ...evidenceItems.map(e=>node("evidence",e.slug,e.name,`/evidence/${e.slug}`,e.type)),
  ...Object.values(storyMap).map((s:any)=>node("article",s.slug,s.title ?? s.name,`/story/${s.slug}`,s.category ?? "Encyclopedia")),
];

const edges:GraphEdge[] = [];
const seen = new Set<string>();
function edge(a:string,b:string,relation:string){ if(a===b) return; const key=`${a}|${b}|${relation}`; if(!seen.has(key)){seen.add(key);edges.push({from:a,to:b,relation});} }
function linkMany(sourceType:GraphNodeType, sourceSlug:string, targets:string[]|undefined, targetType:GraphNodeType, relation:string){
  for(const target of targets ?? []) if(graphNodes.some(n=>n.id===`${targetType}:${target}`)) edge(`${sourceType}:${sourceSlug}`,`${targetType}:${target}`,relation);
}

for(const p of people){
  for(const r of p.relationships ?? []) linkMany("person",p.slug,[r.person],"person",r.relation);
  linkMany("person",p.slug,p.places,"place","associated with");
  linkMany("person",p.slug,p.storySlugs,"article","appears in");
  linkMany("person",p.slug,p.evidence.map(x=>x.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"")),"evidence","historical context");
}
for(const p of places){ linkMany("place",p.slug,p.people,"person","associated with"); linkMany("place",p.slug,p.storySlugs,"article","described by"); }
for(const k of kingdoms){ linkMany("kingdom",k.slug,k.people,"person","ruled / associated with"); linkMany("kingdom",k.slug,k.places,"place","controlled / associated with"); }
for(const e of events){ linkMany("event",e.slug,e.participants,"person","participant"); linkMany("event",e.slug,e.places,"place","location"); linkMany("event",e.slug,e.kingdoms,"kingdom","political context"); linkMany("event",e.slug,e.storySlugs,"article","explained by"); }
for(const e of evidenceItems){ linkMany("evidence",e.slug,e.people,"person","connected to"); linkMany("evidence",e.slug,e.places,"place","found / associated with"); linkMany("evidence",e.slug,e.kingdoms,"kingdom","historical context"); linkMany("evidence",e.slug,e.storySlugs,"article","explained by"); }

export const graphEdges = edges;
export const graphNodeMap = Object.fromEntries(graphNodes.map(n=>[n.id,n]));

export function getConnections(id:string){
  const result = graphEdges.filter(e=>e.from===id || e.to===id).map(e=>({
    relation:e.from===id?e.relation:`${e.relation} (inverse)`,
    node:graphNodeMap[e.from===id?e.to:e.from],
  })).filter(x=>x.node);
  const unique = new Map<string,typeof result[number]>();
  for(const item of result) if(!unique.has(item.node.id)) unique.set(item.node.id,item);
  return [...unique.values()];
}
