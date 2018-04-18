import React, { Component } from 'react';
import '../style/header.css'
import linkedin from '../images/linkedin.png'
import cart from '../images/cart.png'
import logo from '../images/logo.png'

class Header extends Component {
  render() {
    return(
        <header className="navbar navbar-expand navbar-light d-flex flex-sm-column flex-md-row bd-navbar">
          <div className="container mx-auto d-flex">
            <a class="navbar-brand mr-0" href="/">
              <img src={logo} id="logo" />
            </a>
            <ul className="navbar-nav flex-row d-flex">
              <li className="nav-item d-none d-sm-block my-auto mr-3">
                <a className="nav-link" href="#"><span>kris@parallume.com</span></a>
              </li>
              <li className="nav-item d-none d-md-block my-auto mx-3">
                <span>(408)757-1116</span>
              </li>
              <li className="nav-item d-none d-lg-block my-auto ml-3">
                <a className="nav-link" href="https://www.linkedin.com/in/kristofer-haushalter-617508144/"
                target="_blank" rel="noopener">
                <img src={linkedin} id="linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </header>
    );
  }
}

export default Header;
