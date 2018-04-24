import React, { Component } from "react";
import ContactForm from "./ContactForm";

export default class ContentContactUs extends Component {

  render() {
    return(
      <div>
        <h1 className="text-bold text-center">CONTACT</h1>
        <ContactForm />
      </div>
    );
  }
}
