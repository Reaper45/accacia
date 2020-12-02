import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutPage from "./pages/about";
import ContactsPage from "./pages/contacts";
import HomePage from "./pages/home";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} exact />
      <Route path="/contacts" component={ContactsPage} exact />
    </Switch>
  );
}

export default App;
