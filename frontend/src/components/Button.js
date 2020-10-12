import React from "react";

const Button = ({ color, outline, text, type, size, block, rounded }) => {
  return (
    <Button
      className={`btn btn-${outline ? `outline-${color}` : color} ${
        size ? `btn-${size}` : ""
      } ${block ? "btn-block" : ""} ${rounded ? "btn-rounded" : ""}`}
      type={type}
    >
      {text}
    </Button>
  );
};

export default Button;
