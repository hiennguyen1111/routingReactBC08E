import { applyMiddleware, combineReducers, createStore} from 'redux';
import { FacebookReducer } from './Reducers/FacebookReducer';
import { PhimReducer } from './Reducers/PhimReducer';
import { ModalReducer } from './Reducers/ModalReducer';

// Cau hinh 
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    // Khai bao reducer
    FacebookReducer: FacebookReducer,
    PhimReducer: PhimReducer,
    ModalReducer: ModalReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))