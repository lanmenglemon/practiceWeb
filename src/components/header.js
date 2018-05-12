import React, { Component } from "react";
const path = require('path');
import logo from "../../public/images/Parallume_PSTI/logo.png";
import linkedin from "../../public/images/Parallume_PSTI/linkedin.jpg";

class Header extends Component {
  render() {
    return(
        <header className="navbar navbar-expand navbar-light bd-navbar py-0 white-div" >
          <div className="container flex-lg-row flex-column">
            <div className="col-12 col-lg-auto text-center">
              <a className="navbar-brand" href="/home">
                <img className="mb-lg-1" src={logo} id="logo" />
              </a>
              <span className="navbar-text col-12 col-lg-auto ml-0 font-sp">Bring Color to Life</span>
            </div>
            <div className="col-12 col-lg-auto d-inline px-0 text-center">
              <a className="nav-link" href="https://www.linkedin.com/company/parallumeinc/"
                target="_blank" rel="noopener">
                <img src={linkedin} id="linkedin" />
              </a>
            </div>
          </div>
        </header>
    );
  }
}
export default Header;
