import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import TestDashboard from "./components/TestDashboard";
import VerticalMenu from "./components/VerticalMenu";
import SettingsBar from "./components/SettingsBar";
import MainContent from "./components/MainContent";

import CardsPage from "./components/pages/CardsPage";
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
