import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import "./App.css";
import Square from "./components/square";
import Button from "./components/button";
import SeachButton from "./components/search-button";
import SearchButton from "./components/search-button";

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
        <Button>Click</Button>
        <SearchButton />
      </div>
    );
  }
}

export default App;
