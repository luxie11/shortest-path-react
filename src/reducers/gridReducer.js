import { 
    SUBMIT_INPUT, 
    CREATE_START_INDEX,
    CREATE_END_INDEX,
    ADD_TO_PATH,
    SAVE_PATH,
    CLEAR_PATH,
    SAVE_SHORTEST_PATH,
    CLEAR_LAST_GRID,
    REMOVE_GRID
} from '../actions/types';

const INITIAL_STATE = {
    rows: 10,
    columns:10,
    path: [],
    previousPaths: []
}

export default (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SUBMIT_INPUT:
            return { 
                ...state, 
                rows: action.payload.rows,
                columns: action.payload.columns 
            }
        case CREATE_START_INDEX:
            return{
                ...state,
                startIndex:action.payload
            }
        case CREATE_END_INDEX:
            return{
                ...state,
                endIndex:action.payload
            }
        case ADD_TO_PATH:
            return{
                ...state,
                path: [...state.path, action.payload]
            }
        case SAVE_PATH:
            return{
                ...state,
                previousPaths: [ ...state.previousPaths, action.payload]
            }
        case CLEAR_PATH:
            return{
                ...state,
                path:[ action.payload ]
            }
        case SAVE_SHORTEST_PATH:{
            return{
                ...state,
                shortestPath:action.payload
            }
        }
        case REMOVE_GRID:{
            return{
                ...state,
                path: state.path.filter((el)=> el.current !== action.payload)
            }
        }
        case CLEAR_LAST_GRID:{
            return{
                ...state,
                path:[],
                previousPaths:[],
                shortestPath:undefined
            }
        }
        default:
            return state;
    }
}