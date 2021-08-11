import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/error-boundary";
import RestoService from "./services/resto-service";
import RestoServiceContext from "./components/resto-service-context";
import store from "./store";

import "./index.scss";

const restoService = new RestoService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <RestoServiceContext.Provider value={restoService}>
        <Router>
          <App />
        </Router>
      </RestoServiceContext.Provider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
