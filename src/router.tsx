import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import FavoritesPage from "./pages/FavoritesPage";
import CocktailDetailsPage from "./pages/CocktailDetailsPage";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
           <Route index element={<LandingPage />} />
           <Route path='search-page' element={<SearchPage />} />
           <Route path='favorites-page' element={<FavoritesPage />} />
           <Route path='cocktail/:id' element={<CocktailDetailsPage />} />
           <Route path='*' element={<PageNotFound />} />
        </Route>
    )
);
