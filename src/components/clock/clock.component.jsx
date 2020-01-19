import React, { Component } from "react";
import "./clock.component.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setTime();
    }, 1000);
  }

  setTime = () => {
    this.setState({
      currentTime: new Date()
    });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="clock">
        <h1 className="clock-text">
          {this.state.currentTime.toLocaleTimeString()}
        </h1>
      </div>
    );
  }
}

export default Clock;
