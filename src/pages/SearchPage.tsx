// import { getCocktailByName } from "../services/api";

import { useState } from "react";



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// DUMMY FUNCTION FOR TESTING, the real one will be imported from the api.ts file

export const getCocktailByName = async (name: string) => {
    return name;
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------





export default function SearchPage() {

    // let searchTerm = "";

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [fetchedCocktailName, setCocktailName] = useState<string>('');



    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
      
        e.preventDefault();
        
      

        console.log("Search Term:", searchTerm);

        const fetchedCocktailName = await getCocktailByName('bloody mary');
        console.log("Hardcoded API Cocktail Name:", fetchedCocktailName);


        // Compare the hardcoded cocktail name with the user's search term
        if (fetchedCocktailName.toLowerCase() === searchTerm.toLowerCase()) {
            console.log("Match found! The cocktail name is:", fetchedCocktailName);
            setCocktailName(fetchedCocktailName);

        } else {
            console.log("No match found.");
            setCocktailName('');
        }
    // Clear the input field
    setSearchTerm('');
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
                {/* <button type="submit">Search</button> */}
                <button id="searchButtonLoopIcon" type="submit">
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </button>
            </form>


            {/* Display search results */}
            <p>Search Result: {fetchedCocktailName ? fetchedCocktailName : "No match found."}</p>

        </>
    )
};

