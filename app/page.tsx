import Header from "../components/layout/Header";
import Hero from "../components/home/Hero";
import ExploreSearch from "../components/home/ExploreSearch";
import ChapterGrid from "../components/home/ChapterGrid";
import { stories } from "../content/stories";

export default function Home() {
  const books = stories.filter((s:any) => String(s.slug).startsWith("book-")).length;
  const places = stories.filter((s:any) => String(s.slug).includes("site") || ["jerusalem","samaria","megiddo","hazor","bethlehem","nazareth","capernaum","bethsaida","caesarea-maritima","egypt-and-the-nile","sinai-wilderness"].includes(s.slug)).length;
  const evidence = stories.filter((s:any) => ["ketef-hinnom","siloam-inscription","hezekiahs-tunnel","lachish-reliefs","babylonian-chronicles","nabonidus-cylinder","pilate-stone","caiaphas-ossuary","merneptah-stele","tel-dan-stele","black-obelisk","mesha-stele","sennacherib-prism","cyrus-cylinder"].includes(s.slug)).length;
  return <div className="shell"><Header/><main><Hero/><ExploreSearch/>
    <section className="mx-auto grid max-w-[1500px] gap-3 px-4 pb-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
      {[[stories.length,"Encyclopedia entries"],[books,"Bible book guides"],[places,"Places & sites"],[evidence,"Historical anchors"]].map(([n,label]) => <div key={String(label)} className="panel-muted rounded-2xl p-5"><p className="text-3xl font-semibold">{n}+</p><p className="sans mt-1 text-xs font-bold uppercase tracking-[.16em] text-[var(--muted)]">{label}</p></div>)}
    </section>
    <ChapterGrid/>
  </main></div>;
}
