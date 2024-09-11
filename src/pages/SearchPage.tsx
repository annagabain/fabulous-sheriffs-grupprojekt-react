import { useContext, useState } from "react";
import { getCocktailByName } from "../services/api";
import GlobalStateContext from '../context/GlobalStateContext';
import CocktailCard  from "../components/CocktailCard";


export default function SearchPage() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    // const [fetchedCocktailNames, setCocktailName] = useState<any[]>([]);

    //this line alone throws an error, but works anyway, replaced with the context check below
    // const {searchResults, setSearchResults} = useContext(GlobalStateContext); 
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error("GlobalStateContext must be used within a GlobalStateProvider");
    }
    const { searchResults, setSearchResults } = context;



    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // console.log("Search Term:", searchTerm);

        try {
            const result = await getCocktailByName(searchTerm);

            // Check if result is an array with at least one object
            if (Array.isArray(result) && result.length > 0) {
                const cocktails = result;
                const matchingCocktails = cocktails.filter(drink =>
                    drink.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (matchingCocktails.length > 0) {
                    console.log("Matches found:", matchingCocktails);


                    // Set the matching cocktails to be displayed
                    // setCocktailName(matchingCocktails);
                    setSearchResults(matchingCocktails)
                } else {
                    console.log("No match found.");
                    // setCocktailName([]);
                    setSearchResults([]);
                }
            } else {
                console.log("Result is not in the expected format.");
                // setCocktailName([]);
                setSearchResults([]);

            }
        } catch (error) {
            console.error("Error fetching drink:", error);
            // setCocktailName([]);
            setSearchResults([]);

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
                    placeholder="Enter drink name"
                />
                <button id="searchButtonLoopIcon" type="submit">
                    <i className="fas fa-search"></i> {/* Font Awesome search icon */}
                </button>
            </form>

            {/* Display search results */}
            <div className="card-container">
                {
                    searchResults.length > 0 ? (
                        searchResults.map((drink, index) => (

                            <CocktailCard key={index} drink={drink} />

                            // <div className="card" key={index}>
                            //     <img src={drink.strDrinkThumb} alt={drink.strDrink} className="card-image" />
                            //     <div className="card-content">
                            //         <h3>{drink.strDrink}</h3>
                            //     </div>
                            // </div>

                            

                        ))

                    ) : (
                        <h2>No match found.
                            <img
                                src='src/assets/pexels-badun-18782633.jpg'
                                alt='empty glass'
                                style={{ width: '100%' }}
                            />
                        </h2>
                    )

                }

            </div>
        </>
    );
}
