import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeSelectedTab } from "../actions/index";
import Parallume_Bead from "../images/Parallume_PSTI/Parallume_Beads.png";
import Logo_With_Tagline from "../images/Parallume_PSTI/Parallume_Logo_with_tagline.png";

class ContentHome extends Component {
  render() {
    return(
      <div>
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
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeSelectedTab : changeSelectedTab }, (dispatch));
}

export default connect(mapDispatchToProps)(ContentHome);
