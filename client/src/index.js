import React, { useState } from "react";
import ReactDOM from "react-dom";
import DogsPage from "./pages/DogsPage";
import Contact from "./pages/Contact";
import AddDog from "./pages/AddDog";
import EditDog from "./pages/EditDog";
import PageTabs from "./components/PageTabs";
import { withRouter, Route, BrowserRouter as Router } from "react-router-dom";

function Routing() {
  const [tabNumber, setTabNumber] = useState(0);
  return (
    <Router>
      <PageTabs tabNumber={tabNumber} />
      <div>
        <Route exact path="/" component={DogsPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/editDog/:id" component={EditDog} />
        <Route path="/addDog" component={AddDog} />
      </div>
    </Router>
  );
}

ReactDOM.render(<Routing />, document.getElementById("root"));
