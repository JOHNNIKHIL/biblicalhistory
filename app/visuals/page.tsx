import Header from "../../components/layout/Header";
import MediaGallery from "../../components/media/MediaGallery";
import { externalVisualResources, visualMedia } from "../../content/media";

export default function VisualsPage(){
  return <div className="shell"><Header/><main>
    <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16">
      <p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">Visual library</p>
      <h1 className="mt-3 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">See the world behind the text.</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">The visual layer now reaches beyond Wikimedia: specialist map publishers, museum collections and archaeological institutions sit alongside clearly attributed public-domain material.</p>
    </section>
    <MediaGallery items={visualMedia.filter(x=>x.kind==="map")} title="Historical maps"/>
    <MediaGallery items={visualMedia.filter(x=>x.kind==="artifact")} title="Museum objects & primary evidence"/>

    <section className="border-t border-[var(--border)] bg-[var(--surface-2)] py-14 sm:py-18">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
        <p className="sans text-[10px] font-black uppercase tracking-[.22em] text-[var(--accent)]">Go deeper</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Institutional maps & collections</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-[var(--muted)]">Some institutions provide interactive maps or collection systems rather than static images. We link directly to those resources instead of copying restricted material into the app.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {externalVisualResources.map(resource=><a key={resource.title} href={resource.url} target="_blank" rel="noreferrer" className="panel rounded-3xl p-5 transition hover:-translate-y-0.5 hover:border-[var(--accent)]">
            <div className="flex items-center justify-between gap-3"><span className="sans text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{resource.source}</span><span className="sans text-[10px] font-bold text-[var(--muted)]">{resource.license}</span></div>
            <h3 className="mt-3 text-xl font-semibold">{resource.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{resource.description}</p>
            <p className="sans mt-4 text-xs font-bold text-[var(--accent)]">Open collection ↗</p>
          </a>)}
        </div>
      </div>
    </section>
  </main></div>;
}
