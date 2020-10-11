import React from "react";
import Card from "../Card";
import Alert from "../Alert";
const AlertsPage = () => {
  const defaultAlerts = [
    {
      title: "Default alerts",
      cols: 6,
      alerts: [
        {
          title: "Default primary alert",
          color: "primary",
          text: null,
          link: null,
          icon: null,
          dismissing: null,
        },
        {
          title: "Default secondary alert",
          color: "secondary",
          text: null,

          link: null,
          icon: null,
          dismissing: null,
        },
        {
          title: "Default success alert",
          color: "success",
          text: null,

          link: null,
          icon: null,
          dismissing: null,
        },
        {
          title: "Default warning alert",
          color: "warning",
          text: null,

          link: null,
          icon: null,
          dismissing: null,
        },
        {
          title: "Default info alert",
          color: "info",
          text: null,

          link: null,
          icon: null,
          dismissing: null,
        },
      ],
    },
    {
      title: "Link color",
      cols: 6,
      alerts: [
        {
          title: (
            <span>
              Primary alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>{" "}
              embeded inside the title,
            </span>
          ),
          color: "primary",
          text: null,
          link: {
            show: true,
            to: "/somewhere",
            text: "an example link",
          },
          icon: null,
          dismissing: null,
        },
        {
          title: (
            <span>
              Secondary alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>{" "}
              embeded inside the title,
            </span>
          ),
          color: "secondary",
          text: null,

          link: {
            show: true,
            to: "/somewhere",
            text: "an example link",
          },
          icon: null,
          dismissing: null,
        },
        {
          title: (
            <span>
              Success alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>{" "}
              embeded inside the title,
            </span>
          ),
          color: "success",
          text: null,

          link: {
            show: true,
            to: "/somewhere",
            text: "an example link",
          },
          icon: null,
          dismissing: null,
        },
        {
          title: (
            <span>
              Warning alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>{" "}
              embeded inside the title,
            </span>
          ),
          color: "warning",
          text: null,

          link: {
            show: true,
            to: "/somewhere",
            text: "an example link",
          },
          icon: null,
          dismissing: null,
        },
        {
          title: (
            <span>
              Info alert with{" "}
              <a href="#" className="alert-link">
                an example link
              </a>{" "}
              embeded inside the title,
            </span>
          ),
          color: "info",
          text: null,

          link: {
            show: true,
            to: "/somewhere",
            text: "an example link",
          },
          icon: null,
          dismissing: null,
        },
      ],
    },
  ];

  const dissmisableAlerts = [
    {
      title: {
        text: "Dismissing",
      },
      cols: 6,
      subtitle: "You can see this in action with a live demo",
      alerts: [
        {
          title: "Default primary alert",
          color: "primary",
          text: null,
          link: null,
          icon: null,
          dismissing: true,
        },
        {
          title: "Default secondary alert",
          color: "secondary",
          text: null,

          link: null,
          icon: null,
          dismissing: true,
        },
        {
          title: "Default success alert",
          color: "success",
          text: null,

          link: null,
          icon: null,
          dismissing: true,
        },
        {
          title: "Default warning alert",
          color: "warning",
          text: null,

          link: null,
          icon: null,
          dismissing: true,
        },
        {
          title: "Default info alert",
          color: "info",
          text: null,

          link: null,
          icon: null,
          dismissing: true,
        },
      ],
    },
  ];
  const dissmisableWithIcons = [
    {
      title: {
        text: "With Icons",
      },
      cols: 6,
      subtitle: "You can see this in action with a live demo",
      alerts: [
        {
          title: "Default primary alert",
          color: "primary",
          text: null,
          link: null,
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
          dismissing: true,
        },
        {
          title: "Default secondary alert",
          color: "secondary",
          text: null,

          link: null,
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-pencil"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
              />
            </svg>
          ),
          dismissing: true,
        },
        {
          title: "Default success alert",
          color: "success",
          text: null,

          link: null,
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

          dismissing: true,
        },
        {
          title: "Default warning alert",
          color: "warning",
          text: null,

          link: null,
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
          dismissing: true,
        },
        {
          title: "Default info alert",
          color: "info",
          text: null,

          link: null,
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-info-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588z" />
              <circle cx="8" cy="4.5" r="1" />
            </svg>
          ),
          dismissing: true,
        },
      ],
    },
  ];
  console.log(defaultAlerts);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="page-title d-flex align-items-center justify-content-between">
            <h4 className="mb-0 font-size-18">Alerts</h4>
            <div className="page-title-right">
              <nav className="" aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="#">UI Elements</a>
                  </li>
                  <li className="active breadcrumb-item" aria-current="page">
                    <a href="#r">Alerts</a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-4">
        {defaultAlerts.map((col, rIndex) => {
          return (
            <div className={`col-xl-${col.cols}`} key={rIndex}>
              <div className="card">
                <div className="card-body">
                  <div className="mb-4 card-title">Default Alersts</div>
                  <p className="mb-3 card-subtitle">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium pariatur harum est?
                  </p>
                  {col.alerts.map((alert, aIndex) => (
                    <Alert {...alert} key={aIndex} />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row mb-4">
        {dissmisableAlerts.map((col, colIndex) => {
          return (
            <div className={`col-xl-${col.cols}`} key={colIndex}>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">{col.title.text}</div>
                  <div className="card-subtitle">{col.subtitle}</div>
                </div>
                <div className="card-body">
                  {col.alerts.map((alert, index) => {
                    return <Alert {...alert} key={index} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
        {dissmisableWithIcons.map((col, colIndex) => {
          return (
            <div className={`col-xl-${col.cols}`} key={colIndex}>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">{col.title.text}</div>
                  <div className="card-subtitle">{col.subtitle}</div>
                </div>
                <div className="card-body">
                  {col.alerts.map((alert, index) => {
                    return <Alert {...alert} key={index} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AlertsPage;
