import  { Component } from 'react'
import ToolbarButton from '../components/ToolbarButton'
import "../components/ToolbarButton.css"
import { connect } from 'react-redux'
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import PhotoList from '../components/photoList'
import Form from '../components/Form'
import AfterSubmit from '../components/AfterSubmit'
import {Switch} from 'react-router'; 
 class Toolbar extends Component{

    render(){

        return(
            <div>
                <div >
                    <ToolbarButton  str="Counter" OnBC={this.props.Main} /><br/>
                    <ToolbarButton str="Photos"OnBC={this.props.List}/><br/>
                    <ToolbarButton str="Form" OnBC={this.props.Users}/><br/>
                    <ToolbarButton str="State" OnBC={this.props.STFU}/><br/>
                </div>
                <div className={this.props.toolbar==="MAIN"?"main":"none"}>
                    <h2 className="Counter">Counter {this.props.counter}</h2>
                    <button onClick={this.props.Increment}>Increment</button>
                    <button onClick={this.props.Decrement}>Decrement</button>
                    <button onClick={this.props.AsyncInc}>Async Inc</button>
                </div>
                <div className={this.props.toolbar==="LIST"?"list":"none"}>
                
                    <PhotoList  />
                </div>
                <div className={this.props.toolbar==="USERS"?"users":"none"}>
                    <BrowserRouter >
                        <Switch>
                            <Route  exact  path="/" component={Form} />
                            <Route    path="/:form" component={AfterSubmit} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        ) 
    }
}

function mapStateToProps (state) {
    return {
        toolbar: state.toolbar,
        counter: state.main,
        photo: state.photoListR
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        Main:() =>
        { 
            dispatch({ type: 'MAIN' })
        },
        List:() => {
             dispatch({ type: 'LIST' })
            },
        Users:() => {
            dispatch({ type: 'USERS' })
        },
        STFU:() => {},
        Increment: () => {
            dispatch({type:"Add"});
        },
        Decrement: () => {
            dispatch({type:"De"});
        },
        AsyncInc:()=>{
            setTimeout(function () {
                dispatch({ type: 'Add' })
            }, 1000)
        },
        AddPh: () => {
            dispatch({type:"De"});
            dispatch({type:"Add"});
            dispatch({type:"AddPh"});
        },
        DeletePh: () => {
            dispatch({type:"De"});
            dispatch({type:"Add"});
            dispatch({type:"DeletePh"});
        },

    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Toolbar)
