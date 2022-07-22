import { combineReducers } from "redux";
import { logReducer } from "./Login/reducer";

export default combineReducers({
    logState: logReducer,
})