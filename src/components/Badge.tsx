type BadgeProps = {
  label: string;
};

export default function Badge({ label }: BadgeProps) {
  return <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-200">{label}</span>;
}
