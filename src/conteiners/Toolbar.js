import  { Component } from 'react'
import ToolbarButton from '../components/ToolbarButton'
import "../components/ToolbarButton.css"
import { connect } from 'react-redux'
import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom'
import PhotoList from '../components/photoList'
import Form from '../components/Form'
import Button from '@material-ui/core/Button';
import AfterSubmit from '../components/AfterSubmit'
import {Switch} from 'react-router'; 
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  
    counterB: {
 
      height: 40,
      width: 150,
      margin:3,
      color:'yellow',
      background:'blue',

    },
    counterTest:{
        height: 40,
        width: 250,
        margin:3,
        color:'blue',

    },
    counterGrid:{
        padding: '0 200px',
        height: 240,
        width: 250,
        
        

    },
    formList:{
        background:"white",
        height: 240,
        width: 200,
        borderRadius: 25,
        left: 0,
    }
  });
 class Toolbar extends Component{
    
    render(){
        const { classes } = this.props;
        return(
            <div>
                <div >
                    <ToolbarButton  str="Counter" OnBC={this.props.Main} /><br/>
                    <ToolbarButton str="Photos"OnBC={this.props.List}/><br/>
                    <ToolbarButton str="Form" OnBC={this.props.Users}/><br/>
   
                </div>
                <Grid className={this.props.toolbar==="MAIN"?classes.counterGrid:"none"}>
                    <Typography className={classes.counterTest} align="left" variant="display1" >Counter {this.props.counter}</Typography>
                    <Button className={classes.counterB} variant="extendedFab" onClick={this.props.Increment}>Increment</Button>
                    <Button className={classes.counterB} variant="extendedFab" onClick={this.props.Decrement}>Decrement</Button>
                    <Button className={classes.counterB} variant="extendedFab" onClick={this.props.AsyncInc}>Async Inc</Button>
                </Grid>
                <div className={this.props.toolbar==="LIST"?"list":"none"}>
                
                    <PhotoList  />
                </div>
                <div className={this.props.toolbar==="USERS"?classes.formList:"none"}>
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

export default  withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Toolbar))
