import React, { Component } from "react";

import Parallume_Beads_larger from "../assets/images/Parallume_PSTI/Parallume_Beads_larger.png";

export default class ContentPEB extends Component {
  render() {
    return(
      <div>
        <div className="grey-div py-5">
          <div className="container my-5">
            <img src={Parallume_Beads_larger} className="md-image rounded mx-auto d-block" />
            <div className="py-5 col-8 offset-1">
              <h3 className="">Unprecedented Plex Sizes</h3>
              <h1 className="py-3 font-lg-title">PARALLUME ENCODED BEADS</h1>
              <p className="">
                Our ratiometric encoding system allows for a theoretical maximum of 10 Billion unique color codes. The versatility of Parallume encoded beads allows functionalization with any biomolecule (e.g. DNA, RNA or protein) to support numerous biological assay formats, including but not limited to real-time PCR, ELISA, and cell capture/isolation.
              </p>
              <a href="/contactUs" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
