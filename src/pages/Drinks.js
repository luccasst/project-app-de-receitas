import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import filterDrinks from '../helpers/fetchApiDrinks';
import SearchContext from '../Context/SearchContext';
import Cards from '../Components/Cards';

function Drinks() {
  const numberDrink = 12;
  const [drinks, setDrinks] = useState([]);
  const { globalFilters } = useContext(SearchContext);
  const history = useHistory();
  useEffect(() => {
    console.log(globalFilters);
    filterDrinks(globalFilters.inputValue, globalFilters.type).then((response) => {
      console.log(response);
      if (response.length === 1) {
        history.push(`/drinks/${response[0].idDrink}`);
      } else if (response.length > 1) {
        setDrinks(response); 
      } else { global.alert("`Sorry, we haven't found any recipes for these filters.") }
    });
  }, [globalFilters, history]);
  return (
    <main>
      <Header title="Drinks" search />
      {drinks.length > 0 && drinks
        .map((drink, index) => (<Cards
          key={ drink.idDrink }
          index={ index }
          imgSrc={ drink.strDrinkThumb }
          name={ drink.strDrink }
        />)).slice(0, numberDrink) }
    </main>
  );
}

export default Drinks;
