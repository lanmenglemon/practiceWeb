import React, { Component } from "react";
import { connect } from "react-redux";
import { selectNaviBarItem } from "../actions/index";
import { bindActionCreators } from "redux";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";


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

  // <li className="nav-item my-auto mr-5">Home</li>
  // <li className="nav-item my-auto mx-5">Overview</li>
  // <li className="nav-item my-auto mx-5">Instruments</li>
  // <li className="nav-item my-auto mx-5">Applications</li>
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
        // <nav className="navbar navbar-expand navbar-light flex-row bd-navbar py-0">
        //   <div className="container mx-auto d-flex">
        //     <Tabs className="navbar-nav bd-navbar-nav flex-row mx-auto tabs tabs-1">
        //       <TabLink to="tab1" className="nav-item my-auto mr-5">Home</TabLink>
        //       <TabLink to="tab2" className="nav-item my-auto mx-5">Our Technology</TabLink>
        //       <TabLink to="tab3" className="nav-item my-auto mx-5">Our Team</TabLink>
        //       <TabLink to="tab4" className="nav-item my-auto mx-5">Contact Us</TabLink>
        //
        //       <TabContent for="tab1">
        //         Content for tab1
        //       </TabContent>
        //       <TabContent for="tab2">
        //         <img src="../images/Parallume & PSTI/Bead Localization Slide.png"/>
        //       </TabContent>
        //       <TabContent for="tab3">
        //         <img src="../images/Parallume & PSTI/Bead Localization Slide.png"/>
        //       </TabContent>
        //       <TabContent for="tab4">
        //         <img src="../images/Parallume & PSTI/Bead Localization Slide.png"/>
        //       </TabContent>
        //     </Tabs>
        //
        //
        //
        //   </div>
        // </nav>

        <Tabs className="tabs tabs-1">
          <div className="navbar white-div sticky-top">
            <div className="container flex-sm-row flex-column">
                <TabLink to="tab1" className="btn px-0 col-12 col-sm-auto text-left">Home</TabLink>
                <TabLink to="tab2" className="btn px-0 col-12 col-sm-auto text-left">Our Technology</TabLink>
                <TabLink to="tab3" className="btn px-0 col-12 col-sm-auto text-left">Our Team</TabLink>
                <TabLink to="tab4" className="btn px-0 col-12 col-sm-auto text-left">Contact Us</TabLink>
            </div>
          </div>
            <div className="contents">
                <TabContent for="tab1">
                  <div className="container">
                    <div className="col-12 py-5">
                      <img className="mx-auto py-5" src="http://beibeiwang-beibei.com/public/images/Parallume_PSTI/Parallume Logo_with tagline 4-16-18.png" id="Logo_With_Tagline"/>
                      </div>
                  </div>
                  <div className="green-div">
                    <div className="container py-5">
                      <div className="row py-3">
                        <div className="col-lg-6 col-10 mx-auto mx-lg-0">
                          <img className="mx-auto" src="http://beibeiwang-beibei.com/public/images/Parallume_PSTI/Parallume Beads.png" id="Parallume_Bead" />
                          </div>
                          <div className="col-lg-6">
                          <div className="ml-lg-5 pl-lg-5 py-5 my-5 ">
                            <h1>Our Mission</h1>
                            <h2>Bringing color to the world of molecular diagnostics</h2>
                            <p>
                              Parallume Inc. is a multiplex assay platform biotechnology company aimed at revolutionizing the field of molecular diagnostics for life-science researchers in academic, industry, and clinical settings.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabContent>
                <TabContent for="tab2">
                    <h2>Tab2 content</h2>
                    <div>¯\_(ツ)_/¯</div>
                </TabContent>
                <TabContent for="tab3">
                    <h2>Tab3 content</h2>
                    <div>(╯°□°）╯︵ ┻━┻)</div>
                </TabContent>
                <TabContent for="tab4">
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
    naviBarItems: state.naviBarItems
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectNaviBarItem : selectNaviBarItem }, (dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(NaviBar);
