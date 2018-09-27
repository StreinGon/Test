//React-redux
import React from "react";
import { Component } from "react";
//material-ui
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//Styles
import "../../styles/style.css";
class Todo extends Component {
  render() {
    const { todos } = this.props;
    const check = todos;
    const toggle = this.props.execute;
    const fixedPhotos = check.map(function(item, index) {
      return (
        <div key={`ASf;kc_${index}`} className="todo">
          <FormControlLabel
            label={item.task}
            className={item.completed ? "formControlLabel_style" : ""}
            control={
              <Checkbox
                onChange={() => toggle(item.id)}
                checked={item.completed}
              />
            }
          />
        </div>
      );
    });
    return <div className="todo_main_div">{fixedPhotos}</div>;
  }
}
export default Todo;
