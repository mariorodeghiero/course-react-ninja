import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  render() {
    return <Title name="Mário Rodeghiero" text="Welcome to..." age={30} />;
  }
}

export default App;
