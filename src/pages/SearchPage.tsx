// import { getCocktailByName } from "../services/api";



// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------

// DUMMY FUNCTION FOR TESTING, the real one will be imported from the api.ts file

export const getCocktailByName = async (name: string) => {
    return name;
};

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------





export default function SearchPage() {

    let searchTerm = "";


    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Search Term:", searchTerm);

        const cocktailName = await getCocktailByName('bloody mary');
        console.log("Hardcoded API Cocktail Name:", cocktailName);

        // Compare the hardcoded cocktail name with the user's search term
        if (cocktailName.toLowerCase() === searchTerm.toLowerCase()) {
            console.log("Match found! The cocktail name is:", cocktailName);
        } else {
            console.log("No match found.", cocktailName);
        }
    };


    return (
        <>
            {/* SearchPage */}

            {/* Search form */}
            <form onSubmit={handleSearch}>
                <input
                    id="coctailSearch"
                    type="text"
                    onChange={(e) => { searchTerm = e.target.value; }}
                    placeholder="Enter cocktail name"
                />
                <button type="submit">Search</button>
            </form>

            {/* Dummy data logging */}
            <p>Check the console for the search term and API response.</p>

        </>
    )
};

