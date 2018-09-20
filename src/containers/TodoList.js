//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//material-ui

import Button from "@material-ui/core/Button";

//Components

import Todo from "../components/Todo";
//Actions
import * as todoActions from "../actions/todoActions";
let count = 3;
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodoClicked = this.handleAddTodoClicked.bind(this);
  }
  handleAddTodoClicked(event) {
    if (this.input.value !== "") {
      count = ++count;
      this.props.AddTodo(this.input.value, count);
      this.input.value = "";
      event.preventDefault();
    } else {
      alert("Нельзя создать пустую задачу!");
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <input
          ref={input => (this.input = input)}
          name="AddTodo"
          label="ToDo"
          style={{ margin: 5 }}
        />
        <Button
          type="reset"
          name="AddTodo"
          value="Submit"
          style={{
            background: "lightgreen",
            position: "relative",
            left: 5,
            top: 0
          }}
          onClick={this.handleAddTodoClicked}
        >
          Add Todo
        </Button>
        <Todo todos={this.props.todoList} Execute={this.props.ExecuteTodo} />
        <Button onClick={this.props.All}>All</Button>
        <Button onClick={this.props.Active}>Active</Button>
        <Button onClick={this.props.Completed}>Completed</Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    AddTodo: bindActionCreators(todoActions.AddTodo, dispatch),
    ExecuteTodo: bindActionCreators(todoActions.ExecuteTodo, dispatch),
    All: bindActionCreators(todoActions.FilterALL, dispatch),
    Active: bindActionCreators(todoActions.FilterActive, dispatch),
    Completed: bindActionCreators(todoActions.FilterCompleted, dispatch)
  };
};
function mapStateToProps(state) {
  return {};
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
