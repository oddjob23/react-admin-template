import React, { useRef } from "react";

/**
 * title, text, color, link, icon, dissmising
 */
const Alert = ({ title, text, color, link, icon, dismissing }) => {
  const alert = useRef(null);
  const closeHandler = () => {
    alert.current.classList.remove("show");
    setTimeout(() => {
      alert.current.remove();
    }, 300);
  };
  return (
    <div
      className={`alert alert-${color} ${
        dismissing ? "alert-dismissable" : ""
      } fade show`}
      role="alert"
      ref={alert}
    >
      {dismissing && (
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={closeHandler}
        >
          <span aria-hidden="true">×</span>
        </button>
      )}
      {icon && (
        <span className="mr-2" style={{ fontSize: "13px" }}>
          {icon}
        </span>
      )}
      {title}
    </div>
  );
};

export default Alert;
