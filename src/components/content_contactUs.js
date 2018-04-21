import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { sendEmail } from "../actions";

class ContentContactUs extends Component {
  renderField(field) {
    return (
      <div>
        <input className="form-control" type="text" {...field.input} />
      </div>
    );
  }


  render() {
    return(
        <form>
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


export default reduxForm({
  // a unique name for the form
  form: 'SendEmailForm'
})(ContentContactUs);
