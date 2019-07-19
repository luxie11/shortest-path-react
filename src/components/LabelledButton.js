import React from 'react';
import Button from './Button';

const LabelledButton = (props) =>{
    return (
        <div className="labelled-button-div">
            <label className="top-label">{props.text}</label>
            <Button color={props.color}/>
        </div>
    )
}

export default LabelledButton;