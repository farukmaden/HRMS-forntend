import { combineReducers } from "redux";
import favoriteJobPostingReducer from "./reducers/favoriteJobPostingReducer";

const rootReducer=combineReducers({
    favorite: favoriteJobPostingReducer
})

export default rootReducer;