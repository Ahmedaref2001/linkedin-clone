import { combineReducers } from "redux";
import { userReducer } from "./userReduser";
import { articleReducer } from "./articleReducer";

export const rootReducer=combineReducers({
    user:userReducer,
    article:articleReducer
})