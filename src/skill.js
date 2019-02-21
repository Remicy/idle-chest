import React, { Component } from "react";
import Fighting from "./fighting";
import Mining from "./mining";
import WoodCutting from "./woodcutting";
import Fishing from "./fishing";
import "./style.css";

export default class skill extends Component {
  state = {
    gold: this.props.gold,
    autoPurchased: false
  };

  buyClicker = value => {
    if (this.state.gold < value) return;
    this.setState(
      {
        gold: this.state.gold - value,
        autoPurchased: true
      },
      () => {
        this.props.setGold(this.state.gold);
      }
    );

    this.props.autoOn();
  };

  setGold = value => {
    if (this.state.gold < value) return;
    this.setState(
      {
        gold: this.state.gold - value
      },
      () => {
        this.props.setGold(this.state.gold);
      }
    );
  };
  componentDidUpdate(prevPros) {
    if (prevPros.gold != this.props.gold) {
      this.setState({
        gold: this.props.gold
      });
    }
  }
  render() {
    let { autoPurchased } = this.state;
    return (
      <div>
        <br />
        Gold: ${this.state.gold}
        <br />
        {!autoPurchased && (
          <button className="btn btn-info" onClick={() => this.buyClicker(50)}>
            buy Collcetor ($50)
          </button>
        )}
        <div className="skills">
          {autoPurchased && (
            <Fighting
              className="skill"
              gold={this.state.gold}
              setGold={this.setGold}
            />
          )}
          　
          {autoPurchased && (
            <Mining
              className="skill"
              gold={this.state.gold}
              setGold={this.setGold}
            />
          )}
          　
          {autoPurchased && (
            <WoodCutting
              className="skill"
              gold={this.state.gold}
              setGold={this.setGold}
            />
          )}
          　
          {autoPurchased && (
            <Fishing
              className="skill"
              gold={this.state.gold}
              setGold={this.setGold}
            />
          )}
        </div>
      </div>
    );
  }
}
