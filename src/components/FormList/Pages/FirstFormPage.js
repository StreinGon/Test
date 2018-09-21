//react-redux
import React from "react";

//material-ui
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//styles
import firsr_form_page_styles from "../../../styles/firsr_form_page_styles";
class FirstFormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { zag: "", opis: "", cost: "", count: "" };
    this.onOpisChange = this.onOpisChange.bind(this);
    this.onZagChange = this.onZagChange.bind(this);
    this.onCostChange = this.onCostChange.bind(this);
    this.onCountChange = this.onCountChange.bind(this);
    this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
  }

  handleSubmitClicked(event) {
    if (
      this.state.zag !== "" &&
      this.state.opis !== "" &&
      this.state.cost !== "" &&
      this.state.count !== "" &&
      isFinite(this.state.cost) &&
      isFinite(this.state.count)
    ) {
      this.props.history.push(
        `Form/${this.state.zag}${this.state.opis}${this.state.cost}${
          this.state.count
        }`
      );
    } else {
      alert("Заполните все поля в соотвветсвии с их предназначение!");
    }
    event.preventDefault();
  }

  onOpisChange(event) {
    this.setState({ zag: event.target.value });
  }

  onZagChange(event) {
    this.setState({ opis: event.target.value });
  }
  onCostChange(event) {
    this.setState({ cost: event.target.value });
  }
  onCountChange(event) {
    this.setState({ count: event.target.value });
  }
  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmitClicked} className={classes.Form}>
        <TextField
          label="Заголовок"
          name="zag"
          value={this.state.zag}
          onChange={this.onOpisChange}
        />
        <br />
        <TextField
          label="Описание"
          name="opis"
          value={this.state.opis}
          onChange={this.onZagChange}
        />
        <br />
        <TextField
          label="Цена"
          name="cost"
          value={this.state.cost}
          onChange={this.onCostChange}
        />
        <br />
        <TextField
          label="Количество"
          name="count"
          value={this.state.count}
          onChange={this.onCountChange}
        />
        <br />
        <Button type="submit">Подтвердить</Button>
      </form>
    );
  }
}

export default withStyles(firsr_form_page_styles)(FirstFormPage);
