import React, { Component } from "react";

import { Route, Switch, Redirect } from 'react-router-dom';

import ContentHome from "./content_home";
import ContentAboutUs from "./content_aboutUs";
import ContentTeam from "./content_team";
import ContentContactUs from "./content_contactUs";
import ContentPEB from "./content_PEB";
import ContentInstruments from "./content_instruments"

class Content extends Component {
  render() {
    return (
      <Switch>
        <div className="contents">
          <Route path={`/home`} component={ContentHome} />
          <Route path={`/aboutUs`} component={ContentAboutUs} />
          <Route path={`/parallumEncodedBeads`} component={ContentPEB} />
          <Route path={`/instruments`} component={ContentInstruments} />
          <Route path={`/team`} component={ContentTeam} />
          <Route path={`/contactUs`} component={ContentContactUs} />
        </div>
      </Switch>
    );
  }
}

export default Content;
