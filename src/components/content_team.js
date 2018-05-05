import React, { Component } from "react";

import Kris_pic from "../../public/images/Parallume_PSTI/Kris_pic.jpg";
import JJ_pic from "../../public/images/Parallume_PSTI/JJ_pic.png";
import Bob_pic from "../../public/images/Parallume_PSTI/Bob_pic.jpg";
import User_pic from "../../public/images/default-user.png";

export default class ContentTeam extends Component {
  render() {
    return(
      <div className="grey-div">
        <div className="container pt-5">
          <h1 className="py-3 text-center font-lg-title">THE PARALLUME INC. TEAM</h1>
            <div className="card-deck mx-auto py-5">
              <div className="card grey-div border-0">
                <img className="card-img-top" src={Kris_pic} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title font-md-title text-center">KRISTOFER HAUSHALTER, PH.D.</h5>
                  <p className="card-text text-center font-sp">Chief Executive Officer</p>
                  <p className="card-text text-center font-sp">Chief Technical Officer</p>
                </div>
              </div>
              <div className="card mx-5 grey-div border-0">
                <img className="card-img-top" src={JJ_pic} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title font-md-title text-center">JINGJING JIANG, M.D. PH.D.</h5>
                  <p className="card-text text-center font-sp">Chief Medical Officer</p>
                </div>
              </div>
              <div className="card grey-div border-0">
                <img className="card-img-top" src={Bob_pic} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title font-md-title text-center">ROBERT HAUSHALTER, PH.D.</h5>
                  <p className="card-text text-center font-sp">Scientific Applications Specialist</p>
                </div>
              </div>
          </div>
          <div className="card-deck mx-auto pb-5">
            <div className="card grey-div border-0">
              <img className="card-img-top" src={User_pic} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title font-md-title text-center">ROBERT C. HAUSHALTER, PH.D.</h5>
                <p className="card-text text-center font-sp">Founder, President, & Inventor</p>
              </div>
            </div>
            <div className="card mx-5 grey-div border-0">
              <img className="card-img-top" src={User_pic} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title font-md-title text-center">JEANNE P. HAUSHALTER, PH.D.</h5>
                <p className="card-text text-center font-sp">Chief Operations Officer</p>
              </div>
            </div>
            <div className="card grey-div border-0">
              <img className="card-img-top" src={User_pic} alt="Card image cap"/>
              <div className="card-body">
                <h5 className="card-title font-md-title text-center">SRINIVAS VETCHA, M.S.</h5>
                <p className="card-text text-center font-sp">Engineering Specialist</p>
              </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}
