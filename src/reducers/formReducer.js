import { CHANGE_ROWS, CHANGE_COLUMNS, INPUT_ERROR } from '../actions/types';

const INITIAL_STATE = {
    rows: 10,
    columns:10,
    error: {
        rows:"",
        columns: ""
    }
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case CHANGE_ROWS:
            return { 
                ...state, 
                rows: action.payload
            }
        case CHANGE_COLUMNS:
            return{
                ...state,
                columns: action.payload
            }
        case INPUT_ERROR:
            return{
                ...state,
                error: {
                    ...state.error,
                   [action.payload.inputName]: action.payload.error
                }
            }
        default:
            return state;
    }
}
