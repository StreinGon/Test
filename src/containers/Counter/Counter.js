//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { bindActionCreators } from "redux";

//material-ui
import "typeface-roboto";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//Actions
import * as counterActions from "D:/Projects/JS/src/actions/counterActions";
//Styles
import "../../styles/counter_styles.scss";
//constants

class Counter extends Component {
  constructor(props) {
    super(props);
    this.asyncInc = this.asyncInc.bind(this);
  }
  asyncInc() {
    setTimeout(this.props.increment, 1000);
    clearTimeout();
  }
  render() {
    return (
      <Grid className={this.props.className}>
        <Typography className="counterTest">
          Counter {this.props.counter}
        </Typography>
        <Button
          className="counterB"
          variant="extendedFab"
          onClick={this.props.increment}
        >
          Increment
        </Button>
        <Button
          className="counterB"
          variant="extendedFab"
          onClick={this.props.decrement}
        >
          Decrement
        </Button>
        <Button
          className="counterB"
          variant="extendedFab"
          onClick={this.asyncInc}
        >
          Async Inc
        </Button>
      </Grid>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}
const mapDispatchToProps = dispatch => {
  return {
    increment: bindActionCreators(counterActions.increment, dispatch),
    decrement: bindActionCreators(counterActions.decrement, dispatch)
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Counter);
