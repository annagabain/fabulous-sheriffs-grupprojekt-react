import { Drink } from "../type";

export const getCocktailByName = async (name: string) => {
    try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        );
        const data = await response.json();
        const drinks: Drink = data.drinks;

        return drinks;
    } catch (error) {
        console.error("Error fetching cocktail by name:", error);
        throw error;
    }
};

export const getRandomCocktail = async () => {
    try {
        const response = await fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );
        const data = await response.json();
        const drink: Drink = data.drinks[0];

        return drink;
    } catch (error) {
        console.error("Error fetching random cocktail:", error);
        throw error;
    }
};

export const getCocktailDetails = async (idDrink: number) => {
    try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        const data = await response.json();
        const drink: Drink = data.drinks[0];

        console.log(drink);

        return drink;
    } catch (error) {
        console.error("Error fetching cocktail details:", error);
        throw error;
    }
};