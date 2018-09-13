import React from 'react';
import './index.css';

import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Toolbar from './conteiners/Toolbar'
import reducer from './reducers/index'
import { Provider } from 'react-redux'


const store = createStore(reducer,applyMiddleware(thunk))

render(

  <Provider store={store}>
      <Toolbar />

  </Provider>,
  document.getElementById('root'),
  console.log("refresh")

)
   

