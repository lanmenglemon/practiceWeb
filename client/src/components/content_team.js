import React, { Component } from "react";

import Kris_pic from "../assets/images/Parallume_PSTI/Kris_pic.jpg";
import JJ_pic from "../assets/images/Parallume_PSTI/JJ_pic.png";
import Bob_pic from "../assets/images/Parallume_PSTI/Bob_pic.jpg";

export default class ContentTeam extends Component {
  render() {
    return(
      <div className="dark-green-div">
        <div className="col-10 pt-5 mx-auto">
          <h1 className="py-3 text-center">THE PARALLUME INC. TEAM</h1>
          <div className="row">
            <div className="card">
              <img className="card-img-top" src={Kris_pic} />
              <div class="card-body">
                <p class="card-text">KRISTOFER HAUSHALTER, PH.D.</p>
              </div>
            </div>
            <div>
              <img className="rounded mx-auto d-block" src={JJ_pic} id="JJ_pic" />
            </div>
            <div>
              <img className="rounded float-right" src={Bob_pic} id="Bob_pic" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
