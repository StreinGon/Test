import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    
      Toolbutton: {
        height: 40,
        width: 200,
        color: 'white',
        borderRadius: 30,
        margin:5,

        background: 'red',
        boxShadow: '0 10px 10px 10px rgba(255, 105, 135, .3)',
      },
    

    });
class ToolbarButton extends Component {

render() {
    const { str,OnBC,classes } = this.props
    return ( 
        <Button className={classes.Toolbutton}variant="raised"   onClick={OnBC}>
        {
            str
        }
        </Button >
    )
}


}   
 
 export default withStyles(styles)(ToolbarButton);  
    