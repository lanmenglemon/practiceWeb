import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import ContactForm from "./ContactForm"

import { sendEmail } from "../actions";

class ContentContactUs extends Component {

  render() {
    return(
      <ContactForm />
    );
  }
}

export default ContentContactUs;
