import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import "./App.css";
import Square from "./components/square";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          {["blue", "red", "pink"].map((square, index) => (
            <Square key={index} color={square} />
          ))}
        </div>
        <Title name="Mário Rodeghiero" text="Welcome to..." age={30} />
      </div>
    );
  }
}

export default App;
