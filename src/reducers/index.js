import setQuery from "./query";
import movieList from "./moviesInfo";
import { setShow, setDetail } from "./showScreen";
import movieDetail from "./MovieDetail";
import movieID from "./movieId";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  query: setQuery,
  movieList: movieList,
  showListScreen: setShow,
  showDetailScreen: setDetail,
  movieDetail: movieDetail,
  movieID: movieID,
});

export default allReducers;
