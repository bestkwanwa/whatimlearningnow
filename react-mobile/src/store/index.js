import { applyMiddleware, combineReducers, createStore } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './reducers';
console.log(reducers);
const store=createStore(
    // combineReducers 接收一个对象
    combineReducers(reducers),
    applyMiddleware(Thunk)
)

export default store