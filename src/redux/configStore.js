import { applyMiddleware, combineReducers, createStore} from 'redux';
import { FacebookReducer } from './Reducers/FacebookReducer';
import { PhimReducer } from './Reducers/PhimReducer';


// Cau hinh 
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    // Khai bao reducer
    FacebookReducer: FacebookReducer,
    PhimReducer: PhimReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))