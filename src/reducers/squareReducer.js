import { 
    GENERATE_SQUARES,
    CLICK_SQUARE,
    CLEAR_SQUARES
} from '../actions/types';

export default (state = {}, action) =>{
    switch(action.type){
        case GENERATE_SQUARES:{
            return{
                ...state,
                [action.payload]: false            
            }
        }
        case CLICK_SQUARE:{
            return{
                ...state,
                [action.payload]: !state[action.payload] 
            }
        }
        case CLEAR_SQUARES:{
            return { };
        }
        default:
            return state;
    }
}