import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

let ContactForm = props => {

  let renderField = field => {
    return (
      <div>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }

  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <Field name="name" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component={renderField} type="email" />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <Field name="subject" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <Field name="message" component={renderField} type="text" />
      </div>
    </form>
  );
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'contact'
})(ContactForm)

export default ContactForm;
