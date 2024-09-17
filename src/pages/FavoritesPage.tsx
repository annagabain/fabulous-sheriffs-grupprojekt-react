import { useContext } from "react"
import GlobalStateContext from "../context/GlobalStateContext"
import CocktailCard from "../components/CocktailCard";
import { Drink } from "../type";
import { useNavigate } from 'react-router-dom';

export default function FavoritesPage() {

    // Retrieve the favorites array from the global context
    const { favorites } = useContext(GlobalStateContext);

    // Retrieve the setter for the selected cocktail from the global context
    const { setSelectedCocktail } = useContext(GlobalStateContext);

    // Hook to programmatically navigate between routes
    const navigate = useNavigate();

    // Function to handle clicking on a cocktail card
    const handleCocktailClick = (drink: Drink) => {

        // Set the clicked cocktail as the selected cocktail in the global context
        setSelectedCocktail(drink);
        
        // Navigate to the details page using the cocktail's ID
        navigate(`/cocktail/${drink.idDrink}`);
    };

    return (
        <section className="main-content-container">
            <h2>Your Favorite Cocktails</h2>
            <section className="card-container">
                {/* Check if there are any favorite cocktails */}
                {favorites.length > 0 ?
                    // If there are favorites, map over the array and display each as a CocktailCard component
                    (favorites.map((drink, index) => (
                            <section key={index} className="favorite-item" onClick={() => handleCocktailClick(drink)} style={{ cursor: 'pointer' }}>
                                <CocktailCard drink={drink} />
                            </section>
                        ))
                    ) : (
                        // If no favorites are found, display a message to the user
                        <h4>No favorite cocktails found.</h4>
                    )
                }
            </section>
        </section>
    )
}