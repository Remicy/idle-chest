import React, { Component } from "react";

export default class chest extends Component {
  state = {
    killProgress: 0,
    chest: 0,
    skillOpen: false
  };
  constructor() {
    super();
    this.runProgress();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.auto != this.props.auto && this.state.killProgress >= 100) {
      this.runProgress();
    }
  }
  runProgress = () => {
    var interval = setInterval(() => {
      this.setState({
        killProgress: this.state.killProgress + 1
      });
      if (this.state.killProgress >= 100) {
        clearInterval(interval);
        if (this.props.auto) {
          this.setState({
            killProgress: 0,
            chest: this.state.chest + 1
          });
          this.runProgress();
        }
      }
    }, 100);
  };
  startKill = () => {
    if (this.state.killProgress !== 100) return;
    if (this.props.auto) return;
    this.setState({
      killProgress: 0,
      chest: this.state.chest + 1
    });
    setTimeout(this.runProgress(), 1000);
  };

  openChest = () => {
    if (this.state.chest === 0) return;
    this.setState({
      chest: this.state.chest - 1
    });
    this.props.showSkill();
  };
  render() {
    return (
      <div className="game">
        Idle Chest
        <br />
        <br />
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${this.state.killProgress}%` }}
          >
            {this.state.killProgress}%
          </div>
        </div>
        <br />
        {!this.props.auto && (
          <button className="btn btn-danger" onClick={this.startKill}>
            Collect
          </button>
        )}
        <br />
        <br />
        Chest : {this.state.chest}
        <br />
        <br />
        <button className="btn btn-warning" onClick={this.openChest}>
          Open
        </button>
      </div>
    );
  }
}
