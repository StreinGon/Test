import React  from 'react'

import { withRouter } from 'react-router-dom'
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
          <p><label> заголовок: <input type="text" name="zag" value={this.state.zag}
                           onChange={this.onOpisChange}/></label></p>
          <p><label> описание: <input type="text" name="opis" value={this.state.opis}
                            onChange={this.onZagChange}/></label></p>
          <p><label> цена: <input type="text" name="cost" value={this.state.cost}
                            onChange={this.onCostChange}/></label></p>
          <p><label> кол-во: <input type="text" name="count" value={this.state.count}
                            onChange={this.onCountChange}/></label></p>
          <p><input type="submit" value="Submit" /></p>
        
        </form>
      );
    }
  }  

  
  export default withRouter(Form)
 