import React from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import fetchDrinkRecipes from '../helpers/fetchDrinksRecipes';
import filterFoods from '../helpers/fetchApiFood';
import Recommendations from '../components/RecommendationFood';

function DetailDrink() {
  const NUMBER = 6;
  const params = useParams();
  const [recipeDrink, setRecipe] = React.useState({});
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);
  const [recomendations, setRecomendations] = React.useState([]);

  React.useEffect(() => {
    fetchDrinkRecipes(params.id).then((response) => {
      setIngredients(Object
        .entries(response[0])
        .filter((item) => item[0].match(/(strIngredient)/) && item[1])
        .map((ingredient) => ingredient[1]));
      setMeasures(Object
        .entries(response[0])
        .filter((item) => item[0].match(/(strMeasure)/) && item[1] !== ' ')
        .map((measure) => measure[1]));
      setRecipe({ ...response[0] });
    });
    filterFoods('', '').then((response) => {
      setRecomendations(response);
    });
  }, [params]);

  return (
    <section>
      Detail Drink
      <img
        data-testid="recipe-photo"
        alt="recipe"
        src={ recipeDrink.strDrinkThumb }
      />
      <h1 data-testid="recipe-title">{recipeDrink.strDrink}</h1>
      <button
        type="button"
        data-testid="share-btn"
      >
        <img src={ shareIcon } alt="compartilhar" />
      </button>
      <button
        type="button"
        data-testid="favorite-btn"
      >
        <img src={ blackHeartIcon } alt="favorite" />
      </button>
      <p data-testid="recipe-category">{recipeDrink.strAlcoholic}</p>
      <div>
        <ul>
          {
            ingredients.map((ingredient, index) => (
              <li
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                {`${ingredient} - ${measures[index]}`}
              </li>
            ))
          }
        </ul>
      </div>
      <p data-testid="instructions">{recipeDrink.strInstructions}</p>
      <div data-testid="0-recomendation-card">
        recomendadas
      </div>
      <Recommendations
        title="Drinks"
        recomendations={ recomendations.slice(0, NUMBER) }
      />
      <button
        style={ { bottom: '0px', position: 'fixed' } }
        type="button"
        data-testid="start-recipe-btn"
      >
        Start Recipe
      </button>
    </section>
  );
}

export default DetailDrink;
