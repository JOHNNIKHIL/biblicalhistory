export default function StoryBody({
  sections
}: {
  sections: { title: string; paragraphs: string[] }[];
}) {
  return (
    <div className="article">
      {sections.map((s, i) => (
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