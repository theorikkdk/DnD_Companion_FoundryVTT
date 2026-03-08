import Card from '../components/Card';
import Layout from '../components/Layout';
import { Character } from '../types/game';

const categoryLabels = {
  action: 'Action',
  spell: 'Sort',
  item: 'Objet',
  weapon: 'Arme'
};

type FavoritesScreenProps = {
  character: Character;
};

export default function FavoritesScreen({ character }: FavoritesScreenProps) {
  return (
    <Layout title="Favoris" subtitle="Tes raccourcis utiles pendant la partie">
      <div className="grid gap-4 md:grid-cols-2">
        {character.favorites.map((favorite) => (
          <Card key={favorite.id}>
            <p className="mb-2 text-xs uppercase tracking-wide text-brand-500">{categoryLabels[favorite.category]}</p>
            <h2 className="text-lg font-semibold text-zinc-100">{favorite.label}</h2>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
