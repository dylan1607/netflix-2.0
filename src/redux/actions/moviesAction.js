import * as actionTypes from "../constants/moviesConstants";
import axios from "axios";

export const getMovies = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_MOVIES_REQUEST });
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/550?api_key=014d20aa441d8fca4cfe8c35b47c6e07"
    );
    dispatch({
      type: actionTypes.GET_MOVIES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: actionTypes.GET_MOVIES_FAIL,
      payload: error,
    });
  }
};
