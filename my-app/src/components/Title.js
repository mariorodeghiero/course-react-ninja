import React, { Component } from "react";

class Title extends Component {
  // props pode ser um objeto , array
  static defaultProps = {
    name: "stranger",
    text: "Welcome",
    pets: {
      cats: 3,
      dogs: 0
    }
  };

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>{this.props.text}</h2>
        <h2>your age is: {this.props.age}</h2>
        <h3>Cats: {this.props.pets.cats}</h3>
        <h3> dogs: {this.props.pets.dogs}</h3>
        <hr />
      </div>
    );
  }
}

export default Title;
