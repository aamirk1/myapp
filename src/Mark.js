import React, { Component } from 'react'

export default class Mark extends Component {
    constructor(props){
        super(props);
        this.state = {
            nroll: this.props.roll
        }
    };
    static getDerivedStateFromProps(props, state){
        console.log("get drived");
        console.log(props, state);
        if(props.roll !== state.nroll){
            return { nroll: props.roll};
        }
        return null;
    }
  render() {
    console.log(" mark render");
    return (
      <div>
        <h1>Roll = {this.state.nroll}</h1>
      </div>
    )
  }
}
