import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ErrorBoundry from "./component/error-boundry/error-boundry";

import App from "./component/app/app";

import "./index.css";

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App />
            </Router>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")
);
