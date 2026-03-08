import { useState } from 'react';
import Card from '../components/Card';
import DiceButton from '../components/DiceButton';
import Layout from '../components/Layout';

type RollMode = 'normal' | 'advantage' | 'disadvantage';

export default function DiceScreen() {
  const [modifier, setModifier] = useState(0);
  const [mode, setMode] = useState<RollMode>('normal');
  const [history, setHistory] = useState<string[]>([]);

  const rollDice = (faces: number) => {
    const roll = () => Math.floor(Math.random() * faces) + 1;

    const first = roll();
    const second = mode === 'normal' ? null : roll();

    let kept = first;
    if (mode === 'advantage' && second !== null) kept = Math.max(first, second);
    if (mode === 'disadvantage' && second !== null) kept = Math.min(first, second);

    const total = kept + modifier;
    const summary = `${mode} d${faces}: ${second ? `${first}/${second}` : first} + ${modifier} = ${total}`;

    setHistory((prev) => [summary, ...prev].slice(0, 8));
  };

  return (
    <Layout title="Lanceur de dés" subtitle="Jets rapides avec avantage, désavantage et historique">
      <Card>
        <div className="mb-3 flex flex-wrap gap-2">
          {(['normal', 'advantage', 'disadvantage'] as RollMode[]).map((currentMode) => (
            <button
              key={currentMode}
              type="button"
              onClick={() => setMode(currentMode)}
              className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                mode === currentMode ? 'bg-brand-600 text-white' : 'bg-zinc-800 text-zinc-200'
              }`}
            >
              {currentMode === 'normal' ? 'Normal' : currentMode === 'advantage' ? 'Avantage' : 'Désavantage'}
            </button>
          ))}
        </div>

        <label className="text-sm">
          Modificateur
          <input
            type="number"
            value={modifier}
            onChange={(event) => setModifier(Number(event.target.value) || 0)}
            className="mt-1 w-full rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-zinc-100"
          />
        </label>
      </Card>

      <Card className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {['d20', 'd12', 'd10', 'd8', 'd6', 'd4'].map((dice) => (
          <DiceButton key={dice} dice={dice} onRoll={rollDice} />
        ))}
      </Card>

      <Card>
        <h3 className="mb-2 font-semibold">Historique</h3>
        <ul className="space-y-2 text-sm text-zinc-300">
          {history.length === 0 ? <li>Aucun jet pour le moment.</li> : history.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </Card>
    </Layout>
  );
}
