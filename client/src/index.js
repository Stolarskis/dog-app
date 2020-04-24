import React from "react";
import ReactDOM from "react-dom";
import DogsPage from "./pages/DogsPage";
import Contact from "./pages/Contact";
import AddDog from "./pages/AddDog";
import EditDog from "./pages/EditDog";
import EditVacc from "./pages/EditVacc";
import PageTabs from "./components/PageTabs";
import AddDogButton from "./components/AddDogButton";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <PageTabs />
    <AddDogButton />
    <div>
      <Route exact path="/" component={DogsPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/editDog/:id" component={EditDog} />
      <Route path="/addDog" component={AddDog} />
      <Route path="/setDueDates" component={EditVacc} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
