import React, {Component} from 'react';
import '../style/navigationBar.css'

class NavigationBar extends Component {
  render() {
    return(
        <header class="navbar navbar-expand navbar-light flex-column flex-md-row bd-navbar">
          <div className="container mx-auto d-flex">
            <ul class="navbar-nav bd-navbar-nav flex-row mx-auto">
              <li class="nav-item my-auto mr-5">Home</li>
              <li class="nav-item my-auto mx-5">Overview</li>
              <li class="nav-item my-auto mx-5">Instruments</li>
              <li class="nav-item my-auto mx-5">Applications</li>
              <li class="nav-item my-auto ml-5 dropdown">
                <a class="nav-item nav-link dropdown-toggle mr-md-2" href="#"
                  data-toggle="dropdown" aria-haspopup="true">
                  More</a>
                <div class="dropdown-menu dropdown-menu-right">
                  <a class="dropdown-item">1</a>
                  <a class="dropdown-item">2</a>
                  <a class="dropdown-item">3</a>
                </div>
              </li>
            </ul>
          </div>
        </header>
    );
  }
}

export default NavigationBar;
