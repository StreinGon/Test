//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { Route } from "react-router-dom";
//material-ui
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
//components,containers
import PhotoList from "../components/PhotoList/photoList";
import MyToolBar from "../containers/Toolbar/Toolbar";
import Counter from "../containers/Counter/Counter";
import FormList from "../components/FormList/FormList";
import TodoList from "../containers/TodoList/TodoList";
//styles
import main_styles from "../styles/main_styles";
//constans
import { FETCHING } from "../constants/const";
import { getVisibleTodos } from "../components/Filter";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyToolBar />
        <Route
          path="/Counter"
          render={() => (
            <Counter
              className={
                this.props.toolbar === FETCHING
                  ? classes.disableElement
                  : classes.counterGrid
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
                  ? classes.disableElement
                  : classes.mainDivOfPhotoList
              }
            />
          )}
        />
        <Route
          path="/Form"
          render={() => (
            <FormList
              className={
                this.props.toolbar === FETCHING
                  ? classes.disableElement
                  : classes.formList
              }
            />
          )}
        />
        <Route
          path="/Todo"
          render={() => (
            <TodoList
              className={
                this.props.toolbar === FETCHING
                  ? classes.disableElement
                  : classes.todoList
              }
              todoList={getVisibleTodos(this.props.todos, this.props.filter)}
            />
          )}
        />
        <CircularProgress
          size={150}
          className={
            this.props.toolbar === FETCHING
              ? classes.progress
              : classes.disableElement
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
  withStyles(main_styles),
  connect(mapStateToProps)
)(App);
