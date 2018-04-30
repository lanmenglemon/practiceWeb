import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeSelectedTab } from "../actions/index";
import Parallume_Bead from "../assets/images/Parallume_PSTI/Parallume_Beads.png";
import Logo_With_Tagline from "../assets/images/Parallume_PSTI/Parallume_Logo_with_tagline.png";

class ContentHome extends Component {
  render() {
    return(
      <div>
        <div className="container">
          <div className="col-12 py-5">
            <img className="mx-auto py-5" src={Logo_With_Tagline} id="Logo_With_Tagline"/>
            </div>
        </div>
        <div className="green-div">
          <div className="container py-5">
            <div className="row py-3">
              <div className="col-lg-6 col-10 mx-auto mx-lg-0">
                <img className="mx-auto" src={Parallume_Bead} id="Parallume_Bead" />
                </div>
                <div className="col-lg-6">
                <div className="ml-lg-5 pl-lg-5 py-5 my-5 ">
                  <h1 className="font-title">OUR MISSION</h1>
                  <h2>Bringing color to the world of molecular diagnostics</h2>
                  <p>
                    Parallume Inc. is a multiplex assay platform biotechnology company aimed at revolutionizing the field of molecular diagnostics for life-science researchers in academic, industry, and clinical settings.
                  </p>
                  <a href="/overview" className="btn btn-outline-dark" role="button" aria-disabled="true">Learn More</a>
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
