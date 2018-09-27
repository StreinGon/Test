//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

//material-ui

//components,containers

import TodoList from "../containers/TodoList/TodoList";
//styles

//constans

import { getVisibleTodos } from "../components/Filter";

class App extends Component {
  render() {
    return <p />;
  }
}

function mapStateToProps(state) {
  return {
    toolbar: state.toolbar,
    todos: state.todos,
    filter: state.filter
  };
}
export default compose(connect(mapStateToProps))(App);
