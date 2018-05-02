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
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mr-lg-3 mx-auto">
                      <NavTab to="/home" className="btn font-navi mx-auto">Home</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-3 mx-auto">
                      <NavTab to="/aboutUs" className="btn font-navi mx-auto">About Us</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-3 mx-auto">
                      <NavTab to="/parallumEncodedBeads" className="btn font-navi mx-auto">Parallum Encoded Beads</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-3 mx-auto">
                      <NavTab to="/instruments" className="btn font-navi mx-auto">Instruments</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 mx-lg-3 mx-auto">
                      <NavTab to="/team" className="btn font-navi mx-auto">The Parallume Inc. Team</NavTab>
                    </li>
                    <li className="nav-item col-12 col-lg-auto px-lg-0 ml-lg-3 mx-auto">
                      <NavTab to="/contactUs" className="btn font-navi mx-auto">Contact Us</NavTab>
                    </li>
                </ul>
            </div>
        </nav>
      </RoutedTabs>
    );
  }
}
