import React from 'react';

import './App.css';

//Components
import InputForm from './InputForm';
import LabelledButton from './LabelledButton';
import LabelledSquare from './LabelledSquare';
import Grid from './Grid';

//App image
import GridsterLogo from '../images/Gridster-Logo.png'

class App extends React.Component{

    render(){
        return(
            <div className="app-container">
                <div className="app-header">
                    <img src={GridsterLogo} alt="Gridster" className="app-image"></img>
                </div>
                <InputForm />
                <Grid />
                <div className="ui-states"> 
                    <span className="top-span">UI States</span>
                    <LabelledButton color="primary" text="Default"/>
                    <LabelledButton color="secondary" text="Hover"/>
                    <LabelledButton color="third" text="Down"/>
                </div>
                <div className="square-div">
                    <div>
                        <LabelledSquare label="Filled(default)" color="filled"/>
                        <LabelledSquare label="Hover" color="hover"/>
                        <LabelledSquare label="Down" color="down"/>
                        <LabelledSquare label="Clear" color="clear"/>
                    </div>
                    <div>
                        <LabelledSquare label="Start point" color="start-point"/>
                        <LabelledSquare label="End point" color="end-point"/>
                        <LabelledSquare label="Shortest path" color="shortest-path"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default App;