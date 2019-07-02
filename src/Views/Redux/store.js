import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import tabbardfqReducer from './Reducers/tabbardfqReducer'
import listdfqReducer from './Reducers/listdfqReducer'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  isShow: tabbardfqReducer,
  list: listdfqReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
   applyMiddleware(promiseMiddleware,thunkMiddleware)
 ));


export default store;