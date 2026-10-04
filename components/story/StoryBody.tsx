type RichSection = { title: string; paragraphs: string[] };
type SimpleSection = { heading: string; body: string };

type Props = {
  sections: RichSection[] | SimpleSection[];
};

export default function StoryBody({ sections }: Props) {
  const normalized: RichSection[] = sections.map((s) =>
    "title" in s
      ? s
      : { title: s.heading, paragraphs: [s.body] }
  );

  return (
    <div className="article">
      {normalized.map((s, i) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          {s.paragraphs.map((p, j) => (
            <p key={j} className={i === 0 && j === 0 ? "dropcap" : ""}>{p}</p>
          ))}
        </section>
      ))}
    </div>
  );
}
