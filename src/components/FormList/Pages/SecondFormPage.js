//React-redux
import React, { Component } from "react";
import { Link } from "react-router-dom";

//material-ui

//Styles
import "../../../styles/style.css";
class SecondFormPage extends Component {
  render() {
    return (
      <div className="secondFormPage">
        <h2>Итог</h2>
        <h3>{this.props.location.pathname}</h3>
        <Link to="/Form">Close</Link>
      </div>
    );
  }
}
export default SecondFormPage;
