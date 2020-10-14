import React, { useState } from "react";
import PageTitle from "../PageTitle";
const FormValidation = () => {
  const default_validation = [
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
    },
  ];
  const [defaultValidation, setDefaultValidation] = useState(
    default_validation
  );
  const changeHandler = (e) => {
    console.log(e.target.validity);
    e.persist();
    setDefaultValidation((state) => {
      return state.map((el) => {
        if (el.id === e.target.id) {
          el.touched = true;
          el.value = e.target.value;
        }
        return el;
      });
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // check if each element in the form is valid
    console.log(defaultValidation);
  };
  return (
    <>
      <PageTitle
        title="Form Validation"
        link1={"Fomr"}
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
                onSubmit={submitHandler}
                className="needs-validation av-submitted av-invalid"
              >
                <div className="row">
                  {defaultValidation.map((el) => (
                    <div className={`col-xl-${el.cols}`} key={el.id}>
                      <div className="form-group">
                        {el.type !== "checkbox" ? (
                          <>
                            <label htmlFor={el.id}>{el.label}</label>
                            <div className="form-group">
                              <input
                                type={el.type}
                                name={el.name}
                                id={el.id}
                                placeholder={
                                  el.placeholder ? el.placeholder : ""
                                }
                                className={`form-control ${
                                  el.touched ? "is-touched" : "is-untouched"
                                }`}
                                required={true}
                                value={el.value}
                                onChange={changeHandler}
                                onBlur={changeHandler}
                              />
                              <div className="invalid-feedback">
                                {el.invalidFeedback}
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="form-group">
                            <div className="custom-control custom-checkbox">
                              <div className="form-check">
                                <input
                                  type={el.type}
                                  className="custom-control-input is-untouched is-pristine av-invalid form-check-input"
                                  id={el.id}
                                  name={el.name}
                                  value={el.value}
                                />
                              </div>
                              <label htmlFor={el.id}>
                                {el.label}
                                required: true
                              </label>
                            </div>
                          </div>
                        )}
                      </div>
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
      </div>
    </>
  );
};

export default FormValidation;
