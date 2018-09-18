//react-redux
import React, { Component } from "react";
//material-ui
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
//styles
import toolbar_styles from "../styles/toolbar_styles";
class ToolbarButton extends Component {
  render() {
    const { buttonText, OnButtonClicked, classes } = this.props;
    return (
      <Button
        className={classes.Toolbutton}
        variant="raised"
        onClick={OnButtonClicked}
      >
        {buttonText}
      </Button>
    );
  }
}

export default withStyles(toolbar_styles)(ToolbarButton);
