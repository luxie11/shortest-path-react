import React from 'react';
import { connect } from 'react-redux';
import { changeColumns, changeRows, submitInput, inputError, clearLastGrid } from '../actions';

import Button from './Button';

class InputForm extends React.Component{

    validateInput(inputName, value){
        let integerValue = Number(value);
        if(!Number.isInteger(integerValue)) {
            return this.props.inputError(inputName, "Please insert Integer value")
        }
        if(integerValue > 20){
            return this.props.inputError(inputName, "Maximum value is 20");
        }
        return this.props.inputError(inputName, "");
    }

    handleSubmit(){
        const { rows, columns} = this.props;
        if(this.props.error.rows === "" && this.props.error.columns === ""){
            this.props.submitInput(
                Number(rows), 
                Number(columns)
            );
            this.props.clearLastGrid();
        } 
    }

    renderError(){
        return(
            <React.Fragment>
                <div className="error-div">
                    <span style={{color:'#aa2d2b', fontSize:'12px'}}>{this.props.error.rows}</span>
                </div>
                <div className="error-div">
                    <span style={{color:'#aa2d2b', fontSize:'12px'}}>{this.props.error.columns}</span>
                </div>  
            </React.Fragment>
        )
    }

    render(){
        const { rows, columns } = this.props;
        return(
            <div>
                <div className="input-container">
                <form className="form-div" onClick={ (event)=>{ event.preventDefault() }}>
                    <div className="labeled-input">
                        <label>Rows</label>
                        <input 
                            name="rows" 
                            value={rows} 
                            onChange={ 
                                event => {
                                    this.validateInput(event.target.name, event.target.value);
                                    this.props.changeRows(event.target.value)
                                }
                            }
                        />
                    </div>
                    <div className="symbol-div">
                        <span>x</span>
                    </div>
                    <div className="labeled-input">
                        <label>Columns</label>
                        <input
                            name="columns" 
                            value={columns} 
                            onChange={ 
                                event => {        
                                    this.validateInput(event.target.name, event.target.value);
                                    this.props.changeColumns(event.target.value);
                                }
                            }
                        />
                    </div>
                    <div className="button-div">
                        <Button color="primary" onClick={() => this.handleSubmit()}/>
                    </div>
                </form>
            </div > 
                {this.renderError()}
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        columns:state.form.columns,
        rows:state.form.rows,
        error:state.form.error
    }
}

export default connect(mapStateToProps,{
    changeColumns, 
    changeRows, 
    inputError,
    submitInput,
    clearLastGrid
})(InputForm);