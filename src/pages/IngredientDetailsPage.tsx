import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCocktailsByIngredient, getIngredientByName } from "../services/api";
import { Drink, IngredientDetails } from "../type";
import '../styles/IngredientDetailsPage.css'


export default function IngredientDetailsPage() {
    const { ingredient } = useParams<{ ingredient: string }>();
    const [ingredientDetails, setIngredientDetails] =
        useState<IngredientDetails>();
    const [filteredDrinks, setFilteredDrinks] = useState<Drink[]>();
    const navigate = useNavigate();

    useEffect(() => {
        if (!ingredient) return;
        try {
            const getDetails = async () => {
                const result = await getIngredientByName(ingredient);
                if (result) {
                    const ing: IngredientDetails = {
                        id: result.idIngredient,
                        ingredientName: result.strIngredient,
                        description: result.strDescription,
                        type: result.strType,
                        alcohol: result.strAlcohol,
                        image: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`,
                    };
                    setIngredientDetails(ing);
                }
            };
            const getFiltered = async () => {
                const result = await getCocktailsByIngredient(ingredient);
                if (result) setFilteredDrinks(result);
            };
            getDetails();
            getFiltered();
        } catch (error) {
            console.error(error);
        }
    }, []);

    if (!ingredientDetails) return;

    return (
        <>
            <section className="main-content-container">
                <section className="ingredient-details">
                    <img src={ingredientDetails.image} className="ingredient-image" alt="Ingredient" />
                    <div>
                        <h2>{ingredientDetails.ingredientName}</h2>
                        <p>Type: {ingredientDetails.type}</p>
                        <p>Contains alcohol: {ingredientDetails.alcohol}</p>
                        <p className="ingredient-description">
                            {ingredientDetails.description}
                        </p>
                    </div>
                </section>
                <section className="ingredient-drink-list">
                    {filteredDrinks?.map((drink, i) => (
                        <span
                            className="ingredient-drink"
                            key={i}
                            onClick={() => navigate(`/cocktail/${drink.idDrink}`)}
                        >
                            <img
                                className="ingredient-drink-img"
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                            />
                            <p>{drink.strDrink}</p>
                        </span>
                    ))}
                </section>
            </section>
        </>
    );
}
