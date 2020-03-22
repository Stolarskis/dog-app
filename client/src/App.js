import React, { Component } from "react";
import "./App.css";
import Dogs from "./Dogs.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  render() {
    return (
      <div className="App">
        <Dogs />
      </div>
    );
  }
}

export default App;
