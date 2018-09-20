//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
//Components
import ToolbarButton from "../components/ToolbarButton";

//Constans
import {
  COUNTER_BLOCK,
  FORM_BLOCK,
  PHOTO_BLOCK,
  TODO_BLOCK
} from "../constants/const";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <ToolbarButton
          buttonText="Counter"
          OnButtonClicked={this.props.counter}
        />
        <br />
        <ToolbarButton
          buttonText="Photos"
          OnButtonClicked={this.props.photolist}
        />
        <br />
        <ToolbarButton
          buttonText="Form"
          OnButtonClicked={this.props.formlist}
        />
        <br />
        <ToolbarButton buttonText="Todo" OnButtonClicked={this.props.todo} />
        <br />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    toolbar: state.toolbar
  };
}
const mapDispatchToProps = dispatch => {
  return {
    counter: () => {
      dispatch({ type: COUNTER_BLOCK });
    },
    formlist: () => {
      dispatch({ type: FORM_BLOCK });
    },
    photolist: () => {
      dispatch({ type: PHOTO_BLOCK });
    },
    todo: () => {
      dispatch({ type: TODO_BLOCK });
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);
