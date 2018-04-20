import React, { Component } from 'react';
import linkedin from '../images/linkedin.jpg'
import cart from '../images/cart.png'
import logo from '../images/logo.png'

class Header extends Component {
  render() {
    return(
        <header className="navbar navbar-expand navbar-light flex-row bd-navbar py-0">
          <div className="container mx-auto align-items-center">
            <div className="col-auto d-inline">
              <a className="navbar-brand" href="/">
                <img src={logo} id="logo" />
              </a>
              <span className="navbar-text ml-0">Bringing Color to Life</span>
            </div>
            <div className="col-auto offset-3">
              <a className="nav-link" href="#">
                <span className="navbar-text">kris@parallume.com</span>
              </a>
            </div>
            <div className="col-auto">
              <span className="navbar-text">(408)757-1116</span>
            </div>
            <div className="col-auto d-inline pr-0">
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
