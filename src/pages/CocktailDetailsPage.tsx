import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";
import { Drink } from "../type";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/CocktailDetailsPage.css'
import { getCocktailDetails } from "../services/api";


export default function CocktailDetailsPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [cocktail, setCocktail] = useState<Drink | null>(null);

    useEffect(() => {
        if (!id) return;
        async function fetchCocktailDetails(id: string) {
            try {
                const result = await getCocktailDetails(parseInt(id));
                if (result) setCocktail(result);
                else console.error('No cocktail found for this ID');
            } catch (error) {
                console.error('Error fetching cocktail:', error);
            }
        }
        fetchCocktailDetails(id);
    }, [id]);  // id as a dependency to avoid unnecessary re-renders (to ensure that the useEffect only runs when the id changes and not on every re-render.)

    if (!cocktail) return;

    const ingredients = Object.keys(cocktail)
        .filter(
            (key) =>
                key.startsWith("strIngredient") &&
                cocktail[key as keyof Drink]
        )
        .map((key) => ({
            ingredient: cocktail[key as keyof Drink],
            measure:
                cocktail[`strMeasure${key.slice(13)}` as keyof Drink],
        }));

    const handleIngredientClick = (ingredient: string | null) => {
        if (!ingredient) return;
        navigate(`/ingredient/${ingredient}`);
    };

    return (
        <>
            <section className="main-content-container details-page">

                {/* <h2 className="title">{selectedCocktail.strDrink}</h2> */}


                <article className="cocktail-details">

                    <section>
                        <CocktailCard drink={cocktail} />

                        {cocktail.strTags && cocktail.strTags.length > 0 && (
                            <p className="tags">
                                {cocktail.strTags.split(",").map((tag, index) => (
                                    <span key={index} className="tag">#{tag.trim()}</span> // Wrap each tag in a span with a class
                                ))}
                            </p>
                        )}
                    </section>

                    <div className="details-title-container">
                        <div>
                            <h2 className="title">{cocktail.strDrink}</h2>
                            <hr className="title-separator" />
                            <p className="category"><strong>Category:</strong> {cocktail.strCategory}</p>
                            <p><strong>Alcohol Content:</strong> {cocktail.strAlcoholic}</p>

                        </div>


                        <section className="ingredients">
                            <h3>Ingredients</h3>
                            <div className="ingredients-grid">
                                {ingredients.map((ing, i) => (
                                    <>
                                        <a
                                            key={i}
                                            className="ingredient-link ingredient"
                                            onClick={() => handleIngredientClick(ing.ingredient)}
                                        >
                                            {ing.ingredient}
                                        </a>
                                        <span className="measure">{ing.measure}</span>
                                    </>
                                ))}
                            </div>
                        </section>


                        <section className="instructions">
                            <h3>Instructions</h3>
                            <p>{cocktail.strInstructions}</p>
                            <br/>
                            <p><strong>Serve:</strong> in a {cocktail.strGlass}</p>
                        </section>
                    </div>
                </article>
            </section>
        </>
    );
}
