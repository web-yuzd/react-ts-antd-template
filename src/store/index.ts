/**
 * 状态管理
 */
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { globalReducer } from '../reducers/global'

const rootReducers = combineReducers({
  globalReducer,
})

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
