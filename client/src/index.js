import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/homepage.css";
import reducers from "./reducers";
import Homepage from "./components/homepage";

import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/home" component={Homepage} />
          <Route path="/ourTech" component={Homepage} />
          <Route path="/ourTeam" component={Homepage} />
          <Route path="/contactUs" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

registerServiceWorker();
