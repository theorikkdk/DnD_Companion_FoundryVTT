import Card from '../components/Card';
import Layout from '../components/Layout';
import { Character } from '../types/game';

type ActionsScreenProps = {
  character: Character;
};

export default function ActionsScreen({ character }: ActionsScreenProps) {
  return (
    <Layout title="Actions" subtitle="Actions générales + armes équipées">
      <Card>
        <h3 className="mb-3 font-semibold">Armes équipées</h3>
        <div className="space-y-3">
          {character.equippedWeapons.map((weapon) => (
            <article key={weapon.id} className="rounded-xl bg-zinc-800 p-3">
              <p className="font-semibold">{weapon.name}</p>
              <p className="text-sm text-zinc-400">{weapon.description}</p>
              <p className="mt-1 text-sm">Bonus {weapon.bonus} • Dégâts {weapon.damage}</p>
            </article>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-semibold">Actions générales</h3>
        <div className="space-y-3">
          {character.actions.map((action) => (
            <article key={action.id} className="rounded-xl bg-zinc-800 p-3">
              <p className="font-semibold">{action.name}</p>
              <p className="text-sm text-zinc-400">{action.description}</p>
            </article>
          ))}
        </div>
      </Card>
    </Layout>
  );
}
