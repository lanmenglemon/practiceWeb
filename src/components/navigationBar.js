import React, {Component} from 'react';

class NavigationBar extends Component {
  render() {
    return(
        <nav className="navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar py-0">
          <div className="container mx-auto d-flex">
            <ul className="navbar-nav bd-navbar-nav flex-row mx-auto">
              <li className="nav-item my-auto mr-5">Home</li>
              <li className="nav-item my-auto mx-5">Overview</li>
              <li className="nav-item my-auto mx-5">Instruments</li>
              <li className="nav-item my-auto mx-5">Applications</li>
              <li className="nav-item my-auto ml-5 dropdown">
                <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#"
                  data-toggle="dropdown" aria-haspopup="true">
                  More</a>
                <div className="dropdown-menu dropdown-menu-right">
                  <a className="dropdown-item">1</a>
                  <a className="dropdown-item">2</a>
                  <a className="dropdown-item">3</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default NavigationBar;
