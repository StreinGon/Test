//React-redux
import React from "react";
import { Component } from "react";
//material-ui
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Card from "@material-ui/core/Card";
//Styles
import "../../styles/style.css";
class Todo extends Component {
  render() {
    const { todos } = this.props;
    const check = todos;
    const toggle = this.props.execute;
    const fixedPhotos = check.map(function(item, index) {
      return (
        <Card
          key={`ASf;kc_${index}`}
          className={item.completed ? "test" : "todo"}
        >
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
        </Card>
      );
    });
    return <div className="todo_main_div">{fixedPhotos}</div>;
  }
}
export default Todo;
