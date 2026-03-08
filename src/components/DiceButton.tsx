type DiceButtonProps = {
  dice: string;
  onRoll: (faces: number) => void;
};

export default function DiceButton({ dice, onRoll }: DiceButtonProps) {
  const faces = Number(dice.replace('d', ''));

  return (
    <button
      type="button"
      onClick={() => onRoll(faces)}
      className="rounded-xl bg-zinc-800 px-4 py-4 text-lg font-semibold text-zinc-100 transition hover:bg-brand-600"
    >
      {dice}
    </button>
  );
}
