import { createStore } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch
  if (!console.group) {
    return rawDispatch
  }
  return (action) => {
    console.group(action.type)
    console.log('%cbefore action', 'color: gray', store.getState())
    console.log('%caction', 'color: blue', action)
    const returnValue = rawDispatch(action)
    console.log('%cafter action', 'color: green', store.getState())
    console.groupEnd(action.type)

    return returnValue
  }
}

const configureStore = () => {
  const presistState = loadState()
  const store = createStore(todoApp, presistState)
  store.subscribe(
    throttle(
      () =>
        saveState({
          todos: store.getState().todos
        }),
      1000
    )
  )
  if (process.env.NODE_ENV !== 'production')
    store.dispatch = addLoggingToDispatch(store)
  return store
}

export default configureStore
