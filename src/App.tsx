import { useMemo, useState } from 'react';
import BottomNav from './components/BottomNav';
import { mockCharacter } from './data/mockCharacter';
import ActionsScreen from './pages/ActionsScreen';
import CharacterScreen from './pages/CharacterScreen';
import DiceScreen from './pages/DiceScreen';
import FavoritesScreen from './pages/FavoritesScreen';
import InventoryScreen from './pages/InventoryScreen';
import LoginScreen from './pages/LoginScreen';
import SpellsScreen from './pages/SpellsScreen';
import { AppScreen } from './types/game';

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('login');

  const page = useMemo(() => {
    switch (screen) {
      case 'login':
        return <LoginScreen onEnter={() => setScreen('favorites')} />;
      case 'favorites':
        return <FavoritesScreen character={mockCharacter} />;
      case 'character':
        return <CharacterScreen character={mockCharacter} />;
      case 'actions':
        return <ActionsScreen character={mockCharacter} />;
      case 'spells':
        return <SpellsScreen character={mockCharacter} />;
      case 'inventory':
        return <InventoryScreen character={mockCharacter} />;
      case 'dice':
        return <DiceScreen />;
      default:
        return null;
    }
  }, [screen]);

  return (
    <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-[220px_1fr]">
      <BottomNav activeScreen={screen} onNavigate={setScreen} />
      <div>{page}</div>
    </div>
  );
}
