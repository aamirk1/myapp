import React from 'react';

const Staff = (props) => {
    const submi = () =>{
        console.log('Button Click')
    }
    return(
        <div>
            <h4>Hello {props.name} </h4>
            <button onClick={submi}>Submit</button>
            <h3>{props.a}</h3>
        </div>
    );
}
export default Staff;