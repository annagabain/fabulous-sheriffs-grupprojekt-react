import { useContext, useEffect, useState } from "react";
import { getCocktailByName } from "../services/api";
import GlobalStateContext from '../context/GlobalStateContext';
import CocktailCard from "../components/CocktailCard";
import { Drink } from "../type";
import { Pagination } from "../components/Pagination";
import { useNavigate } from 'react-router-dom';



export default function SearchPage() {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const { searchResults, setSearchResults } = useContext(GlobalStateContext);
    const [displayedResults, setDisplayedResults] = useState<Drink[]>([]);
    const { setSelectedCocktail } = useContext(GlobalStateContext);
    const navigate = useNavigate();

    useEffect(() => {
        setDisplayedResults(searchResults.slice(0, 10));
    }, [searchResults]);

    const handlePageChange = (start: number, end: number) => {
        setDisplayedResults(searchResults.slice(start, end));
    };

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
                    setSearchResults(matchingCocktails)
                } else {
                    console.log("No match found.");
                    setSearchResults([]);
                }
            } else {
                console.log("Result is not in the expected format.");
                setSearchResults([]);

            }
        } catch (error) {
            console.error("Error fetching drink:", error);
            setSearchResults([]);
        }

        // Clear the input field
        // setSearchTerm('');
    };



    const handleViewDetails = (drink: Drink) => {

        setSelectedCocktail(drink);
        // Navigate to the details page using the cocktail's ID
        navigate(`/cocktail/${drink.idDrink}`);
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

                        displayedResults.map((drink, index) => (
                            <section key={index}>

                                <CocktailCard drink={drink} />
                                <button onClick={() => handleViewDetails(drink)} className='view-more'>
                                    View Details
                                </button>
                            </section>

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
            <Pagination resultsPerPage={10} onPageChange={handlePageChange} />
        </>
    );
}
