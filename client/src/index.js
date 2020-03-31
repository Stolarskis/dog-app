import React from "react";
import ReactDOM from "react-dom";
import DogsPage from "./pages/DogsPage";
import Contact from "./pages/Contact";
import AddDog from "./pages/AddDog";
import EditDog from "./pages/EditDog";
import PageTabs from "./components/PageTabs";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <PageTabs />
    <div>
      <Route exact path="/" component={DogsPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/editDog/:id" component={EditDog} />
      <Route path="/addDog" component={AddDog} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
