/**
 * 状态管理
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { globalReducer } from '../reducers/global';

const reducers = combineReducers({
  globalReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
