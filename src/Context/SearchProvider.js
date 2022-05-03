import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchContext from './SearchContext';

function SearchProvider({ children }) {
  const [globalFilters, setGlobalFilters] = useState({
    inputValue: '',
    type: '',
  });

  return (
    <SearchContext.Provider
      value={ { globalFilters, setGlobalFilters } }
    >
      { children }
    </SearchContext.Provider>
  );
}
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchProvider;
