import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import VerticalMenu from "./components/VerticalMenu";
import SettingsBar from "./components/SettingsBar";
import MainContent from "./components/MainContent";

import CardsPage from "./components/pages/CardsPage";
import AlertsPage from "./components/pages/AlertsPage";
import ButtonsPage from "./components/pages/ButtonsPage";
import FormPage from "./components/pages/FormPage";
import LoginPage from "./components/pages/authentication/LoginPage";
import RegisterPage from "./components/pages/authentication/RegisterPage";

import FormValidation from "./components/pages/FormValidation";
import TodoPage from "./components/pages/TodoPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />

        <div id="wrapper">
          <Header />
          <VerticalMenu />
          <SettingsBar />
          <MainContent>
            <Route path="/ui-cards" component={CardsPage} />
            <Route path="/ui-alerts" component={AlertsPage} />
            <Route path="/ui-buttons" component={ButtonsPage} />
            <Route path="/form-elements" component={FormPage} />
            <Route path="/form-validation" component={FormValidation} />
            <Route path="/todo" component={TodoPage} />
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
