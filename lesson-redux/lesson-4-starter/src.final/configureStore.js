import { createStore } from 'redux'
import todoApp from './reducers'
import { loadState, saveState } from './localStorage';
import { debounce } from 'lodash'

const configureStore = () => {
  const presistState = loadState()
  const store = createStore(todoApp, {
    todos: presistState.todos
  })
  store.subscribe(debounce(() => saveState(store.getState()), 1000))
  return store
}

export default configureStore
