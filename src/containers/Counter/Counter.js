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
import * as counterActions from "D:/Projects/JS/src/actions/counterActions";
//Styles
import counter_styles from "../../styles/counter_styles.js";
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
    const { classes } = this.props;
    return (
      <Grid className={this.props.className}>
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
          onClick={this.props.increment}
        >
          Increment
        </Button>
        <Button
          className={classes.counterB}
          variant="extendedFab"
          onClick={this.props.decrement}
        >
          Decrement
        </Button>
        <Button
          className={classes.counterB}
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
  withStyles(counter_styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Counter);
