import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import listReducer from './Reducer/listReducers'
import promiseMiddleware from 'redux-promise'
import tabbarReducer from './Reducer/tabbarReducer'


// reducer纯函数
const reducer = combineReducers({
    list:listReducer,
    isShow:tabbarReducer
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(promiseMiddleware)
  ));
export default store

