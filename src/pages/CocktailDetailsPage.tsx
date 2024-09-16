import GlobalStateContext from "../context/GlobalStateContext";
import { useContext } from "react";
import CocktailCard from "../components/CocktailCard";
import { Drink } from "../type";

export default function CocktailDetailsPage() {
    const { selectedCocktail } = useContext(GlobalStateContext);
    if (!selectedCocktail) return;

    const ingredients = Object.keys(selectedCocktail)
        .filter(
            (key) =>
                key.startsWith("strIngredient") &&
                selectedCocktail[key as keyof Drink]
        )
        .map((key) => ({
            ingredient: selectedCocktail[key as keyof Drink],
            measure: selectedCocktail[`strMeasure${key.slice(13)}` as keyof Drink],
        }));

    return (
        <>
            <h2 className="title">{selectedCocktail.strDrink}</h2>
            <article className="cocktail-details">
                <CocktailCard drink={selectedCocktail} />
                <div className="details-text">
                    <div className="details-tags">
                        <p>{selectedCocktail.strCategory}</p>
                        <p>{selectedCocktail.strTags?.split(",").join(", ")}</p>
                        <p>{selectedCocktail.strGlass}</p>
                        <p>{selectedCocktail.strAlcoholic}</p>
                    </div>
                    <section className="ingredients">
                        <h3>Ingredients</h3>
                        {ingredients.map((ing, i) => {
                            return (
                                <p key={i}>
                                    {ing.ingredient}, {ing.measure}
                                </p>
                            );
                        })}
                    </section>
                    <section className="instructions">
                        <h3>Instructions</h3>
                        <p>{selectedCocktail.strInstructions}</p>
                    </section>
                </div>
            </article>
        </>
    );
}
