//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
//material-ui
import { withStyles } from "@material-ui/core/styles";
//components,containers
import PhotoList from "../components/photoList";
import ToolBar from "../containers/Toolbar";
import Counter from "../containers/Counter";
import FormList from "../components/FormList";
//styles
import main_styles from "../styles/main_styles";
//constans
import { COUNTER_BLOCK } from "../constants/const";
import { FORM_BLOCK } from "../constants/const";
import { PHOTO_BLOCK } from "../constants/const";

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ToolBar />
        <Counter />

        <PhotoList />

        <FormList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toolbar: state.toolbar
  };
}
export default compose(
  withStyles(main_styles),
  connect(mapStateToProps)
)(App);
