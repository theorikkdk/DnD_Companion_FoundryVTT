import Layout from '../components/Layout';
import Card from '../components/Card';

type LoginScreenProps = {
  onEnter: () => void;
};

export default function LoginScreen({ onEnter }: LoginScreenProps) {
  return (
    <Layout title="Connexion" subtitle="Écran visuel fictif (sans authentification)">
      <Card className="space-y-4">
        <p className="text-sm text-zinc-300">Bienvenue aventurier. Choisis ton personnage pour ouvrir le compagnon de partie.</p>
        <button
          type="button"
          onClick={onEnter}
          className="w-full rounded-xl bg-brand-600 px-4 py-4 text-base font-semibold text-white transition hover:bg-brand-500"
        >
          Entrer avec Lyra Ombrefeu
        </button>
        <p className="text-xs text-zinc-500">Pas de compte réel: cette étape sert juste à simuler une connexion.</p>
      </Card>
    </Layout>
  );
}
