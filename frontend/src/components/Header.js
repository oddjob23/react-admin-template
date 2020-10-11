import React from "react";

const Header = () => {
  const toggleHandler = () => {
    console.log("button clicked");
    document.querySelector("body").classList.toggle("settings-bar-enabled");
  };
  return (
    <header id="top-toolbar">
      <nav>
        <div className="d-flex">
          <div className="navbar-logo">
            <a href="#" className="logo-light">
              App Template
            </a>
            <a href="#" className="logo-dark">
              App Template
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-end ml-auto">
          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item noti-icon settings-bar-toggle"
              onClick={toggleHandler}
            >
              <span className="material-icons">settings</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
