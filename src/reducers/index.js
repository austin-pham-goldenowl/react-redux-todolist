import { combineReducers } from "redux";
import todos from "./todos.js";
import logIn from "./logIn.js";

const rootReducer = combineReducers({
  todos,
  logIn
});

export default rootReducer;
