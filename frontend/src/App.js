import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";
import SettingsBar from "./components/SettingsBar";
import MainContent from "./components/MainContent";

import CardsPage from "./components/pages/CardsPage";
import AlertsPage from "./components/pages/AlertsPage";
function App() {
  return (
    <Router>
      <Switch>
        <div id="wrapper">
          <Header />
          <VerticalMenu />
          <SettingsBar />
          <MainContent>
            <Route path="/ui-cards" component={CardsPage} />
            <Route path="/ui-alerts" component={AlertsPage} />
          </MainContent>
          <div className="settings-bar-overlay"></div>
          <Route path="/calendar">
            <h1>Test</h1>
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
