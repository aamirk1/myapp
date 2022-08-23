//state
import React, { Component } from 'react';
import "./App.css"
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
        super();
        this.state = {
            name: "Aamir"
        }
    }
    render(){
        return<h3 className='ne'>Hello {this.state.name}</h3> ;
    };
}
export default Stu;