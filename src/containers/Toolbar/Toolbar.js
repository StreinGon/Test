//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//material-ui
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";

//Components
import ToolbarButton from "../../components/ToolbarButton/ToolbarButton";
//Actions
import * as toolbarActions from "../../actions/toolbarActions";
class MyToolbar extends Component {
  render() {
    return (
      <MenuList style={{ width: 200 }}>
        <ToolbarButton
          buttonText="Counter"
          onButtonClicked={this.props.counter}
        />
        <Divider />
        <ToolbarButton
          buttonText="Photos"
          onButtonClicked={this.props.photolist}
        />
        <Divider />
        <ToolbarButton
          buttonText="Form"
          onButtonClicked={this.props.formlist}
        />
        <Divider />
        <ToolbarButton buttonText="Todo" onButtonClicked={this.props.todo} />
      </MenuList>
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
    counter: bindActionCreators(toolbarActions.counter, dispatch),
    formlist: bindActionCreators(toolbarActions.form, dispatch),
    photolist: bindActionCreators(toolbarActions.photolist, dispatch),
    todo: bindActionCreators(toolbarActions.todolist, dispatch)
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyToolbar);
