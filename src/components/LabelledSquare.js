import React from 'react';

const LabelledSquare = (props) =>{
    return (
        <div className="labelled-square-div">
            <label className="top-label">
                {props.label}
            </label>
            <div className={`fixed-square ${props.color}`}>
            </div>
        </div>
    )
}

export default LabelledSquare;