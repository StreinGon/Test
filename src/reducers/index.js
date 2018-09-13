
  import { combineReducers } from 'redux'
  import toolbar from '../reducers/toolbar'
  import main from '../reducers/main'
  import photoListR from '../reducers/photoListR'


  export default combineReducers({
    toolbar,
    main,
    photoListR
  })