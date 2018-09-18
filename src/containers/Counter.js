//React-redux
import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { bindActionCreators } from "redux";

//material-ui
import "typeface-roboto";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//Actions
import * as counterActions from "../actions/counterActions";
//Styles
import counter_styles from "../styles/counter_styles.js";
//constants
import { INC, DECR } from "../constants/const";
class Counter extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid className={classes.counterGrid}>
        <Typography
          className={classes.counterTest}
          align="left"
          variant="display1"
        >
          Counter {this.props.counter}
        </Typography>
        <Button
          className={classes.counterB}
          variant="extendedFab"
          onClick={this.props.Increment}
        >
          Increment
        </Button>
        <Button
          className={classes.counterB}
          variant="extendedFab"
          onClick={this.props.Decrement}
        >
          Decrement
        </Button>
        <Button
          className={classes.counterB}
          variant="extendedFab"
          onClick={this.props.AsyncInc}
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
    Increment: bindActionCreators(counterActions.Increment, dispatch),
    Decrement: bindActionCreators(counterActions.Decrement, dispatch),
    AsyncInc: () => {
      setTimeout(counterActions.Increment, 1000);
      clearTimeout();
    }
  };
};

export default compose(
  withStyles(counter_styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Counter);
