//React-redux
import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
//Components
import FirstFormPage from "../FormList/Pages/FirstFormPage";
import SecondFormPage from "../FormList/Pages/SecondFormPage";
class FormList extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Route exact path="/Form" component={FirstFormPage} />
        <Route exact path="/Form/:form" component={SecondFormPage} />
      </div>
    );
  }
}
export default FormList;
