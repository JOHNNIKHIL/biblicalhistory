import type { MediaItem } from "../../content/media";

export default function MediaGallery({items, title="Maps & primary evidence"}:{items:MediaItem[];title?:string}){
  return <section className="border-y border-[var(--border)] bg-[var(--surface)] py-14 sm:py-18">
    <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div><p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">See the world</p><h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--muted)]">Real historical maps and photographs of primary evidence, with source and license information kept visible.</p></div>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map(item=><figure key={item.title} className="panel overflow-hidden rounded-3xl">
          <a href={item.src} target="_blank" rel="noreferrer" className="block bg-[var(--surface-2)]">
            <img src={item.src} alt={item.title} loading="lazy" className="h-64 w-full object-cover transition duration-300 hover:scale-[1.015]" referrerPolicy="no-referrer" />
          </a>
          <figcaption className="p-5">
            <div className="flex items-center justify-between gap-3"><span className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{item.kind}</span><span className="sans text-[10px] font-bold text-[var(--muted)]">{item.license}</span></div>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.caption}</p>
            <p className="sans mt-3 text-[10px] font-semibold leading-5 text-[var(--faint)]">{item.source} · <a href={item.sourceUrl} target="_blank" rel="noreferrer" className="underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--accent)]">source</a> · <a href={item.licenseUrl} target="_blank" rel="noreferrer" className="underline decoration-[var(--border)] underline-offset-2 hover:text-[var(--accent)]">license</a></p>
          </figcaption>
        </figure>)}
      </div>
    </div>
  </section>;
}
