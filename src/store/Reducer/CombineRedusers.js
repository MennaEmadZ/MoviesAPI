import { combineReducers } from "redux";
import AddFavouriteReducer  from "./AddFavourite";
import moviesReducer from "./ListMovies"

const favourite = combineReducers({
    AddFavouriteReducer,
    moviesReducer
})
export default favourite;
 