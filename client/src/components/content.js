import React, { Component } from "react";

import { Route, Switch, Redirect } from 'react-router-dom';

import ContentHome from "./content_home";
import ContentOurTech from "./content_ourTech";
import ContentOurTeam from "./content_ourTeam";
import ContentContactUs from "./content_contactUs";

class Content extends Component {
  render() {
    return (
      <Switch>
        <div className="contents">
          <Route path={`/home`} component={ContentHome} />
          <Route path={`/ourTech`} component={ContentOurTech} />
          <Route path={`/ourTeam`} component={ContentOurTeam} />
          <Route path={`/contactUs`} component={ContentContactUs} />
        </div>
      </Switch>
    );
  }
}

export default Content;
