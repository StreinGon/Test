//React-redux
import React from "react";
import { Component } from "react";
//material-ui
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//Styles
import todo_styles from "../../styles/todo_styles.js";
class Todo extends Component {
  render() {
    const { todos, classes } = this.props;
    const check = todos;
    const toggle = this.props.execute;
    const fixedPhotos = check.map(function(item, index) {
      return (
        <div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => toggle(item.id)}
                checked={item.completed}
              />
            }
            key={`ToDo${index}`}
            label={item.task}
            className={item.completed ? classes.formControlLabel_style : ""}
          />
        </div>
      );
    });
    return <div className={classes.todo_main_div}>{fixedPhotos}</div>;
  }
}
export default withStyles(todo_styles)(Todo);
