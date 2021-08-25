import { getMoviesReducers } from "./reducers/moviesReducers";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  lists: getMoviesReducers,
});

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
