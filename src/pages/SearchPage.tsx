import { useContext, useEffect, useState } from "react";
import {
    getCategories,
    getCocktailByName,
    getCocktailsByCategory,
} from "../services/api";
import GlobalStateContext from "../context/GlobalStateContext";
import CocktailCard from "../components/CocktailCard";
import { Drink } from "../type";
import { Pagination } from "../components/Pagination";
import { useNavigate } from "react-router-dom";

import "../styles/SearchPage.css";

export default function SearchPage() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { searchResults, setSearchResults } = useContext(GlobalStateContext);
    const [displayedResults, setDisplayedResults] = useState<Drink[]>([]);
    const { setSelectedCocktail } = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // Fetch all cocktails and categories
    useEffect(() => {
        const fetchAllCocktails = async () => {
            const categoryList = await getCategories();
            setCategories(categoryList);
            try {
                const result = await getCocktailByName("");
                if (Array.isArray(result) && result.length > 0) {
                    setSearchResults(result);
                } else {
                    setSearchResults([]);
                }
            } catch (error) {
                console.error("Error fetching all drinks:", error);
                setSearchResults([]);
            }
        };

        fetchAllCocktails();
    }, []);

    useEffect(() => {
        setDisplayedResults(searchResults.slice(0, 10));
    }, [searchResults]);

    const handlePageChange = (start: number, end: number) => {
        setDisplayedResults(searchResults.slice(start, end));
    };

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if (searchTerm.length > 0) {
                const result: Drink[] = await getCocktailByName(searchTerm);
                setSearchResults(result);

                if (selectedCategory) {
                    const filtered = result.filter((drink) => {
                        return drink.strCategory === selectedCategory;
                    });
                    setSearchResults(filtered);
                }
            } else if (selectedCategory) {
                const categorySearch: Drink[] = await getCocktailsByCategory(
                    selectedCategory
                );
                setSearchResults(categorySearch);
            }

            // Check if result is an array with at least one object
            //     if (Array.isArray(result) && result.length > 0) {
            //         const cocktails = result;
            //         const matchingCocktails = cocktails.filter((drink) =>
            //             drink.strDrink
            //                 .toLowerCase()
            //                 .includes(searchTerm.toLowerCase())
            //         );

            //         if (matchingCocktails.length > 0) {
            //             console.log("Matches found:", matchingCocktails);

            //             // Set the matching cocktails to be displayed
            //             setSearchResults(matchingCocktails);
            //         } else {
            //             console.log("No match found.");
            //             setSearchResults([]);
            //         }
            //     } else {
            //         console.log("Result is not in the expected format.");
            //         setSearchResults([]);
            //     }
        } catch (error) {
            console.error("Error fetching drink:", error);
            setSearchResults([]);
        }

        // Clear the input field
        // setSearchTerm('');
    };

    const handleCocktailClick = (drink: Drink) => {
        setSelectedCocktail(drink);
        // Navigate to the details page using the cocktail's ID
        navigate(`/cocktail/${drink.idDrink}`);
    };

    return (
        <>
            <section className="main-content-container">
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
                        <i className="fas fa-search"></i>{" "}
                        {/* Font Awesome search icon */}
                    </button>

                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="" disabled hidden>
                            Select category
                        </option>
                        <option value="">None</option>
                        {categories.map((option, i) => (
                            <option key={i} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </form>

                {/* Display search results */}
                <div className="card-container">
                    {searchResults.length > 0 ? (
                        displayedResults.map((drink, index) => (
                            <section
                                key={index}
                                onClick={() => handleCocktailClick(drink)}
                                style={{ cursor: "pointer" }}
                            >
                                <CocktailCard drink={drink} />
                            </section>
                        ))
                    ) : (
                        <section className="not-found-container">
                            <h3>No match found.</h3>
                            <img
                                className="not-found-image card"
                                src="src/assets/pexels-badun-18782633.jpg"
                                alt="empty glass"
                            />
                        </section>
                    )}
                </div>
                <Pagination
                    resultsPerPage={10}
                    onPageChange={handlePageChange}
                />
            </section>
        </>
    );
}
