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
      text: "Secondary",
    },
    {
      color: "success",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Success",
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
  const defaultOutlineButtons = [
    {
      color: "primary",
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Primary",
    },
    {
      color: "secondary",
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Secondary",
    },
    {
      color: "success",
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Success",
    },
    {
      color: "info",
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Info",
    },
    {
      color: "warning",
      outline: true,
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
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Link",
    },
    {
      color: "light",
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "light",
    },
  ];
  const buttonTypes = [
    {
      color: "primary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Link",
      link: true,
    },
    {
      color: "success",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Button",
      link: false,
    },
    {
      color: "info",
      outline: false,
      type: "input",
      block: false,
      rounded: false,
      text: "Input",
      link: false,
    },
    {
      color: "danger",
      outline: false,
      type: "submit",
      block: false,
      rounded: false,
      text: "Submit",
      link: false,
    },
    {
      color: "warning",
      outline: false,
      type: "reset",
      block: false,
      rounded: false,
      text: "Reset",
      link: false,
    },
  ];
  const iconButtons = [
    {
      color: "primary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Primary",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-bullseye"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
          <path
            fillRule="evenodd"
            d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
          />
          <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
      ),
    },
    {
      color: "sucecss",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Success",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-check2-all"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
          <path d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z" />
        </svg>
      ),
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
                {defaultButtons.map((button, index) => (
                  <Button {...button} key={index} />
                ))}
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
                {defaultOutlineButtons.map((button, index) => (
                  <Button key={index} {...button} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                Button types - link, default, input, submit and reset
              </div>
              <div className="mb-4 card-subtitle">
                Different uses cases for the button types
              </div>
              <div className="button-items">
                {buttonTypes.map((button, index) => {
                  return <Button {...button} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsPage;
