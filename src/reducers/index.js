//React-redux
import { combineReducers } from "redux";
//Reducers
import toolbar from "../reducers/toolbar";
import counter from "../reducers/counter";
import todos from "../reducers/todos";
import filter from "../reducers/filter";
export default combineReducers({
  toolbar,
  counter,
  todos,
  filter
});
