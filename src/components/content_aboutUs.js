import React, { Component } from "react";

import CarouselSlides from "./carouselSlides.js";

import Parallume_Beads from "../../public/images/Parallume_PSTI/Parallume_Beads.png";
import Benchtop_MARS from "../../public/images/Parallume_PSTI/Benchtop_MARS.png";
import temp from "../../public/images/Parallume_PSTI/temp.png";

export default class ContentAboutUs extends Component {
  render() {
    return(
      <div>
        <div className="grey-div">
          <div className="container">
            <div className="pt-5 col-9 mx-auto">
              <h1 className="py-3 text-center font-lg-title">OUR TECHNOLOGY</h1>
              <p className="text-center">
                Parallume Inc. is centered around the utility of our novel, patent-protected optical encoding material that allows for identification and quantification of unprecedented numbers of biological targets (e.g. DNA/RNA, protein, and cells) from a single sample. Our technology platform includes the encoding material itself, as well as a line of multiplex assay reader systems (“MARS” TM) and associated bead localization substrates, available in either benchtop or portable device formats.
              </p>
              <div id="carouselContainer" className="py-3">
                <CarouselSlides />
              </div>
            </div>
          </div>
        </div>
        <div className="ivory-div">
          <div className="py-5">
            <h1 className="py-3 text-center font-lg-title py-5">FEATURES</h1>
          </div>
        </div>
        <div className="container py-5">
          <div className="row py-3">
            <div className="col-lg-6">
              <div className="ml-lg-5 pl-lg-5 py-5 my-0 my-lg-5">
                <h1 className="font-md-title">PARALLUME ENCODED BEADS</h1>
                <h3 className="font-sp">Unprecedented Plex Sizes</h3>
                <p>
                  Our ratiometric encoding system allows for a theoretical maximum of 10 Billion unique color codes. The versatility of Parallume encoded beads allows functionalization with any biomolecule (e.g. DNA, RNA or protein) to support numerous biological assay formats, including but not limited to real-time PCR, ELISA, and cell capture/isolation.
                </p>
                <a href="/parallumEncodedBeads" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6 col-10 mx-0 my-lg-4">
              <img className="mx-5 md-image" src={Parallume_Beads} />
            </div>
          </div>
          <div className="row py-5 py-lg-3">
            <div className="col-lg-6">
              <div className="ml-lg-5 pl-lg-5 pt-5 pb-lg-5 my-0 my-lg-5">
                <h1 className="font-md-title">MULTIPLEX ASSAY READER SYSTEM (MARS) INSTRUMENTS</h1>
                <h3 className="font-sp">Low-cost definitive results</h3>
                <p>
                  Parallume Inc. offers sophisticated bead-reader imaging instruments in either benchtop or portable formats.
                </p>
                <a href="/instruments" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6 col-10 mx-0 my-0 my-lg-5 py-0 py-lg-5">
              <img className="mx-auto default-image" src={Benchtop_MARS} />
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-6">
              <div className="ml-lg-5 pl-lg-5 py-5 my-0 my-lg-5">
                <h1 className="font-md-title">APPLICATIONS</h1>
                <h3 className="font-sp">Facilitating diagnostics in both laboratory and point-of-care clinical settings</h3>
                <p>
                  Parallume multiplex capabilities can increase the throughput of your assay, for detection and diagnosis of infectious disease, neurodegenerative disorders, and cardiovascular disease.
                </p>
                <a href="/applications" className="btn btn-outline-dark round" role="button" aria-disabled="true">Learn More</a>
              </div>
            </div>
            <div className="col-lg-6 col-10 mx-0 my-lg-4">
              <img className="mx-5 md-image" src={temp} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
