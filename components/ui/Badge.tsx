export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="sans inline-block rounded-full border border-stone-300 px-3 py-1 text-xs font-bold uppercase tracking-wider text-stone-600">
      {children}
    </span>
  );
}