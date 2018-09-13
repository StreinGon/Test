import {photos} from '../components/photoList'






export default (state=photos , action) => {
    switch (action.type) {
      case 'AddPh':{
    
        var img1={title:prompt('Введите название'),Photo:prompt('Введите url')}
        if(img1.title!==""&&img1.Photo!==""&&img1.title!==null&&img1.Photo!==null){
          state=state.push(img1)
          console.log("adaph")
        }
        else{
          alert("Одно из значений введенно не корректно")
        }
        return state
      }
      case 'DeletePh':{
        var img={title:prompt('Введите название')}
        var func=img2=>{
          for(var i=0;i<state.length;i++){
            if(state[i].title===img.title){
              return state.splice(i,1)
            }
          }
        }
        state=func(img)

 
        return state
      }
      default:
        return state
    }
  }