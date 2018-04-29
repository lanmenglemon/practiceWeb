import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { sendEmail } from "../actions/index";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class ContactForm extends Component {

  onSubmit(values) {
    // print the form values to the console
    console.log(values);
    this.props.sendEmail(values);
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const fieldClassName = `form-group has-danger ${touched && error ? "red-font" : ""}`;

    if(field.input.name=="Message") {
      return (
        <div className={fieldClassName}>
          <textarea className="form-control" rows="5" placeholder={field.input.name} type="text" {...field.input} />
          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
      );
    }
    else {
      return (
        <div className={fieldClassName}>
          <input className="form-control" placeholder={field.input.name} type="text" {...field.input} />
          <div className="text-help">
            {touched ? error : ""}
          </div>
        </div>
      );
    }

  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))} role="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <Field name="Name" component={this.renderField} type="text" />
          </div>
          <div className="col-12 col-md-6">
            <Field name="Email" component={this.renderField} type="email" />
          </div>
        </div>
        <div>
          <Field name="Subject" component={this.renderField} type="text" />
        </div>
        <div>
          <Field name="Message" component={this.renderField} type="textarea" />
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
  if (!values.Name) {
    errors.Name = "Enter your name";
  }
  if (!values.Email) {
    errors.Email = "Enter your Email";
  }
  if (!values.Subject) {
    errors.Subject = "Enter your Subject";
  }
  if (!values.Message) {
    errors.Message = "Enter your message";
  }
  // If errors is empty, the form is fine to submit
  // If errors has *any* properties, redux form assumes form is invalid
  return errors;
}


export default reduxForm({
  // a unique name for the form
  validate,
  form: "ContactForm"
})(connect(null, { sendEmail })(ContactForm));
