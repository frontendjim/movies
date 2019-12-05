import React, { createContext, useReducer } from 'react';

import reducer, { initialState, actionTypes } from './reducer';

export const FilterContext = createContext(null);

export default ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    setRating: minRating =>
      dispatch({ type: actionTypes.SET_RATING, minRating }),
    setGenre: id => dispatch({ type: actionTypes.SET_GENRE, id }),
    resetFilters: () => dispatch({ type: actionTypes.RESET_FILTERS }),
  };

  return (
    <FilterContext.Provider value={{ ...state, actions }}>
      {children}
    </FilterContext.Provider>
  );
};
