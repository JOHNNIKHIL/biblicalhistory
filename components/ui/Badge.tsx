export default function Badge({ children }: { children: React.ReactNode }) {
  return <span className="sans inline-flex rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1 text-[10px] font-black uppercase tracking-[.16em] text-[var(--accent)]">{children}</span>;
}
