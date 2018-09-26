//react-redux
import React, { Component } from "react";
import { Link } from "react-router-dom";
//material-ui
import Tab from "@material-ui/core/Tab";

//styles
import "../../styles/style.css";
class ToolbarButton extends Component {
  render() {
    const { buttonText, onButtonClicked, handle } = this.props;
    return (
      <Tab
        label={`${buttonText}`}
        component={Link}
        to={`/${buttonText}`}
        className="Toolbutton"
        variant="raised"
        onClick={onButtonClicked && handle}
      />
    );
  }
}

export default ToolbarButton;
