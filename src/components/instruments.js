import React, { Component } from 'react';
import Header from './header';
import NavigationBar from './navigationBar';
import '../style/instruments.css'

class Instruments extends Component {
  render() {
    return(
      <div>
        <Header />
        <hr className="my-0 py-0"/>
        <NavigationBar />
      </div>
    );
  }
}

export default Instruments;
