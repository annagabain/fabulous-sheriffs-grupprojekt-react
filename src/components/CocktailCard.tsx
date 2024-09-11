import { Drink } from '../type';

export default function CocktailCard({ drink }: { drink: Drink }) {
    return (
        <div className="card">
            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="card-image" />
            <h3>{drink.strDrink}</h3>
            {/* <p>{drink.strInstructions}</p> */}
        </div>
    );
}
