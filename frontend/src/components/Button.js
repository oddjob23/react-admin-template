import React from "react";
import { Link } from "react-router-dom";
const Button = ({
  color,
  outline,
  text,
  type,
  size,
  block,
  rounded,
  link,
  icon,
  loading,
  width,
}) => {
  if (!link) {
    return (
      <button
        className={`btn btn-${outline ? `outline-${color}` : color} ${
          size ? `btn-${size}` : ""
        } ${block ? "btn-block" : ""} ${rounded ? "btn-rounded" : ""} ${
          width ? `w-${width}` : ""
        }`}
        type={type}
      >
        {icon && (
          <span
            className={`mr-3 button-icon ${
              loading ? "button-icon-loading" : ""
            }`}
            style={{ maxWidth: "12px", maxHeight: "12px" }}
          >
            {icon}
          </span>
        )}
        {text}
      </button>
    );
  } else {
    return (
      <Link
        to={"#"}
        className={`btn btn-${outline ? `outline-${color}` : color} ${
          size ? `btn-${size}` : ""
        } ${block ? "btn-block" : ""} ${rounded ? "btn-rounded" : ""}`}
      >
        {text}
      </Link>
    );
  }
};

export default Button;
