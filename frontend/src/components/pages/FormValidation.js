import React, { useState, useRef } from "react";
import PageTitle from "../PageTitle";
import Input from "../Input";
const FormValidation = () => {
  const defaultValidation = [
    {
      type: "text",
      name: "first_name",
      id: "first_name",
      label: "First Name",
      htmlFor: "first_name",
      size: "default",
      placeholder: "First name",
      cols: 6,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Enter First Name",
      tooltip: false,
    },
    {
      type: "text",
      name: "last_name",
      id: "last_name",
      label: "Last Name",
      htmlFor: "last_name",
      size: "default",
      placeholder: "Last name",
      cols: 6,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Enter Last Name",
      tooltip: false,
    },
    {
      type: "text",
      name: "city",
      id: "city",
      label: "City",
      htmlFor: "city",
      size: "default",
      placeholder: "City",
      cols: 4,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Please provide a valid city.",
      tooltip: false,
    },
    {
      type: "text",
      name: "state",
      id: "state",
      label: "State",
      htmlFor: "state",
      size: "default",
      placeholder: "State",
      cols: 4,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Please provide a valid state",
      tooltip: false,
    },
    {
      type: "number",
      name: "zip",
      id: "zip",
      label: "Zip",
      htmlFor: "zip",
      size: "default",
      placeholder: "Zip Code",
      cols: 4,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Please provide a valid zip",
      tooltip: false,
    },
    {
      type: "checkbox",
      name: "terms",
      id: "terms",
      label: "Agree to terms and conditions",
      htmlFor: "terms",
      size: "default",
      placeholder: null,
      cols: 12,
      touched: false,
      required: true,
      value: false,
      invalidFeedback: "You must agree before submitting.",
      tooltip: false,
    },
  ];
  const tooltipValidation = [
    {
      type: "text",
      name: "first_name",
      id: "first_name",
      label: "First Name",
      htmlFor: "first_name",
      size: "default",
      placeholder: "First name",
      cols: 4,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Enter First Name",
      tooltip: true,
    },
    {
      type: "text",
      name: "last_name",
      id: "last_name",
      label: "Last Name",
      htmlFor: "last_name",
      size: "default",
      placeholder: "Last name",
      cols: 4,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Enter Last Name",
      tooltip: true,
    },
    {
      type: "text",
      name: "username",
      id: "username",
      label: "Username",
      htmlFor: "username",
      size: "default",
      placeholder: "Username",
      cols: 4,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Please provide a valid city.",
      tooltip: true,
    },
    {
      type: "text",
      name: "city",
      id: "city",
      label: "City",
      htmlFor: "city",
      size: "default",
      placeholder: "City",
      cols: 6,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Please provide a valid city.",
      tooltip: true,
    },
    {
      type: "text",
      name: "state",
      id: "state",
      label: "State",
      htmlFor: "state",
      size: "default",
      placeholder: "State",
      cols: 6,
      touched: false,
      required: true,
      value: "",
      invalidFeedback: "Please provide a valid state",
      tooltip: true,
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();
    const elements = e.target.elements;
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].nodeName.toLowerCase() === "input") {
        if (!elements[i].validity.valid) {
          elements[i].classList.add("is-invalid");
        } else {
          elements[i].classList.remove("is-invalid");
        }
      }
    }
  };
  return (
    <>
      <PageTitle
        title="Form Validation"
        link1={"Form"}
        link2={"Form Validation"}
      />
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">React Validation - Normal</div>
              <p className="card-title-desc mb-4">
                Provide valuable, actionable feedback to your users with HTML5
                form validation - available in all our supported browsers
              </p>
              <form
                noValidate
                onSubmit={submitHandler}
                className="needs-validation av-submitted av-invalid"
              >
                <div className="row">
                  {defaultValidation.map((el) => (
                    <div className={`col-xl-${el.cols}`} key={el.id}>
                      <Input {...el} />
                    </div>
                  ))}
                  <div className="col-xl-12">
                    <button type="submit" className="btn btn-primary">
                      Submit Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Tooltip Validation</div>
              <p className="card-title-desc mb-4">
                Form validation with tooltips
              </p>
              <form noValidate onSubmit={submitHandler}>
                <div className="row">
                  {tooltipValidation.map((el) => (
                    <div className={`col-md-${el.cols}`} key={el.id}>
                      <Input {...el} />
                    </div>
                  ))}
                  <div className="col-xl-12">
                    <button type="submit" className="btn btn-danger">
                      Submit Form
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormValidation;
