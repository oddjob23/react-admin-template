import React from "react";
import PageTitle from "../PageTitle";

const FormValidation = () => {
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
              <form noValidate onSubmit={(e) => e.preventDefault()}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <div className="form-group">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          placeholder="First name"
                          required
                          className="form-control is-untouched is-pristine av-invalid "
                        />
                      </div>
                      <button type="submit">Submit</button>
                    </div>
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
