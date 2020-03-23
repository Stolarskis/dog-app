import React, { Component } from "react";
import Dogs from "../components/Dogs";
import Tabs from "../components/PageTabs.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  render() {
    return (
      <div className="App">
        <Tabs tabNumber={0} />
        <Dogs />
      </div>
    );
  }
}

export default App;
