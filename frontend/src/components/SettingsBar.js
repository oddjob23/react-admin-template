import React from "react";
import SimpleBar from "simplebar-react";

const SettingsBar = () => {
  return (
    <SimpleBar style={{ maxHeight: "100%" }} className="settings-bar">
      <div className="settings-title px-3 py-4">
        <a href="#" className="settings-bar-toggle float right">
          <i class="mdi mdi-close noti-icon"></i>
        </a>
        <h5 className="m-0">Settings</h5>
      </div>
    </SimpleBar>
  );
};

export default SettingsBar;
