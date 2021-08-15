import {combineReducers, createStore} from 'redux';
import { FacebookReducer } from './Reducers/FacebookReducer';



const rootReducer = combineReducers({
    // Khai bao reducer
    FacebookReducer: FacebookReducer,
})

export const store = createStore(rootReducer)