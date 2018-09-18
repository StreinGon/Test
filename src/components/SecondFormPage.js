//React-redux
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "redux";
//material-ui
import { withStyles } from "@material-ui/core/styles";
//Styles
import second_form_page_styles from "../styles/second_form_page_styles";
class SecondFormPage extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.SecondFormPage}>
        <h2>Итог</h2>
        <h3>{this.props.location.pathname}</h3>
        <Link to="/">Close</Link>
      </div>
    );
  }
}
export default compose(
  withRouter,
  withStyles(second_form_page_styles)
)(SecondFormPage);
