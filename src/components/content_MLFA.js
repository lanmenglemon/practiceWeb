import React, { Component } from "react";

export default class ContentMLFA extends Component {

  render() {
    return(
      <div className="grey-div py-5">
        <div className="my-4 col-8 mx-auto page-fill">
          <h1 className="text-center my-3 font-lg-title">Multiplex Lateral Flow Assays</h1>
          <p className="text-center">Please visit the link below to view our publication about multiplex flow assays!</p>
          <div class="text-center mt-5">
            <a className="btn btn-outline-dark round btn-custom" role="button" href="https://www.ncbi.nlm.nih.gov/pubmed/27819063">Visit</a>
          </div>
        </div>
      </div>
    );
  }
}
