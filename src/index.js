import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from "./reducers";
import Homepage from './components/homepage';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
    document.getElementById('root'));

registerServiceWorker();
