//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
//material-ui

import CircularProgress from "@material-ui/core/CircularProgress";
//components,containers
import PhotoList from "../components/PhotoList/photoList";
import MyToolBar from "../containers/Toolbar/Toolbar";
import Counter from "../containers/Counter/Counter";
import FormList from "../components/FormList/FormList";
import TodoList from "../containers/TodoList/TodoList";
//styles
import "../styles/main_styles.scss";
//constans
import { FETCHING } from "../constants/const";
import { getVisibleTodos } from "../components/Filter";

class App extends Component {
  render() {
    return (
      <div>
        <MyToolBar />
        <Route
          path="/Counter"
          render={() => (
            <Counter
              className={
                this.props.toolbar === FETCHING
                  ? "disableElement"
                  : "counterGrid"
              }
            />
          )}
        />
        <Route
          path="/Photos"
          render={() => (
            <PhotoList
              className={
                this.props.toolbar === FETCHING
                  ? "disableElement"
                  : "mainDivOfPhotoList"
              }
            />
          )}
        />
        <Route
          path="/Form"
          render={() => (
            <FormList
              className={
                this.props.toolbar === FETCHING ? "disableElement" : "formList"
              }
            />
          )}
        />
        <Route
          path="/Todo"
          render={() => (
            <TodoList
              className={
                this.props.toolbar === FETCHING ? "disableElement" : "todoList"
              }
              todoList={getVisibleTodos(this.props.todos, this.props.filter)}
            />
          )}
        />
        <CircularProgress
          size={150}
          className={
            this.props.toolbar === FETCHING ? "progress" : "disableElement"
          }
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
