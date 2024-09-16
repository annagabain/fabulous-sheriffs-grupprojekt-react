import { createContext, useState, ReactNode } from 'react';
import { Drink } from '../type';

interface GlobalStateContextType {
  searchResults: Drink[];
  selectedCocktail: Drink | null;
  setSearchResults: (drinks: Drink[]) => void;
  setSelectedCocktail: (drink: Drink) => void;
  favorites: Drink[];
  setFavorites: (drinks: Drink[]) => void;
}
const defaultState: GlobalStateContextType = {
  searchResults: [],
  selectedCocktail: null,
  setSearchResults: () => {},
  setSelectedCocktail: () => {},
  favorites: [],
  setFavorites: () => {},
};
// Create the context

const GlobalStateContext = createContext<GlobalStateContextType>(defaultState);


// Create a provider 
export const GlobalStateProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<Drink[]>([]);
  const [selectedCocktail, setSelectedCocktail] = useState<Drink | null>(null);
  const [favorites, setFavorites] = useState<Drink[]>([]);

  return (
    <GlobalStateContext.Provider value={{ searchResults, selectedCocktail, setSearchResults, setSelectedCocktail, favorites, setFavorites }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateContext;