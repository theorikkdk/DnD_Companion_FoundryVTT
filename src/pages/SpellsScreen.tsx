import Card from '../components/Card';
import Layout from '../components/Layout';
import { Character, Spell } from '../types/game';

type SpellsScreenProps = {
  character: Character;
};

function groupByLevel(spells: Spell[]) {
  return spells.reduce<Record<number, Spell[]>>((acc, spell) => {
    if (!acc[spell.level]) {
      acc[spell.level] = [];
    }
    acc[spell.level].push(spell);
    return acc;
  }, {});
}

export default function SpellsScreen({ character }: SpellsScreenProps) {
  const spellsByLevel = groupByLevel(character.spells);

  return (
    <Layout title="Sorts" subtitle="Tri par niveau + informations de concentration">
      <Card>
        <h3 className="mb-3 font-semibold">Emplacements de sorts</h3>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {character.spellSlots.map((slot) => (
            <p key={slot.level} className="rounded-xl bg-zinc-800 px-3 py-2 text-sm">
              Niveau {slot.level}: {slot.current}/{slot.max}
            </p>
          ))}
        </div>
      </Card>

      {Object.entries(spellsByLevel)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([level, spells]) => (
          <Card key={level}>
            <h3 className="mb-3 font-semibold">Niveau {level}</h3>
            <div className="space-y-3">
              {spells.map((spell) => (
                <article key={spell.id} className="rounded-xl bg-zinc-800 p-3">
                  <p className="font-semibold">{spell.name}</p>
                  <p className="text-sm text-zinc-400">
                    {spell.school} • {spell.castingTime} • Portée {spell.range}
                  </p>
                  <p className="text-sm text-brand-500">Concentration: {spell.concentration ? 'Oui' : 'Non'}</p>
                  <p className="mt-1 text-sm">{spell.description}</p>
                </article>
              ))}
            </div>
          </Card>
        ))}
    </Layout>
  );
}
