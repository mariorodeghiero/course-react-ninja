import React, { Component } from "react";
import Square from "./square";
import Button from "./button";

class ChangedState extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "red" };
  }
  render() {
    return (
      <div>
        <Square color={this.state.color} />
        {["red", "green", "blue"].map(color => (
          <Button key={color} handleClick={() => this.setState({ color })}>
            {" "}
            {color}
          </Button>
        ))}
      </div>
    );
  }
}

export default ChangedState;
