import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { sendEmail } from "../actions";


class ContentContactUs extends Component {

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

  onSubmit(values) {
    this.prop.sendEmail(values, () => {
      this.props.history.push("/home");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <div>
          <label htmlFor="name">Name</label>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.firstName) {
    errors.firstName = "Enter your first name";
  }
  if (!values.lastName) {
    errors.lastName = "Enter your last name";
  }
  if (!values.email) {
    errors.email = "Enter your Email";
  }
  if (!values.password) {
    errors.password = "Enter your password";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  }
  if (values.password != values.confirmPassword) {
    errors.differentPassword = "Please confirm your password";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}

export default reduxForm({
  // a unique name for the form
  validate,
  form: 'SendEmailForm'
})(connect(null, { sendEmail })(ContentContactUs));
