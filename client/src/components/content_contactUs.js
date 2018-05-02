import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class ContentContactUs extends Component {

  render() {
    return(
      <div className="grey-div py-5">
        <div className="my-4 col-8 mx-auto">
          <h1 className="text-center my-3 font-lg-title">CONTACT</h1>
          <p className="text-center"> Contact us today to learn more about our business and how you can benefit from working with us. </p>
          <ContactForm />
        </div>
      </div>
    );
  }
}
