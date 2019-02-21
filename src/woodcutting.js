import React, { Component } from "react";

export default class woodcutting extends Component {
  state = {
    killProgress: 0,
    attack: 1,
    loot: 0
  };
  addkillProgress = () => {
    let { killProgress, loot } = this.state;
    if (killProgress >= 100) {
      this.setState({
        killProgress: 0,
        loot: loot + 1
      });
    } else {
      this.setState({
        killProgress: killProgress + this.state.attack
      });
    }
  };
  addAttack = () => {
    if (this.props.gold < 200) return;
    this.props.setGold(200);
    this.setState({
      attack: this.state.attack + 1
    });
  };
  sell = () => {
    if (this.state.loot <= 0) return;
    this.props.setGold(-10);
    this.setState({
      loot: this.state.loot - 1
    });
  };
  render() {
    return (
      <div>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${this.state.killProgress}%` }}
          >
            {this.state.killProgress}%
          </div>
        </div>
        <button className="btn btn-danger" onClick={this.addkillProgress}>
          Wood Cutting
        </button>
        <button className="btn btn-success" onClick={this.addAttack}>
          buy Axe ($200)
        </button>
        <br />
        Axe: {this.state.attack}
        <br />
        Wood: {this.state.loot}
        <br />
        <button className="btn btn-warning" onClick={this.sell}>
          Sell For $10
        </button>
      </div>
    );
  }
}
