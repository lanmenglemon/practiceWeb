import React, { Component } from "react";
const path = require('path');
import logo from "../assets/images/Parallume_PSTI/logo.png";
import linkedin from "../assets/images/Parallume_PSTI/linkedin.jpg";

class Header extends Component {
  render() {
    return(
        <header className="navbar navbar-expand navbar-light bd-navbar py-0" >
          <div className="container flex-lg-row flex-column">
            <div className="col-12 col-lg-auto">
              <a className="navbar-brand " href="#">
                <img src={logo} id="logo" />
              </a>
              <span className="navbar-text col-12 col-lg-auto ml-0 font-header">Bringing Color to Life</span>
            </div>
            <div className="offset-lg-3 col-12 col-lg-auto pl-0">
              <a className="nav-link" href="mailto:kris@parallume.com">
                <span className="navbar-text">kris@parallume.com</span>
              </a>
            </div>
            <div className="col-12 col-lg-auto">
              <span className="navbar-text">(408)757-1116</span>
            </div>
            <div className="col-12 col-lg-auto d-inline px-0">
              <a className="nav-link" href="https://www.linkedin.com/in/kristofer-haushalter-617508144/"
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
