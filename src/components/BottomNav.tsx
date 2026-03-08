import { AppScreen } from '../types/game';

const labels: Record<AppScreen, string> = {
  login: 'Connexion',
  favorites: 'Favoris',
  character: 'Fiche',
  actions: 'Actions',
  spells: 'Sorts',
  inventory: 'Inventaire',
  dice: 'Dés'
};

type BottomNavProps = {
  activeScreen: AppScreen;
  onNavigate: (screen: AppScreen) => void;
};

const mobileScreens: AppScreen[] = ['favorites', 'character', 'actions', 'spells', 'dice'];
const tabletScreens: AppScreen[] = ['login', 'favorites', 'character', 'actions', 'spells', 'inventory', 'dice'];

export default function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  return (
    <>
      <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-zinc-800 bg-zinc-950/95 p-2 backdrop-blur md:hidden">
        <ul className="mx-auto grid max-w-5xl grid-cols-5 gap-2">
          {mobileScreens.map((screen) => (
            <li key={screen}>
              <button
                type="button"
                onClick={() => onNavigate(screen)}
                className={`w-full rounded-xl px-2 py-3 text-xs font-semibold transition ${
                  activeScreen === screen ? 'bg-brand-600 text-white' : 'bg-zinc-900 text-zinc-300'
                }`}
              >
                {labels[screen]}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <aside className="sticky top-6 hidden h-fit rounded-2xl border border-zinc-800 bg-zinc-900/90 p-3 md:block">
        <ul className="space-y-2">
          {tabletScreens.map((screen) => (
            <li key={screen}>
              <button
                type="button"
                onClick={() => onNavigate(screen)}
                className={`w-full rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                  activeScreen === screen ? 'bg-brand-600 text-white' : 'bg-zinc-950 text-zinc-300 hover:bg-zinc-800'
                }`}
              >
                {labels[screen]}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
