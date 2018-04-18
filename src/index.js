import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/homepage';
import Instruments from './components/instruments';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/instruments" component={Instruments} />
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
