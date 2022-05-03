import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Components/Header';
import filterFoods from '../helpers/fetchApiFood';
import SearchContext from '../Context/SearchContext';

function Food() {
  const { globalFilters } = useContext(SearchContext);
  const history = useHistory();
  useEffect(() => {
    console.log(globalFilters);
    filterFoods(globalFilters.inputValue, globalFilters.type).then((response) => {
      console.log(response);
      if (response.length === 1) {
        history.push(`/foods/${response[0].idMeal}`);
      }
    });
  }, [globalFilters, history]);

  return (
    <main>
      <Header title="Foods" search />
    </main>
  );
}

export default Food;
