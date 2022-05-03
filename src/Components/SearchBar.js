import React, { useState, useContext } from 'react';
import SearchContext from '../Context/SearchContext';

function SearchBar() {
  const {
    /* globalFilters, */
    setGlobalFilters,
  } = useContext(SearchContext);
  const [filters, setFilters] = useState({
    inputValue: '',
    type: 'ingredient',
  });

  const handleChange = ({ target }) => {
    setFilters({ ...filters, [target.name]: target.value });
  };

  const handleClick = () => {
    const { inputValue, type } = filters;
    if (inputValue.length > 1 && type === 'letter') {
      global.alert('Your search must have only 1 (one) character');
    } else {
      setGlobalFilters(filters);
    }
  };

  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        name="inputValue"
        onChange={ handleChange }
      />
      <label
        htmlFor="ingredientSearch"
      >
        ingredient
        <input
          value="ingredient"
          id="ingredientSearch"
          type="radio"
          name="type"
          data-testid="ingredient-search-radio"
          onChange={ handleChange }
        />
      </label>
      <label
        htmlFor="radioButton"
      >
        name
        <input
          value="name"
          id="radioButton"
          type="radio"
          data-testid="name-search-radio"
          name="type"
          onChange={ handleChange }
        />
      </label>
      <label
        htmlFor="firstLetter"
      >
        Letter
        <input
          value="letter"
          id="firstLetter"
          type="radio"
          name="type"
          onChange={ handleChange }
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
        onClick={ handleClick }
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
