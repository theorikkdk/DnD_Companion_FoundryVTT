import Badge from '../components/Badge';
import Card from '../components/Card';
import Layout from '../components/Layout';
import { Character } from '../types/game';

type CharacterScreenProps = {
  character: Character;
};

export default function CharacterScreen({ character }: CharacterScreenProps) {
  return (
    <Layout title="Fiche personnage" subtitle="Résumé rapide pour jouer sans perdre de temps">
      <Card className="flex items-center gap-4">
        <img src={character.portrait} alt={character.name} className="h-20 w-20 rounded-2xl object-cover" />
        <div>
          <h2 className="text-xl font-bold">{character.name}</h2>
          <p className="text-sm text-zinc-400">
            {character.className} • Niveau {character.level}
          </p>
        </div>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <h3 className="mb-2 font-semibold">Défense</h3>
          <p>PV: {character.hp.current}/{character.hp.max} (+{character.hp.temp} temp)</p>
          <p>CA: {character.armorClass}</p>
          <p>Vitesse: {character.speed}</p>
        </Card>
        <Card>
          <h3 className="mb-2 font-semibold">Magie</h3>
          <p>Attaque de sort: {character.spellAttackBonus}</p>
          <p>DD des sorts: {character.spellSaveDc}</p>
          <p>Concentration: {character.concentration}</p>
          <p>Inspiration: {character.inspiration ? 'Oui' : 'Non'}</p>
        </Card>
      </div>

      <Card>
        <h3 className="mb-3 font-semibold">Ressources</h3>
        <div className="space-y-2">
          {character.resources.map((resource) => (
            <p key={resource.name} className="text-sm">
              {resource.name}: {resource.current}/{resource.max}
            </p>
          ))}
        </div>
      </Card>

      <Card>
        <h3 className="mb-3 font-semibold">Conditions</h3>
        <div className="flex flex-wrap gap-2">
          {character.conditions.map((condition) => (
            <Badge key={condition} label={condition} />
          ))}
        </div>
      </Card>
    </Layout>
  );
}
