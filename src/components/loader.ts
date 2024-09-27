import { getRandomCocktail } from '../services/api'; 

export const loadRandomCocktail = async () => {
    return await getRandomCocktail();
};