import React, { Component } from 'react'

import { Link,withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    
      Toolbutton: {
        height: 240,
        width: 200,
        color: 'black',
        borderRadius: 25,
        left: 0,
        position:"absolute",
        background: 'white',
        boxShadow: '0 3px 3px 3px rgba(255, 105, 135, .3)',
      },
    
      
    });
class AfterSubmit extends Component {

render() {
    const { classes } = this.props
    console.log()
    return ( 
        <div className={classes.Toolbutton}>
            <h2>Итог</h2>
            <h3>{this.props.location.pathname}</h3> 
            <Link to="/">Close</Link>
        </div>
    )
}


}   

 export default withStyles(styles)(withRouter((AfterSubmit))); 