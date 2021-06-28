import { combineReducers } from 'redux';
//import counterReducer from './Counter/counter.reducer';
import counterReducer from './Themes/counter.reducer';

export const rootReducer = combineReducers({
    themes: counterReducer,
});