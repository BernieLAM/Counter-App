import React, { Component } from "react";
import Counter from "./components/Counter";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Counter />
        <Counter />
      </>
    );
  }
}

export default App;
