//React-redux
import { combineReducers } from "redux";

//Reducers

import todos from "../reducers/todos";
import filter from "../reducers/filter";

export default combineReducers({
  todos,
  filter
});
