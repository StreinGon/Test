export default (state=0 , action) => {
    switch (action.type) {
      case 'Add':{
    
        return state+1
      }
      case 'De':{
        return state-1
      }
      default:
        return state
    }
  }