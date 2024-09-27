import { getRandomCocktail, getCategories, getCocktailByName} from '../services/api'; 

export const loadRandomCocktail = async () => {
    return await getRandomCocktail();
};

// To handle fetching both the categories and cocktails before the page renders
export const searchPageLoader = async () => {
    try {
        // Fetch categories and an initial list of cocktails
        const categories = await getCategories();
        const cocktails = await getCocktailByName("");

        return { categories, cocktails };
    } catch (error) {
        console.error('Error loading data for SearchPage:', error);
    }
};