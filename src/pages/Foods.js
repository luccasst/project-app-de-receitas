import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import filterFoods from '../helpers/fetchApiFood';
import SearchContext from '../Context/SearchContext';
import Cards from '../Components/Cards';

function Food() {
  const numberFood = 12;
  const [foods, setFoods] = useState([]);
  const { globalFilters } = useContext(SearchContext);
  const history = useHistory();
  useEffect(() => {
    console.log(globalFilters);
    filterFoods(globalFilters.inputValue, globalFilters.type).then((response) => {
      console.log(response);
      if (!response) {
        global.alert('Sorry, we haven\'t found any recipes for these filters.');
      } else if (response.length === 1) {
        history.push(`/foods/${response[0].idMeal}`);
      } else {
        setFoods(response);
      }
    });
  }, [globalFilters, history]);

  return (
    <main>
      <Header title="Foods" search />
      {foods.length > 0 && foods
        .map((food, index) => (<Cards
          key={ food.idMeal }
          index={ index }
          imgSrc={ food.strMealThumb }
          name={ food.strMeal }
        />)).slice(0, numberFood) }
    </main>
  );
}

export default Food;
