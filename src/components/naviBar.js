import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

import { Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { Admins, Moderators, Users } from './components';

import { changeSelectedTab } from "../actions/index";
import ContentHome from "./content_home";

class NaviBar extends Component {
  // renderList() {
  //   return this.props.naviBarItems.map(item => {
  //     return(
  //       <li
  //         key={item.name}
  //         onClick={() => this.props.selectNaviBarItem(item)}
  //         className="nav-item my-auto mx-5"
  //       >
  //         {item.name}
  //       </li>
  //     );
  //   });
  // }

  // <li className="nav-item my-auto ml-5 dropdown">
  //   <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#"
  //     data-toggle="dropdown" aria-haspopup="true">
  //     More</a>
  //   <div className="dropdown-menu dropdown-menu-right">
  //     <a className="dropdown-item">1</a>
  //     <a className="dropdown-item">2</a>
  //     <a className="dropdown-item">3</a>
  //   </div>
  // </li>


  render() {
    return(
        <Tabs className="tabs tabs-1" onClick={(selectedTab) => this.props.changeSelectedTab(selectedTab)}>
          <div className="navbar white-div sticky-top">
            <div className="container">
                <TabLink to="home" className="btn pl-0">Home</TabLink>
                <TabLink to="ourTechnology" className="btn">Our Technology</TabLink>
                <TabLink to="ourTeam" className="btn">Our Team</TabLink>
                <TabLink to="contactUs" className="btn pr-0">Contact Us</TabLink>
            </div>
          </div>
            <div className="contents">
                <TabContent for="home">
                  <ContentHome />
                </TabContent>
                <TabContent for="ourTechnology">
                    <h2>Tab2 content</h2>
                    <div>¯\_(ツ)_/¯</div>
                </TabContent>
                <TabContent for="ourTeam">
                    <h2>Tab3 content</h2>
                    <div>(╯°□°）╯︵ ┻━┻)</div>
                </TabContent>
                <TabContent for="contactUs">
                    <h2>Tab4 content</h2>
                    <div>😯</div>
                </TabContent>
            </div>
        </Tabs>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeTab: state.activeTab
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeSelectedTab : changeSelectedTab }, (dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(NaviBar);
