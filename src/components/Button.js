import React from 'react';

const Button = (props) =>{
    return (
        <React.Fragment>
            <button className={`btn ${props.color}`} onClick={props.onClick}>Generate</button>
        </React.Fragment>
    )
}

export default Button;