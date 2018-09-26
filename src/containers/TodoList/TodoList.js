//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
//material-ui
import Button from "@material-ui/core/Button";
//Components
import Todo from "../../components/Todo/Todo";
//Actions
import * as todoActions from "../../actions/todoActions";
//Styles
import "../../styles/style.css";
let countOfTodos = 3;
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAddTodoClicked = this.handleAddTodoClicked.bind(this);
  }
  handleAddTodoClicked(event) {
    if (this.input.value !== "") {
      countOfTodos = ++countOfTodos;
      this.props.addTodo(this.input.value, countOfTodos);
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
          style={{ marginLeft: 15, marginTop: 10 }}
        />
        <Button
          type="reset"
          name="AddTodo"
          value="Submit"
          onClick={this.handleAddTodoClicked}
          style={{ background: "lightgreen", top: 5 }}
        >
          Add Todo
        </Button>
        <Todo todos={this.props.todoList} execute={this.props.executeTodo} />

        <Button
          onClick={this.props.all}
          variant="outlined"
          color="secondary"
          style={{ left: 20 }}
        >
          All
        </Button>
        <Button
          onClick={this.props.active}
          variant="outlined"
          color="secondary"
          style={{ left: 20 }}
        >
          Active
        </Button>
        <Button
          onClick={this.props.completed}
          variant="outlined"
          color="secondary"
          style={{ left: 20 }}
        >
          Completed
        </Button>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: bindActionCreators(todoActions.addTodo, dispatch),
    executeTodo: bindActionCreators(todoActions.executeTodo, dispatch),
    all: bindActionCreators(todoActions.filterALL, dispatch),
    active: bindActionCreators(todoActions.filterActive, dispatch),
    completed: bindActionCreators(todoActions.filterCompleted, dispatch)
  };
};

export default compose(
  connect(
    null,
    mapDispatchToProps
  )
)(TodoList);
