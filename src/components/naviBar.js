import React, { Component } from "react";
import { RoutedTabs, NavTab } from 'react-router-tabs';

export default class NaviBar extends Component {
  render() {
    return(
      <RoutedTabs startPathWith={"/home"} className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <button className="navbar-toggler mx-auto"
                    type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav nav-pills nav-fill btn-group-lg mx-auto ">
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mr-lg-1 mx-auto">
                      <NavTab to="/home" className="btn font-navi mx-auto">Home</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/aboutUs" className="btn font-navi mx-auto">About Us</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/parallumeEncodedBeads" className="btn font-navi mx-auto">Parallume Encoded Beads</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/applications" className="btn font-navi mx-auto">Applications</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/instruments" className="btn font-navi mx-auto">Instruments</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/multiplexLateralFlowAssays" className="btn font-navi mx-auto">Multiplex Lateral Flow Assays</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/team" className="btn font-navi mx-auto">The Parallume Inc. Team</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-1 mx-auto">
                      <NavTab to="/contactUs" className="btn font-navi mx-auto">Contact Us</NavTab>
                    </li>
                </ul>
            </div>
        </nav>
      </RoutedTabs>
    );
  }
}
