import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeSelectedTab } from "../actions/index";
import Parallume_Beads from "../../public/images/Parallume_PSTI/Parallume_Beads.png";
import Logo_With_Tagline from "../../public/images/Parallume_PSTI/Parallume_Logo_with_tagline_1.png";

class ContentHome extends Component {
  render() {
    return(
      <div>
        <div className="grey-div">
          <div className="container">
            <div className="py-5">
              <img className="rounded mx-auto d-block py-5 md-image" src={Logo_With_Tagline}/>
            </div>
          </div>
        </div>
        <div className="ivory-div">
          <div className="container py-5">
            <div className="row py-3">
              <div className="col-lg-6 col-10 mx-auto mx-lg-0">
                <img className="mx-auto default-image" src={Parallume_Beads} />
                </div>
                <div className="col-lg-6">
                <div className="ml-lg-5 pl-lg-5 py-5 my-5 ">
                  <h1 className="font-lg-title">OUR MISSION</h1>
                  <h3 className="font-sp">Bringing color to the world of molecular diagnostics</h3>
                  <p>
                    Parallume Inc. is a multiplex assay platform biotechnology company aimed at revolutionizing the field of molecular diagnostics for life-science researchers in academic, industry, and clinical settings.
                  </p>
                  <a href="/aboutUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentHome;
