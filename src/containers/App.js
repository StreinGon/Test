//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
//material-ui

//components,containers
import MyToolBar from "../containers/Toolbar/Toolbar";
import MyMenu from "../components/Menu/Menu";
import TodoList from "../containers/TodoList/TodoList";
//styles

//constans
import { FETCHING } from "../constants/const";
import { getVisibleTodos } from "../components/Filter";

class App extends Component {
  render() {
    return (
      <div>
        <MyMenu />

        <TodoList
          className={
            this.props.toolbar === FETCHING ? "disableElement" : "todoList"
          }
          todoList={getVisibleTodos(this.props.todos, this.props.filter)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toolbar: state.toolbar,
    todos: state.todos,
    filter: state.filter
  };
}
export default compose(
  withRouter,
  connect(mapStateToProps)
)(App);
