import React, { Component } from "react";
import Skill from "./skill";
import Chest from "./chest";
import "./style.css";

export default class game extends Component {
  state = {
    skillOpen: false,
    gold: 0,
    auto: false
  };
  autoOn = () => {
    this.setState({
      auto: true
    });
  };
  setGold = value => {
    console.log(value);
    this.setState({
      gold: value
    });
  };
  openSkill = () => {
    this.setState({
      skillOpen: true,
      gold: this.state.gold + parseInt(Math.random() * 100)
    });
  };
  render() {
    return (
      <div className="game">
        <Chest showSkill={this.openSkill} auto={this.state.auto} />
        {this.state.skillOpen && (
          <Skill
            gold={this.state.gold}
            autoOn={this.autoOn}
            setGold={this.setGold}
          />
        )}
      </div>
    );
  }
}
