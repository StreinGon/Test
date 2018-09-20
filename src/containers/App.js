//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

//material-ui
import { withStyles } from "@material-ui/core/styles";
//components,containers

import PhotoList from "../components/photoList";
import ToolBar from "../containers/Toolbar";
import Counter from "../containers/Counter";
import FormList from "../components/FormList";
import TodoList from "../containers/TodoList";
//styles
import main_styles from "../styles/main_styles";
//constans
import { COUNTER_BLOCK } from "../constants/const";
import { FORM_BLOCK } from "../constants/const";
import { PHOTO_BLOCK, TODO_BLOCK } from "../constants/const";
import { getVisibleTodos } from "../components/Filter";

class App extends Component {
  render() {
    console.log("rednder");

    const { classes } = this.props;
    return (
      <div>
        <ToolBar />
        <Counter
          className={
            this.props.toolbar === COUNTER_BLOCK
              ? classes.counterGrid
              : classes.disableElement
          }
        />
        <PhotoList
          className={
            this.props.toolbar === PHOTO_BLOCK
              ? classes.mainDivOfPhotoList
              : classes.disableElement
          }
        />
        <FormList
          className={
            this.props.toolbar === FORM_BLOCK
              ? classes.formList
              : classes.disableElement
          }
        />
        <TodoList
          className={
            this.props.toolbar === TODO_BLOCK
              ? classes.formList
              : classes.disableElement
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
  withStyles(main_styles),
  connect(mapStateToProps)
)(App);
