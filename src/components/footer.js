import React, { Component } from "react";
import linkedin from "../../public/images/Parallume_PSTI/linkedin.jpg";

class Footer extends Component {
  render() {
    return (
      <div className="white-div">
        <div className="container py-3 flex-column flex-sm-row">
          <div className="row">
            <div className="col-6">
              <div className="container col-sm-9 mx-auto px-0">
                <div className="col-12 col-sm-auto">Contact Us:</div>
                <div className="col-12 col-sm-auto">
                  <a className="" href="#">
                    <span className="text-muted">kris@parallume.com</span>
                  </a>
                </div>
                <div className="col-12 col-sm-auto">
                  <span className="text-muted">(858)215-4761</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="container col-sm-9 mx-auto px-0">
                <div className="col-12 col-sm-auto">Follow Us:</div>
              <div className="col-12 col-sm-auto pl-0">
                  <a className="nav-link" href="https://www.linkedin.com/parallumeinc/"
                    target="_blank" rel="noopener">
                    <img src={linkedin} id="linkedin" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="black-div">
          <div className="container py-1">
            <span className="text-light copyright">Copyright &copy; 2018 by Parallume Inc. All rights reserved.</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
