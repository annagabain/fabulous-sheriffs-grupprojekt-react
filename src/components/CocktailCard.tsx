import { Drink } from '../type';
import GlobalStateContext from '../context/GlobalStateContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';


export default function CocktailCard({ drink }: { drink: Drink }) {
    // Destructure the global context to use the setFavorites function
    const { favorites, setFavorites } = useContext(GlobalStateContext);

    // Check if the current drink is already in the list of favorites
    const isFavorite = favorites.some(favorite => favorite.idDrink === drink.idDrink)

    // Add the current drink to the favorites list
    function addFavorite() {
        setFavorites([...favorites, drink]);
    }

    // Remove the current drink from the favorites list
    function removeFavorite() {
        setFavorites(favorites.filter(favorite => favorite.idDrink !== drink.idDrink))
    }

    // Toggle between adding and removing the drink from favorites
    function handlefavoriteClick(e: React.MouseEvent<HTMLButtonElement>) {

        e.stopPropagation();  // Prevent event from bubbling up

        if (isFavorite) {
            removeFavorite();  // If already a favorite, remove it
        } else {
            addFavorite();     // If not a favorite, add it
        }
    }

    return (
        <div className="card">
            <button className="favorite-icon" onClick={handlefavoriteClick}>
                <FontAwesomeIcon icon={faHeartSolid} style={{ color: isFavorite ? 'red' : 'white' }} />
            </button>
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="card-image" />
            <h3>{drink.strDrink}</h3>
            {/* <p>{drink.strInstructions}</p> */}
        </div>
    );
}
