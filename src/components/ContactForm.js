import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { sendEmail } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ContactForm extends Component {

  onSubmit(values) {
    // print the form values to the console
      this.props.sendEmail(values);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;

    return (
      <div className={className}>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} role="form">
        <div>
          <label htmlFor="name"></label>
          <Field name="name" component={this.renderField} type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component={this.renderField} type="email" />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <Field name="subject" component={this.renderField} type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <Field name="message" component={this.renderField} type="text" />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary center-block">Submit</button>
        </div>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.name) {
    errors.name = "Enter your name";
  }
  if (!values.email) {
    errors.email = "Enter your Email";
  }
  if (!values.subject) {
    errors.subject = "Enter your Subject";
  }
  if (!values.message) {
    errors.message = "Enter your message";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  // a unique name for the form
  // validate,
  form: "ContactForm"
})(connect(null, { sendEmail })(ContactForm));
