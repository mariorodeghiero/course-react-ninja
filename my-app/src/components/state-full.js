import React, { Component } from "react";

class Estado extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Mário Antônio do A. Rodeghiero"
    };
  }
  render() {
    return (
      <h4
        onClick={() =>
          this.setState({
            text: "Novo texto"
          })
        }
      >
        {this.state.text}
      </h4>
    );
  }
}

export default Estado;
