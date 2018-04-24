import React, { Component } from "react";
import Header from './header';
import NaviBar from './naviBar';
import Content from "./content";
import Footer from './footer';


class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr className="my-0 py-0"/>
        <NaviBar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
