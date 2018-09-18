//React-redux
import React from "react";
import { Component } from "react";
import { Switch } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
//material-ui
import { withStyles } from "@material-ui/core/styles";
//Components
import FirstFormPage from "../components/FirstFormPage";
import SecondFormPage from "../components/SecondFormPage";
//Styles
import form_styles from "../styles/form_styles";
class FormList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.formList}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={FirstFormPage} />
            <Route path="/:form" component={SecondFormPage} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default withStyles(form_styles)(FormList);
