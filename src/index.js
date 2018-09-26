//React-redux
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
//material-ui
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//Components,reducers,containers
import App from "./containers/App";
import reducer from "./reducers/index";
const theme = createMuiTheme({
  overrides: {
    MuiMenuItem: {
      root: {}
    }
  },
  props: {
    MuiCircularProgress: {},
    MuiButtonBase: {
      disableRipple: true
    }
  }
});
const store = createStore(reducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
