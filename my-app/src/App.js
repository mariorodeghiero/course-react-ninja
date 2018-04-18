import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import "./App.css";
import Square from "./components/square";
import Button from "./components/button";

class App extends Component {
  render() {
    return (
      <div>
        <div
          className="container"
          onClick={e => {
            alert("clicou");
          }}
        >
          {["blue", "red", "pink"].map((square, index) => (
            <Square key={index} color={square} />
          ))}
        </div>
        <Title name="Mário Rodeghiero" text="Welcome to..." age={30} />
        <Button onClick="console.log('tex')">Click</Button>
      </div>
    );
  }
}

export default App;
