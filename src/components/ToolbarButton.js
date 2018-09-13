import React, { Component } from 'react'



class ToolbarButton extends Component {

render() {
    const { str,OnBC } = this.props
    return ( 
        <button className="tb" onClick={OnBC}>
        {
            str
        }
        </button>
    )
}


}   
 
 export default ToolbarButton;  
    