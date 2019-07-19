import React from 'react';

const LabelledInput = (props) =>{

    return(
        <div className="labeled-input">
            <label>{props.label}</label>
            <input name={props.name} defaultValue={props.value} />
        </div>
    )
}

export default LabelledInput;