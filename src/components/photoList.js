import React, { Component } from 'react'
import "./photoList.css"
export var photos = [
    {
        title: 'IMG1',
        Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO5Gi3MseEYRvGb73iblkxeVqKEKLW1PRoERejdLDnDt1SG_hobg'
    },
    {
        title: 'IMG2',
        Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYRqQpVc7E0heF5pKqOT1LKtESGjW65A80jJ_n8GfVg7azT-3c'
    },
    {
        title: 'IMG3',
        Photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuOBfpFrzQPJIHEaWnDF-iv_plAe2gk9pXt2tHCDtW8p6kMuBw'
    }
];
class photoList extends Component {

    render() {
            
        console.log("renderLIst")
      
        var fixedPhoto=photos.map(function(item,index){
            return(
                <div key={index}>
                <p>{item.title}:</p>
                
                <img src={item.Photo} alt="Error"/>
           
                </div>  
            )
        })
        return ( 

            <div className="photoList">{fixedPhoto}</div>
        )
    }
}  
 
 export default photoList;  
 
 
