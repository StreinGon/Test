export default (state='' , action) => {
    switch (action.type) {
      case 'MAIN':{
        state="MAIN"
        return state
      }
      case 'LIST':{
        state="LIST"
        return state
      }
      case 'USERS':
      {
        state="USERS"
        return state
      }
      default:
        return state
    }
  }