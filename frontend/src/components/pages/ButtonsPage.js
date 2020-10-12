import React from "react";
import Button from "../Button";
const ButtonsPage = () => {
  const defaultButtons = [
    {
      color: "primary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Primary",
    },
    {
      color: "secondary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Primary",
    },
    {
      color: "primary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Secondary",
    },
    {
      color: "Success",
      outline: false,
      type: "button",
      block: false,
      rounded: "Success",
    },
    {
      color: "info",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Info",
    },
    {
      color: "warning",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Warning",
    },
    {
      color: "danger",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Danger",
    },
    {
      color: "dark",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Dark",
    },
    {
      color: "link",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Link",
    },
    {
      color: "light",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "light",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title d-flex align-items-center justify-content-between">
            <h4 className="mb-0 font-size-18">Butons</h4>
            <div className="page-title-right">
              <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#">UI Elements</a>
                  </li>
                  <li className="active breadcrumb-item" aria-current="page">
                    <a href="#r">Buttons</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Default Buttons</div>
              <div className="mb-3 card-subtitle">
                Default bootstrap buttons styled with classes for the colors
              </div>
              <div className="button-items">
                {/* <button className="btn btn-primary">Primary</button>
                <button className="btn btn-secondary">Secondary</button>
                <button className="btn btn-success">Success</button>
                <button className="btn btn-info">Info</button>
                <button className="btn btn-warning">Warning</button>
                <button className="btn btn-danger">Danger</button>
                <button className="btn btn-dark">Dark</button>
                <button className="btn btn-link">Link</button>
                <button className="btn btn-light">Light</button> */}
                {/* {defaultButtons.map((button, index) => (
                  <Button {...button} key={index} />
                ))} */}
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Outline Buttons</div>
              <div className="mb-3 card-subtitle">
                Default outline bootstrap buttons styled with classes for the
                colors
              </div>
              <div className="button-items">
                <button className="btn btn-outline-primary">Primary</button>
                <button className="btn btn-outline-secondary">Secondary</button>
                <button className="btn btn-outline-success">Success</button>
                <button className="btn btn-outline-info">Info</button>
                <button className="btn btn-outline-warning">Warning</button>
                <button className="btn btn-outline-danger">Danger</button>
                <button className="btn btn-outline-dark">Dark</button>
                <button className="btn btn-outline-link">Link</button>
                <button className="btn btn-outline-light">Light</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsPage;
