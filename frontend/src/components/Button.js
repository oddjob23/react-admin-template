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
}) => {
  if (!link) {
    return (
      <button
        className={`btn btn-${outline ? `outline-${color}` : color} ${
          size ? `btn-${size}` : ""
        } ${block ? "btn-block" : ""} ${rounded ? "btn-rounded" : ""}`}
        type={type}
      >
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
