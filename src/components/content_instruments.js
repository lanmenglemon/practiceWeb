import React, { Component } from "react";

import Benchtop_MARS from "../../public/images/Parallume_PSTI/Benchtop_MARS.png";
import Mobile_MARS from "../../public/images/Parallume_PSTI/Mobile_MARS.png";

export default class ContentInstruments extends Component {
  render() {
    return(
      <div>
        <div className="grey-div">
          <div className="container">
            <div className="py-5 mx-auto">
              <div className="py-4">
                <h1 className="pb-3 text-center font-lg-title">INSTRUMENTS</h1>
                <h3 className="text-center font-sp">Low-cost, definitive results</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="ivory-div">
          <div className="container py-5">
            <div className="row py-5 py-lg-3">
              <div className="col-lg-6">
                <div className="ml-lg-5 pl-lg-5 pt-5 pb-lg-5 my-0 my-lg-5">
                  <h1 className="font-md-title">MARS (TM):</h1>
                  <h1 className="font-md-title">BENCHTOP MULTIPLEX ASSAY READER SYSTEM</h1>
                  <h3 className="font-sp">Automated multiplex measurements at the benchtop</h3>
                  <p>
                    With a 9.5" x 14" footprint, bring the power of Parallume multiplexing into laboratories without demand for space. Comes with MARSoft (TM) software for plug-and-play multiplex measurements (PC compatible).
                  </p>
                  <a href="/contactUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Get Quote</a>
                </div>
              </div>
              <div className="col-lg-6 col-10 mx-0 my-0 my-lg-5 py-0 py-lg-5">
                <img className="my-5 ml-lg-4 md-image " src={Benchtop_MARS} />
              </div>
            </div>
            <div className="row py-5 py-lg-3">
              <div className="col-lg-6">
                <div className="ml-lg-5 pl-lg-5 pt-5 pb-lg-5 my-0 my-lg-5">
                  <h1 className="font-md-title">MOBILE MARS (TM):</h1>
                  <h1 className="font-md-title">PORTABLE MULTIPLEX ASSAY READER SYSTEM</h1>
                  <h3 className="font-sp">Bring multiplex capabilities to any setting</h3>
                  <p>
                    Our handheld instrument can perform manual multiplex measurements in low-resource or point-of-care clinical settings. Comes iwth MARSoft software for plug-and-play multiplex measurements (PC compatible).
                  </p>
                  <a href="/contactUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Get Quote</a>
                </div>
              </div>
              <div className="col-lg-6 col-10 mx-0 my-0 my-lg-5 py-0 py-lg-5">
                <img className="my-5 ml-lg-4 md-image " src={Mobile_MARS} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
