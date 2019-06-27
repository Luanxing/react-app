import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import listReducer from './Reducer/listReducers'
import promiseMiddleware from 'redux-promise'

// reducer纯函数
const reducer = combineReducers({
    list:listReducer,
    isfixed:true
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware)
  ));
export default store

