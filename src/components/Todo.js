//React-redux
import React from "react";
import { Component } from "react";
//material-ui

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//Components

class Todo extends Component {
  render() {
    const { todos } = this.props;
    const check = todos;
    const Toggle = this.props.Execute;
    const fixedPhotos = check.map(function(item, index) {
      return (
        <div>
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => Toggle(item.id)}
                checked={item.completed}
              />
            }
            key={`ToDo${index}`}
            label={item.task}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          />
        </div>
      );
    });
    return (
      <div
        style={{
          overflow: "auto",
          position: "relative",
          left: 70,
          height: 460,
          width: 530
        }}
      >
        {fixedPhotos}
      </div>
    );
  }
}
export default Todo;
