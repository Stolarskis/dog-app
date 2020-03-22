import React, { Component } from "react";
import Dogs from "../components/Dogs";

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
