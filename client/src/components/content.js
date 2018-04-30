import React, { Component } from "react";

import { Route, Switch, Redirect } from 'react-router-dom';

import ContentHome from "./content_home";
import ContentOverview from "./content_overview";
import ContentTeam from "./content_team";
import ContentContactUs from "./content_contactUs";

class Content extends Component {
  render() {
    return (
      <Switch>
        <div className="contents">
          <Route path={`/home`} component={ContentHome} />
          <Route path={`/overview`} component={ContentOverview} />
          <Route path={`/team`} component={ContentTeam} />
          <Route path={`/contactUs`} component={ContentContactUs} />
        </div>
      </Switch>
    );
  }
}

export default Content;
