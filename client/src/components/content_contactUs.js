import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class ContentContactUs extends Component {

  render() {
    return(
      <div className="green-div py-5">
        <div className="my-4 col-8 mx-auto">
          <h1 className="text-bold text-center my-3">CONTACT</h1>
          <p className="text-center"> Contact us today to learn more about our business and how you can benefit from working with us. </p>
          <ContactForm />
        </div>
      </div>
    );
  }
}
