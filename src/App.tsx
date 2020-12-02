import React from "react";
import { Switch, Route } from "react-router-dom";

import AboutPage from "./pages/about";
import ContactsPage from "./pages/contacts";
import HomePage from "./pages/home";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact />
      <Route path="/about-us" component={AboutPage} />
      <Route path="/contact-us" component={ContactsPage} />
    </Switch>
  );
}

export default App;
