import React, { Component } from "react";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  startTimer() {
    clearInterval(this.interval);
    this.interval = setInterval(() => this.tick(), 1000);
  }

  resetTimer() {
    this.stopTimer();
    this.state.seconds = 0;
    this.startTimer();
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        <button onClick={this.startTimer.bind(this)}>Start</button>
        <button onClick={this.stopTimer.bind(this)}>Stop</button>
        <button onClick={this.resetTimer.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default Timer;
