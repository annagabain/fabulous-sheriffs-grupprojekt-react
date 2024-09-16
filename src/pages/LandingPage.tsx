import { useEffect, useState, useContext } from 'react';
import GlobalStateContext from '../context/GlobalStateContext';
import { Drink } from '../type';
import { getRandomCocktail } from '../services/api';
import CocktailCard from '../components/CocktailCard';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'


export default function LandingPage() {
    // State to store the fetched random cocktail
    const [randomCocktail, setRandomCocktail] = useState<Drink | null>(null);

    // Destructure the global context to use the setSelectedCocktail function
    const { setSelectedCocktail } = useContext(GlobalStateContext);

    // Hook to handle navigation
    const navigate = useNavigate(); 

    // Function to fetch a random cocktail and set it in the local state
    const fetchNewRandomCocktail = async () => {
        try {
            // Fetch a new random cocktail from the API
            const cocktail = await getRandomCocktail();
            // Update the state with the fetched cocktail
            setRandomCocktail(cocktail);
        } catch (error) {
            console.error("Failed to fetch random cocktail:", error);
        }
    };

    // useEffect hook to fetch a random cocktail when the component mounts
    useEffect(() => {
        fetchNewRandomCocktail(); // Trigger API call to fetch a cocktail on first render
    }, []);

    const handleViewDetails = () => {
        if (randomCocktail) {
            // Set the selected cocktail in global state
            setSelectedCocktail(randomCocktail); 
            // Navigate to the details page using the cocktail's ID
            navigate(`/cocktail/${randomCocktail.idDrink}`);
        }
    };

    return (
        <section className='random-cocktail-container'>
            {/* Conditional rendering: to make sure that the cocktail card is only rendered when randomCocktail is not null */}
            {randomCocktail && (
                <>
                    <section className='cocktail-card'>
                        <CocktailCard drink={randomCocktail} />
                        <button onClick={handleViewDetails} className='view-more'>
                            View Details
                        </button>
                        <button onClick={fetchNewRandomCocktail} className='show-another-cocktail'>Show Another Cocktail</button>
                    </section>
                </>
            )}
        </section>
    );
}