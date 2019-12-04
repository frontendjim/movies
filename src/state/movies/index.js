import { orderBy } from 'lodash/collection';

export const initialState = {
  list: [],
  loading: false,
};

export const actionTypes = {
  FETCH_MOVIES: 'FETCH_MOVIES',
  FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
};

export default (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES:
      return { ...state, loading: true };

    case actionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: orderBy(action.list, ['popularity'], ['desc']),
      };

    default:
      return state;
  }
};
