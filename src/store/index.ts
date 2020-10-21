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

export type AppState = ReturnType<typeof rootReducers>

export default function cofigureStore() {
  const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))
  return store
}
