import * as actionTypes from "../constants/moviesConstants";

export const getMoviesReducers = (state = { movies: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_REQUEST:
      return {
        loading: true,
        movies: [],
      };
    case actionTypes.GET_MOVIES_SUCCESS:
      return {
        loading: false,
        movies: action.payload,
      };
    case actionTypes.GET_MOVIES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
