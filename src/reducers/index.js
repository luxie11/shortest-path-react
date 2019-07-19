import { combineReducers } from 'redux';
import formReducer from './formReducer';
import gridReducer from './gridReducer';
import squareReducer from './squareReducer';

export default combineReducers({
    form: formReducer,
    grid: gridReducer,
    squares:squareReducer
});