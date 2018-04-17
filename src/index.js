import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './style/index.css';
import Homepage from './components/homepage';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </div>
    </BrowserRouter>,
    document.getElementById('root'));

registerServiceWorker();
