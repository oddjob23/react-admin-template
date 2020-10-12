import React from "react";
import Button from "../Button";
import PageTitle from "../PageTitle";
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
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Danger",
    },
    {
      color: "dark",
      outline: true,
      type: "button",
      block: false,
      rounded: false,
      text: "Dark",
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
      color: "success",
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
      icon: (
        <svg
          width="1.0625em"
          height="1em"
          viewBox="0 0 17 16"
          className="bi bi-exclamation-triangle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M7.938 2.016a.146.146 0 0 0-.054.057L1.027 13.74a.176.176 0 0 0-.002.183c.016.03.037.05.054.06.015.01.034.017.066.017h13.713a.12.12 0 0 0 .066-.017.163.163 0 0 0 .055-.06.176.176 0 0 0-.003-.183L8.12 2.073a.146.146 0 0 0-.054-.057A.13.13 0 0 0 8.002 2a.13.13 0 0 0-.064.016zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
          />
          <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
        </svg>
      ),
    },

    {
      color: "danger",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Danger",
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-slash-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fillRule="evenodd"
            d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      ),
    },

    {
      color: "light",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "light",
      loading: true,
      icon: (
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          className="bi bi-hourglass"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 1.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1-.5-.5zm2.5.5v1a3.5 3.5 0 0 0 1.989 3.158c.533.256 1.011.791 1.011 1.491v.702c0 .7-.478 1.235-1.011 1.491A3.5 3.5 0 0 0 4.5 13v1h7v-1a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351v-.702c0-.7.478-1.235 1.011-1.491A3.5 3.5 0 0 0 11.5 3V2h-7z"
          />
        </svg>
      ),
    },
  ];
  const buttonSized = [
    {
      color: "primary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Primary large button",
      loading: false,
      size: "lg",
    },
    {
      color: "secondary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Secondary large button",
      size: "lg",
    },
    {
      color: "success",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Success small button",
      size: "sm",
    },
    {
      color: "danger",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Danger small button",
      size: "sm",
    },
  ];
  const buttonWidth = [
    {
      color: "primary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "XS",
      loading: false,
      size: null,
      width: "xs",
    },
    {
      color: "secondary",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Small",
      size: null,
      width: "sm",
    },
    {
      color: "success",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Medium",
      size: null,
      width: "md",
    },
    {
      color: "danger",
      outline: false,
      type: "button",
      block: false,
      rounded: false,
      text: "Large",
      size: null,
      width: "lg",
    },
  ];
  return (
    <>
      <PageTitle title="Buttons" link1={"UI Elements"} link2={"Buttons"} />

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
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Buttons with icons</div>
              <div className="card-subtitle mb-4">
                Simply add icon to the button object
              </div>
              <div className="button-items">
                {iconButtons.map((button, index) => {
                  return <Button {...button} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Button Sizes</div>
              <div className="card-subtitle mb-4">
                Controlled with property size on the button object. Possible
                values are <code>lg</code> &amp; <code>sm</code>
              </div>
              <div className="button-items">
                {buttonSized.map((b, i) => {
                  return <Button {...b} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="card">
            <div className="card-body">
              <div className="card-title">Buttons Width</div>
              <div className="card-subtitle mb-4">
                Add <code>xs, sm, md or lg</code> to property width of the
                object button
              </div>
              <div className="button-items">
                {buttonWidth.map((b, i) => {
                  return <Button {...b} key={i} />;
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
