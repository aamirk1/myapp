//state
import React, { Component } from 'react';

// class Stu extends Component{
//     state = {
//       name: "Aamir"  
//     };
//     render(){
//         return <h1>hello {this.state.name}</h1>;
//     }
// }

// with constructor
class Stu extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: "sspatvarcl"
        };
    }
    render(){
        return <h1> hello {this.state.name} </h1>
    }
}
export default Stu;