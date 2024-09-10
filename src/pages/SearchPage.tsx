import { useState } from "react";
import { getCocktailByName } from "../services/api";


export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [fetchedCocktailNames, setCocktailName] = useState<any[]>([]);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // console.log("Search Term:", searchTerm);

        try {
            const result = await getCocktailByName(searchTerm);

            // Check if result is an array with at least one object
            if (Array.isArray(result) && result.length > 0) {
                const cocktails = result;
                const matchingCocktails = cocktails.filter(cocktail =>
                    cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (matchingCocktails.length > 0) {
                    console.log("Matches found:", matchingCocktails);
                    // Set the matching cocktails to be displayed
                    setCocktailName(matchingCocktails);
                } else {
                    console.log("No match found.");
                    setCocktailName([]);
                }
            } else {
                console.log("Result is not in the expected format.");
                setCocktailName([]);
            }
        } catch (error) {
            console.error("Error fetching cocktail:", error);
            setCocktailName([]);
        }

        // Clear the input field
        // setSearchTerm('');
    };

    return (
        <>
            {/* SearchPage */}

            <form onSubmit={handleSearch}>
                <input
                    id="coctailSearch"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter cocktail name"
                />
                <button id="searchButtonLoopIcon" type="submit">
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </button>
            </form>

            {/* Display search results */}
            <div className="card-container">
                {fetchedCocktailNames.length > 0 ? (
                    fetchedCocktailNames.map((cocktail, index) => (
                        <div className="card" key={index}>
                            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="card-image" />
                            <div className="card-content">
                                <h3>{cocktail.strDrink}</h3>
                                {/* <p>{cocktail.strInstructions}</p> */}
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No match found.</p>
                )}
            </div>
        </>
    );
}
