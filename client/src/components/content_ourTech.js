import React, { Component } from "react";

import CarouselSlides from "./carouselSlides.js";

export default class ContentOurTech extends Component {
  render() {
    return(
      <div className="green-div">
        <div className="container">
          <div className="pt-5 col-9 mx-auto">
            <h1 className="py-3 text-center">Our Technology</h1>
            <p className="text-center">
              Parallume Inc. is centered around the utility of our novel, patent-protected optical encoding material that allows for identification and quantification of unprecedented numbers of biological targets (e.g. DNA/RNA, protein, and cells) from a single sample. Our technology platform includes the encoding material itself, as well as a line of multiplex assay reader systems (“MARS” TM) and associated bead localization substrates, available in either benchtop or portable device formats.
            </p>
            <div id="carouselContainer">
              <CarouselSlides />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
