import React, { Component } from "react";
import { RoutedTabs, NavTab } from 'react-router-tabs';

export default class NaviBar extends Component {
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



  // function mapStateToProps(state) {
  //   return {
  //     activeTab: state.activeTab
  //   };
  // }
  //
  // function mapDispatchToProps(dispatch) {
  //   return bindActionCreators({ changeSelectedTab : changeSelectedTab }, (dispatch));
  // }
  //
  // export default connect(mapStateToProps, mapDispatchToProps)(NaviBar);


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
      <div className="sticky-top">
        <RoutedTabs startPathWith={"/home"} >
          <nav className="navbar white-div">
            <div className="container col-8">
              <NavTab to="/home" className="btn px-0 font-navi">Home</NavTab>
              <NavTab to="/overview" className="btn px-0 font-navi">Overview</NavTab>
              <NavTab to="/team" className="btn px-0 font-navi">The Parallume Inc. Team</NavTab>
              <NavTab to="/contactUs" className="btn px-0 font-navi">Contact Us</NavTab>
            </div>
          </nav>
        </RoutedTabs>
      </div>
    );
  }
}
