import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TestDashboard from "./components/TestDashboard";
import VerticalMenu from "./components/VerticalMenu";
import SettingsBar from "./components/SettingsBar";

function App() {
  return (
    <Router>
      <Switch>
        <div id="wrapper">
          <Header />
          <VerticalMenu />
          <SettingsBar />
          <div className="settings-bar-overlay"></div>
          <Route path="/calendar">
            <h1>Test</h1>
          </Route>
          <Route path="/" component={TestDashboard}></Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
