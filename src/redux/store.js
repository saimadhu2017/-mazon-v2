import { combineReducers, legacy_createStore as createStore } from 'redux';
import signInReducer from './auth/authReducers';

const reducers = combineReducers({
    signInReducer
})

const store = createStore(reducers)

export default store;