import React, { Component } from 'react';
import Mark from './Mark'
export default class Updatin extends Component {
    constructor(){
        super();
        this.state = {
            roll: 101
        }
    }
    clickHandle = () =>{
        console.log("button Clicked");
        // this.setState({roll:103});
        this.setState({roll: this.state.roll +2});
    };
  render() {
    console.log("render");
    return (
      <div>
        <Mark roll={this.state.roll} />
        <button onClick={this.clickHandle}>Change</button>
      </div>
    );
  }
}
