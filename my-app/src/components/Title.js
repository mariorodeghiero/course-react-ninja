import React, { Component } from "react";

class Title extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <hr />
      </div>
    );
  }
}

export default Title;
