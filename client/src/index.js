import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Contact from "./pages/Contact";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
