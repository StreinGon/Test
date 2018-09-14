import React, { Component } from 'react'
import "./photoList.css"

import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class photoList extends Component {
    constructor(props){
        super(props);
        this.state={
            photos:[
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
            ]
        };
        this.AddPh=this.AddPh.bind(this);
        this.DeletePh=this.DeletePh.bind(this);
    }
    
    DeletePh(){
        let img={title:prompt('Введите название')}      
        this.setState({ photos:this.state.photos.filter(photo=>photo.title!==img.title)})
    }
    AddPh(){
        let img1={title:prompt('Введите название'),Photo:prompt('Введите url')}
        if(img1.title!==""&&img1.Photo!==""&&img1.title!==null&&img1.Photo!==null){
 
        
        this.setState({ photos: this.state.photos.concat(img1)});
        }
        else{
          alert("Одно из значений введенно не корректно")
           
        }
    }
    render() {
      
        let check=this.state.photos
        let fixedPhoto=check.map(function(item,index){
            return(
                <div key={index}>

                <p>{item.title}:</p>  

                <img src={item.Photo} alt="Error"/>  
                  
                </div>  
            )
        })
        return ( 
            <div>
            <IconButton  variant="fab" color="primary"  onClick={this.DeletePh}><DeleteIcon /></IconButton>
            <IconButton  variant="fab" color="primary"  onClick={this.AddPh}><AddIcon /></IconButton>
            <div className="photoList">{fixedPhoto}</div>
            </div>
        )
    }
}  
 
 export default  (photoList);  
 
 
