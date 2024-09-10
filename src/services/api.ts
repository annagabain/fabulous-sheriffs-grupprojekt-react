
// API and service calls
// Functions for API calls 


// we will need these variables to be accessible for us for further development
// getCocktailByName
// getRandomCocktail



// EXAMPLE!!!! 
// Function to fetch a cocktail by name
export const getCocktailByName = async (name: string) => {
    try {
        // const response = await api.get(`/search.php?s=${name}`);
        name = 'bloody mary';

        const response = name;

        return response;
    } catch (error) {
        console.error("Error fetching cocktail by name:", error);
        throw error;
    }
};




// EXAMPLE!!!
// Function to fetch a random cocktail
// export const getRandomCocktail = async () => {
//     try {
//         const response = await api.get('/random.php');
//         return response.data.drinks[0];  // return the first cocktail
//     } catch (error) {
//         console.error("Error fetching random cocktail:", error);
//         throw error;
//     }
// };
