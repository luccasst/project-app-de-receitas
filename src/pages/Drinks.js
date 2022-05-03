import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import filterDrinks from '../helpers/fetchApiDrinks';
import SearchContext from '../Context/SearchContext';

function Drinks() {
  const { globalFilters } = useContext(SearchContext);
  const history = useHistory();
  useEffect(() => {
    console.log(globalFilters);
    filterDrinks(globalFilters.inputValue, globalFilters.type).then((response) => {
      console.log(response);
      if (response.length === 1) {
        history.push(`/drinks/${response[0].idDrink}`);
      }
    });
  }, [globalFilters, history]);
  return (
    <main>
      <Header title="Drinks" search />
      <div>Drinks</div>
    </main>
  );
}

export default Drinks;
