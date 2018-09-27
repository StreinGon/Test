//React-redux
import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//Components,reducers,containers

import reducer from "./reducers/index";
import TodoList from "./containers/TodoList/TodoList";

const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <TodoList className="todoList" />
  </Provider>,
  document.getElementById("root")
);
