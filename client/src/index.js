import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import Contact from "./pages/Contact";
import AddDog from "./pages/AddDog";
import EditDog from "./pages/EditDog";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/editDog/:id" component={EditDog} />
      <Route path="/addDog" component={AddDog} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
