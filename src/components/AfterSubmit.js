import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,withRouter } from 'react-router-dom'

class AfterSubmit extends Component {

render() {
    
    console.log()
    return ( 
        <div>
            <h2>Итог</h2>
            <h3>{this.props.location.pathname}</h3> 
            <Link to="/">Main</Link>
        </div>
    )
}


}   
function mapStateToProps (state) {
    return {
        

    }
  };
 export default withRouter(connect(mapStateToProps)(AfterSubmit)); 