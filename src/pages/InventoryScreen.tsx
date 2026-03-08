import Card from '../components/Card';
import Layout from '../components/Layout';
import { Character } from '../types/game';

type InventoryScreenProps = {
  character: Character;
};

export default function InventoryScreen({ character }: InventoryScreenProps) {
  return (
    <Layout title="Inventaire" subtitle="Armes, équipement, consommables et objets divers">
      <Card>
        <p className="text-sm">Argent: {character.gold} po</p>
      </Card>
      <div className="space-y-3">
        {character.inventory.map((item) => (
          <Card key={item.id}>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-zinc-400">Type: {item.type} • Quantité: {item.quantity}</p>
            <p className="text-sm">{item.details}</p>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
