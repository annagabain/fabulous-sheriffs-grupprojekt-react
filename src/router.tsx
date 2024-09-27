import { createHashRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import FavoritesPage from "./pages/FavoritesPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";
import PageNotFound from "./pages/PageNotFound";
import IngredientDetailsPage from "./pages/IngredientDetailsPage";

export const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
           <Route index element={<LandingPage />} />
           <Route path="search-page" element={<SearchPage />} />
           <Route path="favorites-page" element={<FavoritesPage />} />
           <Route path="cocktail/:id" element={<CocktailDetailsPage />} />
           <Route path="ingredient/:ingredient" element={<IngredientDetailsPage />} />
           <Route path="*" element={<PageNotFound />} />
        </Route>
    )
);
