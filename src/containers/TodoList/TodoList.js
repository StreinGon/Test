//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { compose } from "redux";
//material-ui
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import CheckCircle from "@material-ui/icons/CheckCircle";
import EventNote from "@material-ui/icons/EventNote";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";

//Components
import Todo from "../../components/Todo/Todo";
import { getVisibleTodos } from "../..//components/Filter";
//Actions
import * as todoActions from "../../actions/todoActions";
//Styles
import "../../styles/style.css";
let countOfTodos = 3;
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleAddTodoClicked = this.handleAddTodoClicked.bind(this);
  }
  handleAddTodoClicked(event) {
    if (this.state.inputValue !== "") {
      countOfTodos = ++countOfTodos;
      this.props.addTodo(this.state.inputValue, countOfTodos);

      event.preventDefault();
    } else {
      alert("Нельзя создать пустую задачу!");
    }
  }
  render() {
    const todo = this.props.todos;
    const filt = this.props.filter;
    const todoList = getVisibleTodos(todo, filt);

    return (
      <div className={this.props.className}>
        <Typography variant="headline" className="Typ">
          Tasks
        </Typography>
        <div className="InputDiv">
          <TextField
            className="TextFieldTodo"
            label="New Task"
            placeholder="New Task"
            margin="normal"
            variant="outlined"
            name="AddTodo"
            onChange={e => this.setState({ inputValue: e.target.value })}
          />
          <Button
            className="AddButton"
            type="reset"
            name="AddTodo"
            value="Submit"
            variant="contained"
            color="primary"
            onClick={this.handleAddTodoClicked}
          >
            <AddIcon />
            Add Todo
          </Button>
        </div>
        <div className="FilterDiv">
          <Button
            onClick={this.props.all}
            variant="contained"
            className="FilterButton"
          >
            <EventNote />
            All
          </Button>
          <Button
            onClick={this.props.active}
            variant="contained"
            className="FilterButton"
          >
            <CheckBoxOutlineBlank />
            Active
          </Button>
          <Button
            onClick={this.props.completed}
            variant="contained"
            className="FilterButton"
          >
            <CheckCircle />
            Completed
          </Button>
        </div>
        <Todo todos={todoList} execute={this.props.executeTodo} />
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
    mapStateToProps,
    mapDispatchToProps
  )
)(TodoList);
