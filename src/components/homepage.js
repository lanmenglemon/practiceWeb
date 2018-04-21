import React, { Component } from 'react';
import '../style/homepage.css';
import Header from './header';
import NaviBar from './naviBar';
import Footer from './footer';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr className="my-0 py-0"/>
        <NaviBar />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
