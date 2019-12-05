export const initialState = {
  minRating: 3,
  selectedGenres: [],
};

export const actionTypes = {
  SET_RATING: 'SET_RATING',
  SET_GENRE: 'SET_GENRE',
  RESET_FILTERS: 'RESET_FILTERS',
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.SET_RATING:
      return { ...state, minRating: action.minRating };

    case actionTypes.SET_GENRE:
      const selectedGenres = addOrRemoveGenre(state.selectedGenres, action.id);

      return { ...state, selectedGenres };

    case actionTypes.RESET_FILTERS:
      return { ...state, ...initialState };

    default:
      return state;
  }
};

function addOrRemoveGenre(currentGenres, id) {
  if (id === 'all') {
    return [];
  }

  return currentGenres.includes(parseInt(id))
    ? currentGenres.filter(genreId => genreId !== parseInt(id))
    : [...currentGenres, parseInt(id)];
}
