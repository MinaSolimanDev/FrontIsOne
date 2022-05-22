import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./common/assets/jss/appStyles";
import { Provider } from "react-redux";
import { store } from "./config/state/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AnimatedSuccessModal from './common/components/modals/SWASuccess'
// Components
import Login from "./auth/components/login/Login";
import App from "./app/";

import "./common/assets/index.css";

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Switch>
          <Route path="/auth/login" component={Login} />
          <Route path="/" component={App} />
        </Switch>
        <AnimatedSuccessModal title="Category Profile Updated" message="You’ve sucessfully  updated  the category profile"/>
      </Provider>
    </ThemeProvider>

  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
