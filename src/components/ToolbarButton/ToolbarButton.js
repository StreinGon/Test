//react-redux
import React, { Component } from "react";
import { Link } from "react-router-dom";
//material-ui
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
//styles
import toolbar_styles from "../../styles/toolbar_styles";
class ToolbarButton extends Component {
  render() {
    const { buttonText, onButtonClicked, classes } = this.props;
    return (
      <MenuItem
        component={Link}
        to={`/${buttonText}`}
        className={classes.Toolbutton}
        variant="raised"
        onClick={onButtonClicked}
      >
        {buttonText}
      </MenuItem>
    );
  }
}

export default withStyles(toolbar_styles)(ToolbarButton);
