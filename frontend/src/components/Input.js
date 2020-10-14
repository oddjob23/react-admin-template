import React, { useRef } from "react";

const Input = ({
  type,
  name,
  id,
  label,
  htmlFor,
  size,
  placeholder,
  touched,
  required,
  value,
  invalidFeedback,
  tooltip,
  controlled,
  handler,
}) => {
  const ref = useRef(null);
  const validateInputs = (input) => {
    const { valueMissing } = input.validity;
    console.log(valueMissing);
    return valueMissing;
  };
  const onChange = (e) => {
    if (validateInputs(ref.current)) {
      ref.current.classList.add("is-invalid");
    } else {
      ref.current.classList.remove("is-invalid");
    }
    if (controlled) {
      handler({ [e.target.name]: e.target.value });
    }
  };
  if (type !== "checkbox") {
    return (
      <div className={`form-group ${tooltip ? "position-relative" : ""}`}>
        <label htmlFor={htmlFor}>{label}</label>
        <div className="form-group">
          <input
            className={`form-control ${
              touched ? "is-touched" : "is-untouched"
            } `}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder ? placeholder : ""}
            required={required}
            ref={ref}
            onChange={onChange}
            onBlur={onChange}
          />
          <div className={`invalid-${tooltip ? "tooltip" : "feedback"}`}>
            {invalidFeedback}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <div className="form-check">
            <input
              type={type}
              className="custom-control-input is-untouched is-pristine av-invalid form-check-input"
              id={id}
              name={name}
              value={value}
              required={required}
              onChange={onChange}
              onBlur={onChange}
            />
          </div>
          <label htmlFor={htmlFor}>{label}</label>
        </div>
      </div>
    );
  }
};

export default Input;
