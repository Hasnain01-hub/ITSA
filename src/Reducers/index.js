import { combineReducers } from "redux";
import { userReducer } from "./useReducers";


const rootReducer = combineReducers({
    user:userReducer,
});

export default rootReducer;