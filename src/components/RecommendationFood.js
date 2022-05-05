import React from 'react';
import PropTypes from 'prop-types';
import '../styles/carousel.css';

export default function Recommendations({ recomendations }) {
  return (
    <div className="carousel">
      { recomendations.map(({ strMealThumb, strMeal }, index) => (
        <>
          <img
            className="img"
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            src={ strMealThumb }
            alt="recomendado"
          />
          <p
            data-testid={ `${index}-recomendation-title` }
          >
            {strMeal}
          </p>
        </>
      )) }
    </div>
  );
}
Recommendations.propTypes = {
  recomendations: PropTypes.node.isRequired,
};
