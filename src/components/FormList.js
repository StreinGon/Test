//React-redux
import React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";

//Components
import FirstFormPage from "../components/FirstFormPage";
import SecondFormPage from "../components/SecondFormPage";
class FormList extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <Route exact path="/" component={FirstFormPage} />
        <Route exact path="/:form" component={SecondFormPage} />
      </div>
    );
  }
}
export default FormList;
