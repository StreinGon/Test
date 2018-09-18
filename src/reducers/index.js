//React-redux
import { combineReducers } from "redux";
//Reducers
import toolbar from "../reducers/toolbar";
import counter from "../reducers/counter";

export default combineReducers({
  toolbar,
  counter
});
