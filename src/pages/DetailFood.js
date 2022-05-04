import React from 'react';
import { useParams } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import fetchFoodRecipes from '../helpers/fetchFoodRecipes';
import filterDrinks from '../helpers/fetchApiDrinks';
import Recommendations from '../components/recommendations';

function DetailFood() {
  const NUMBER = 6;
  const params = useParams();
  const [recipeFood, setRecipe] = React.useState({});
  const [ingredients, setIngredients] = React.useState([]);
  const [measures, setMeasures] = React.useState([]);
  const [recomendations, setRecomendaions] = React.useState([]);

  React.useEffect(() => {
    fetchFoodRecipes(params.id).then((response) => {
      setIngredients(Object
        .entries(response[0])
        .filter(([key, value]) => key.match(/(strIngredient)/) && value !== '')
        .map((ingredient) => ingredient[1]));
      setMeasures(Object
        .entries(response[0])
        .filter((item) => item[0].match(/(strMeasure)/) && item[1] !== ' ')
        .map((measure) => measure[1]));
      setRecipe({ ...response[0] });
    });
    filterDrinks('', '').then((response) => {
      setRecomendaions(response);
    });
  }, [params]);
  return (
    <section>
      Detail Food
      <img
        data-testid="recipe-photo"
        src={ recipeFood.strMealThumb }
        alt="recipe"
      />
      <h1 data-testid="recipe-title">{recipeFood.strMeal}</h1>
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
      <p data-testid="recipe-category">{recipeFood.strCategory}</p>
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
      <p data-testid="instructions">{recipeFood.strInstructions}</p>
      <iframe
        data-testid="video"
        title="recipe video"
        width="320"
        height="240"
        src={ recipeFood.strYoutube
          && recipeFood.strYoutube.replace('watch?v=', 'embed/') }
        type="video/mp4"
      />
      <Recommendations recomendations={ recomendations.slice(0, NUMBER) } />
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        iniciar
      </button>
    </section>
  );
}

export default DetailFood;
