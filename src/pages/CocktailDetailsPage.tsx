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
    }, []);

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
         <section className="main-content-container">
        
            {/* <h2 className="title">{selectedCocktail.strDrink}</h2> */}


            <article className="cocktail-details">
                <CocktailCard drink={cocktail} />
                <div className="details-text">    
                    <h2 className="title">{cocktail.strDrink}</h2>
                    <div className="details-tags">
                        <p>{cocktail.strCategory}</p>
                        <p>{cocktail.strTags?.split(",").join(", ")}</p>
                        <p>{cocktail.strGlass}</p>
                        <p>{cocktail.strAlcoholic}</p>
                    </div>
                    <section className="ingredients">
                        <h3>Ingredients</h3>
                        {ingredients.map((ing, i) => {
                            return (
                                <p key={i} onClick={() => handleIngredientClick(ing.ingredient)}>
                                    {ing.ingredient}, {ing.measure}
                                </p>
                            );
                        })}
                    </section>
                    <section className="instructions">
                        <h3>Instructions</h3>
                        <p>{cocktail.strInstructions}</p>
                    </section>
                </div>
            </article>
            </section>
        </>
    );
}
