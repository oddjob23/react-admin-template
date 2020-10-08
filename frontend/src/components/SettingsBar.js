import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import RadioSettings from "./RadioSettings";

const SettingsBar = () => {
  document.querySelector("body").classList.add("settings-bar-enabled");
  const [layout, setLayout] = useState({
    layoutWidth: "Fluid",
    typeLayout: "Vertical",
    topbarTheme: "Dark",
    sidebarType: "Default",
    sidebarColor: "Dark",
  });
  const settings = [
    {
      title: "Layouts",
      properties: [
        {
          id: "vertical",
          type: "radio",
          name: "typeLayout",
          value: "Vertical",
          checked: true,
        },
        {
          id: "horizontal",
          type: "radio",
          name: "typeLayout",
          value: "Horizontal",
          checked: false,
        },
      ],
    },
    {
      title: "Layout Width",
      properties: [
        {
          id: "fluid",
          type: "radio",
          name: "layoutWidth",
          value: "Fluid",
          checked: true,
        },
        {
          id: "boxed",
          type: "radio",
          name: "layoutWidth",
          value: "Boxed",
          checked: false,
        },
      ],
    },
    {
      title: "Topbar Theme",
      properties: [
        {
          id: "dark-topbar",
          type: "radio",
          name: "topbarTheme",
          value: "Dark",
          checked: true,
        },
        {
          id: "light-topbar",
          type: "radio",
          name: "topbarTheme",
          value: "Light",
          checked: false,
        },
      ],
    },
    {
      title: "Left Sidebar Type",
      properties: [
        {
          id: "default",
          type: "radio",
          name: "sidebarType",
          value: "Default",
          checked: true,
        },
        {
          id: "compact",
          type: "radio",
          name: "sidebarType",
          value: "Compact",
          checked: false,
        },
        {
          id: "icon-type",
          type: "radio",
          name: "sidebarType",
          value: "Icon",
          checked: false,
        },
      ],
    },
    {
      title: "Left Sidebar Color",
      properties: [
        {
          id: "light-color",
          type: "radio",
          name: "sidebarColor",
          value: "Light",
          checked: false,
        },
        {
          id: "dark-color",
          type: "radio",
          name: "sidebarColor",
          value: "Dark",
          checked: true,
        },
        {
          id: "colored",
          type: "radio",
          name: "sidebarColor",
          value: "Colored",
          checked: false,
        },
      ],
    },
  ];

  const handleToggle = (e) => {
    e.preventDefault();
    document.querySelector("body").classList.toggle("settings-bar-enabled");
  };
  const changeHandler = (value) => {
    setLayout((state) => {
      return {
        ...state,
        ...value,
      };
    });
  };
  useEffect(() => {
    console.log(layout);
    const body = document.querySelector("body");
    if (layout.topbarTheme === "Light") {
      body.setAttribute("data-topbar", "light");
    } else {
      body.setAttribute("data-topbar", "dark");
    }
    if (layout.sidebarColor === "Light") {
      body.setAttribute("data-sidebar", "light");
    } else if (layout.sidebarColor === "Dark") {
      body.setAttribute("data-sidebar", "dark");
    } else {
      body.setAttribute("data-sidebar", "dark");
    }
    if (layout.sidebarType === "Compact") {
      body.setAttribute("data-sidebar-size", "small");
      body.classList.remove("vertical-collapsed");
    } else if (layout.sidebarType === "Icon") {
      body.setAttribute("data-sidebar-size", "");
      body.classList.add("vertical-collapsed");
      document
        .querySelectorAll(".sub-menu")
        .forEach((el) => el.classList.remove("mm-show"));
    } else {
      body.setAttribute("data-sidebar-size", "default");
      body.classList.remove("vertical-collapsed");
    }
  }, [layout]);
  return (
    <div className="settings-bar">
      <SimpleBar style={{ maxHeight: "100%" }}>
        <div className="settings-title px-3 py-4 d-flex align-items-center justify-content-between">
          <a
            href="#"
            className="settings-bar-toggle float right order-1"
            onClick={handleToggle}
            id="closeSettings"
          >
            <i className="mdi mdi-close noti-icon"></i>
          </a>
          <h5 className="m-0">Settings</h5>
        </div>
        <hr className="my-0" />
        <div className="p-4">
          {settings.map((el, index) => {
            return (
              <RadioSettings
                input={el.properties}
                title={el.title}
                key={index}
                onChange={changeHandler}
              />
            );
          })}
          {/* <div className="radio-settings">
            <span className="mb-2 d-block">Layouts</span>
            <input
              type="radio"
              id="vertical"
              name="typeLayout"
              value="vertical"
              checked
            />
            <label for="vertical">Vertical</label>
            <input
              type="radio"
              name="typeLayout"
              id="horizontal"
              value="horizontal"
            />
            <label for="horizontal">Horizontal</label>
          </div>
          <hr className="mt-1" />
          <div className="radio-settings">
            <span className="mb-2 d-block">Layout Width</span>
            <input
              type="radio"
              id="fluid"
              name="layoutWidth"
              value="fluid"
              checked
            />
            <label for="fluid">Fluid</label>
            <input type="radio" name="layoutWidth" id="boxed" value="boxed" />
            <label for="boxed">Boxed</label>
          </div>
          <hr className="mt-1" />
          <div className="radio-settings">
            <span className="mb-2 d-block">Topbar Theme</span>
            <input
              type="radio"
              id="dark-topbar"
              name="topbarTheme"
              value="dark"
              checked
            />
            <label for="dark-topbar">Dark</label>
            <input
              type="radio"
              name="topbarTheme"
              id="light-topbar"
              value="light"
            />
            <label for="light-topbar">Light</label>
          </div>
          <hr className="mt-1" />
          <div className="radio-settings">
            <span className="mb-2 d-block">Left Sidebar Type</span>
            <input
              type="radio"
              id="default"
              name="sidebarType"
              value="Default"
              checked
            />
            <label for="default">Default</label>
            <input
              type="radio"
              id="compact"
              name="sidebarType"
              value="Compact"
            />
            <label for="compact">Compact</label>
            <input type="radio" name="sidebarType" id="icon" value="Icon" />
            <label for="icon">Icon</label>
          </div>
          <hr className="mt-1" />
          <div className="radio-settings">
            <span className="mb-2 d-block">Left Sidebar Color</span>

            <input type="radio" id="light" name="sidebarColor" value="light" />
            <label for="light">Light</label>
            <input
              type="radio"
              id="dark"
              name="sidebarColor"
              value="dark"
              checked
            />
            <label for="dark">Dark</label>
            <input
              type="radio"
              name="sidebarColor"
              id="colored"
              value="colored"
            />
            <label for="colored">Colored</label>
          </div>
          <hr className="mt-1" /> */}
          <div className="form-group">
            <span className="mb-2 d-block" id="switch-title">
              Preloader
            </span>
            <div className="custom-control custom-switch">
              <input
                type="checkbox"
                id="switch_1"
                className="custom-control-input checkbox"
              />
              <label htmlFor="switch_1" className="custom-control-label">
                Preloader
              </label>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default SettingsBar;
