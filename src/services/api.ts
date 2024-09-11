export const getCocktailByName = async (name: string) => {
    try {
        const response = await fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
        );
        const data = await response.json();
        console.log(data.drinks);

        return data.drinks;
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
        console.log(data.drinks[0]);

        return data.drinks[0];
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
        console.log(data.drinks[0]);

        return data.drinks[0];
    } catch (error) {
        console.error("Error fetching random cocktail:", error);
        throw error;
    }
};