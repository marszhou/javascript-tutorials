import { createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import logger from 'redux-logger'

const thunk = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

const configureStore = () => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  return createStore(todoApp, applyMiddleware(...middlewares))
}

export default configureStore
