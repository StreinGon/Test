//react-redux
import React, { Component } from "react";
import { Link } from "react-router-dom";
//material-ui

import MenuItem from "@material-ui/core/MenuItem";
//styles
import "../../styles/toolbar_styles.scss";
class ToolbarButton extends Component {
  render() {
    const { buttonText, onButtonClicked } = this.props;
    return (
      <MenuItem
        component={Link}
        to={`/${buttonText}`}
        className="Toolbutton"
        variant="raised"
        onClick={onButtonClicked}
      >
        {buttonText}
      </MenuItem>
    );
  }
}

export default ToolbarButton;
