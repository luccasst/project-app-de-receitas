import React from 'react';
import PropTypes from 'prop-types';

export default function Recommendations({ recomendations }) {
  return (
    <div>
      { recomendations.map(({ strDrinkThumb, strDrink }, index) => (
        <>
          <img
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            src={ strDrinkThumb }
            alt="recomendado"
          />
          <p
            data-testid={ `${index}-recomendation-title` }
          >
            {strDrink}
          </p>
        </>
      )) }
    </div>
  );
}
Recommendations.propTypes = {
  recomendations: PropTypes.node.isRequired,
};
