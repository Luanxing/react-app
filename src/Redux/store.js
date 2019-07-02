import {createStore, combineReducers,applyMiddleware} from 'redux'
import listreducer from './Reducers/listreducer'
import promiseMiddleware from 'redux-promise'
const reducer =combineReducers({
 list:listreducer
})

const store = createStore(reducer,applyMiddleware(promiseMiddleware));
export default store;