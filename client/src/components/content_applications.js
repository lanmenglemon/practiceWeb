import React, { Component } from "react";

import MFA_Sandwich_ELISA_Cartoon from "../assets/images/Parallume_PSTI/MFA_Sandwich_ELISA_Cartoon.png";
import BEAD_BASED_SUSPENSION_ARRAYS from "../assets/images/Parallume_PSTI/BEAD_BASED_SUSPENSION_ARRAYS.png";
import temp from "../assets/images/Parallume_PSTI/temp.png";
import Nanoparticle_Priniting from "../assets/images/Parallume_PSTI/Nanoparticle_Priniting.png";

export default class ContentApplications extends Component {
  render() {
    return(
      <div>
        <img src={Nanoparticle_Priniting} className="position-fixed w-100 px-0 sticky-top back bg-image"/>
        <div className=" transparent">
          <div className="container">
            <div className="py-5 mx-auto">
              <div className="py-4">
                <h1 className="pb-3 text-center font-lg-title font-white">APPLICATIONS</h1>
                <h3 className="text-center font-sp font-white">Discover the power of Parallume!</h3>
                <p className="text-center font-white">Parallume Inc. offers a variety of multiplex applications, available in bead-based and lateral flow assay formats.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="ivory-div">
          <div className="container py-5">
            <div className="row py-5 py-lg-3">
              <div className="col-lg-6 my-0 my-lg-5 py-0 py-lg-5">
                <img className="my-5 rounded float-lg-right md-image d-lg-inline" src={MFA_Sandwich_ELISA_Cartoon} />
              </div>
              <div className="col-lg-6">
                <div className="col-10 pt-5 pb-lg-5 my-0 my-lg-5">
                  <h1 className="font-md-title">MULTIPLEX LATERAL FLOW ASSAYS</h1>
                  <h3 className="font-sp">Multiplex in minutes!</h3>
                  <p>
                    Our multiplex lateral flow assays formulations allow for semi-quantitative detection 100+ analytes within 15-30min reaction times.
                  </p>
                  <a href="/contactUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
                </div>
              </div>
            </div>
            <div className="row py-5 py-lg-3">
              <div className="col-lg-6 my-0 my-lg-5 py-0 py-lg-0">
                <img className="rounded float-lg-right md-image " src={BEAD_BASED_SUSPENSION_ARRAYS} />
              </div>
              <div className="col-lg-6">
                <div className="col-10 pt-5 pb-lg-5 my-0 my-lg-5">
                  <h1 className="font-md-title">BEAD-BASED SUSPENSION ARRAYS</h1>
                  <h3 className="font-sp">Make your multiplex three-dimensional</h3>
                  <p>
                    Our suspension arrays allow for the most sensitive and comprehensive quantitative multiplex assays available.
                  </p>
                  <a href="/contactUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
                </div>
              </div>
            </div>
            <div className="row py-5 py-lg-3">
              <div className="col-lg-6 my-0 my-lg-5 py-0 py-lg-0">
                <img className="rounded float-lg-right md-image " src={temp} />
              </div>
              <div className="col-lg-6">
                <div className="col-10 pt-5 pb-lg-5 my-0 my-lg-5">
                  <h1 className="font-md-title">CELL CAPTURE, ISOLATION & SEPARATION</h1>
                  <h3 className="font-sp">More than only molecular multiplexing</h3>
                  <p>
                    Bead-based cell separation in multiplex is possible with Parallume.
                  </p>
                  <a href="/contactUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
