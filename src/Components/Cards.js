import React from 'react';
import PropTypes from 'prop-types';

function Cards({ index, imgSrc, name }) {
  return (
    <div data-testid={ `${index}-recipe-card` }>
      <img
        data-testid={ `${index}-card-img` }
        src={ imgSrc }
        alt="imgInfo"
      />
      <h3
        data-testid={ `${index}-card-name` }
      >
        { name }
      </h3>
    </div>
  );
}

Cards.propTypes = {
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  index: PropTypes.string,
}.isRequired;

export default Cards;
