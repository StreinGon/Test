//React-redux
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
//Reducers
import toolbar from "../reducers/toolbar";
import counter from "../reducers/counter";
import todos from "../reducers/todos";
import filter from "../reducers/filter";

export default combineReducers({
  toolbar,
  counter,
  todos,
  filter,
  form: formReducer
});
