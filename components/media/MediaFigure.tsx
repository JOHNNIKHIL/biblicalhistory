import type { MediaItem } from "../../content/media";
export default function MediaFigure({item}:{item:MediaItem}){
 return <figure className="panel overflow-hidden rounded-3xl"><a href={item.src} target="_blank" rel="noreferrer" className="block bg-[var(--surface-2)]"><img src={item.src} alt={item.title} className="max-h-[620px] w-full object-contain" /></a><figcaption className="p-4"><p className="font-semibold">{item.title}</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.caption}</p><p className="sans mt-2 text-[10px] leading-5 text-[var(--faint)]">{item.source} · {item.license} · <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="underline underline-offset-2">source</a></p></figcaption></figure>;
}
