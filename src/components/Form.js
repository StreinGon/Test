import React  from 'react'
import TextField from '@material-ui/core/TextField';
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';
class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {zag: '', opis: '',cost: '',count: ''};

      this.onOpisChange = this.onOpisChange.bind(this);
      this.onZagChange = this.onZagChange.bind(this);
      this.onCostChange = this.onCostChange.bind(this);
      this.onCountChange = this.onCountChange.bind(this);
      this.onCl = this.onCl.bind(this);
    }

    onCl(event){
      if(this.state.zag!==""&&this.state.opis!==""&&this.state.cost!==""&&this.state.count!==""&&isFinite(this.state.cost)&&isFinite(this.state.count)){
        this.props.history.push(`${this.state.zag}${this.state.opis}${this.state.cost}${this.state.count}`);
      }
      else{
        alert("Заполните все поля в соотвветсвии с их предназначение!");
      }
      event.preventDefault();
    }
  

    onOpisChange(event){
      this.setState({zag: event.target.value});
    }

    onZagChange(event) {
      this.setState({opis: event.target.value});
    }
    onCostChange(event) {
        this.setState({cost: event.target.value});
      }
    onCountChange(event) {
        this.setState({count: event.target.value});
    }

    render() {
      return (
        <form onSubmit={this.onCl}>
    
          <TextField  label="Заголовок" name="zag" value={this.state.zag}
                           onChange={this.onOpisChange}/><br/>
          <TextField label="Описание" name="opis" value={this.state.opis}
                            onChange={this.onZagChange}/><br/>
          <TextField label="Цена" name="cost" value={this.state.cost}
                            onChange={this.onCostChange}/><br/>
          <TextField label="Количество" name="count" value={this.state.count}
                            onChange={this.onCountChange}/><br/>
          <Button type="submit"  >Подтвердить</Button>
        
        </form>
      );
    }
  }  

  
  export default withRouter(Form)
 