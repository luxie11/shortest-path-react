import { 
    CHANGE_ROWS, 
    CHANGE_COLUMNS, 
    INPUT_ERROR, 
    SUBMIT_INPUT, 
    GENERATE_SQUARES,
    CLICK_SQUARE,
    CLEAR_SQUARES,
    CREATE_START_INDEX,
    CREATE_END_INDEX,
    ADD_TO_PATH,
    SAVE_PATH,
    CLEAR_PATH,
    SAVE_SHORTEST_PATH,
    CLEAR_LAST_GRID,
    REMOVE_GRID
} from './types';

export const changeRows = ( rows) =>{
    return {
        type: CHANGE_ROWS,
        payload: rows
    }
}

export const changeColumns = ( columns) =>{
    return{
        type: CHANGE_COLUMNS,
        payload: columns
    }
}

export const inputError = (inputName, error) =>{
    return{
        type: INPUT_ERROR,
        payload: {
            inputName,
            error
        }
    }
}

export const generateSquares = (index) =>{
    return{
        type:GENERATE_SQUARES,
        payload:index
    }
}

export const clearSquaresArray = () =>{
    return{
        type: CLEAR_SQUARES
    }
}

export const clickSquare = (index) =>{
    return{
        type:CLICK_SQUARE,
        payload:index
    }
}

export const createStartIndex = (startIndex) =>{
    return{
        type:CREATE_START_INDEX,
        payload: startIndex
    }
}

export const createEndIndex = (endIndex) =>{
    return{
        type:CREATE_END_INDEX,
        payload: endIndex
    }
}

export const addToPath = (obj) =>{
    return{
        type:ADD_TO_PATH,
        payload:obj
    }
}

export const savePath = (array) =>{
    return{
        type:SAVE_PATH,
        payload:array
    }
}

export const clearPath = (start) =>{
    return{
        type:CLEAR_PATH,
        payload:start
    }
}

export const saveShortestPath = (value) =>{
    return{
        type:SAVE_SHORTEST_PATH,
        payload:value
    }
}

export const clearLastGrid = () =>{
    return{
        type:CLEAR_LAST_GRID
    }
}

export const removeGrid = (id) =>{
    return{
        type:REMOVE_GRID,
        payload:id
    }
}

export const submitInput = (rows, columns) =>{
    return {
        type:SUBMIT_INPUT,
        payload: {
            rows,
            columns
        }
    }
}