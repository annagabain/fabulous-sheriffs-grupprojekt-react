import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import FavoritesPage from "./pages/FavoritesPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";
import PageNotFound from "./pages/PageNotFound";
import IngredientDetailsPage from "./pages/IngredientDetailsPage";
import { loadRandomCocktail, searchPageLoader } from './components/loader';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
           <Route index element={<LandingPage />} loader={loadRandomCocktail} />
           <Route path='search-page' element={<SearchPage />} loader={searchPageLoader}/>
           <Route path='favorites-page' element={<FavoritesPage />} />
           <Route path='cocktail/:id' element={<CocktailDetailsPage />} />
           <Route path='ingredient/:ingredient' element={<IngredientDetailsPage />} />
           <Route path='*' element={<PageNotFound />} />
        </Route>
    )
);
