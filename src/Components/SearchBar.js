import React from 'react';

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
      />
      <label
        htmlFor="ingredientSearch"
      >
        Search ingredient
        <input
          id="ingredientSearch"
          type="radio"
          name="nameSearch"
          data-testid="ingredient-search-radio"
        />
      </label>
      <label
        htmlFor="radioButton"
      >
        name
        <input
          id="radioButton"
          type="radio"
          data-testid="name-search-radio"
          name="nameSearch"
        />
      </label>
      <label
        htmlFor="firstLetter"
      >
        Search by Letter
        <input
          id="firstLetter"
          type="radio"
          name="nameSearch"
          data-testid="first-letter-search-radio"
        />
      </label>
      <button
        data-testid="exec-search-btn"
        type="button"
      >
        Buscar
      </button>
    </div>
  );
}

export default SearchBar;
