import { useParams } from "react-router-dom";

export default function IngredientDetailsPage() {
    const { ingredient } = useParams<{ ingredient: string }>();

    return (
        <>
            <h2>Ingredient Details Page</h2>
            <p>{ingredient}</p>
        </>
    );
}
