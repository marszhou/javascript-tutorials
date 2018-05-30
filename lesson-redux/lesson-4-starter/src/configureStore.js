import { createStore } from 'redux'
import todoApp from './reducers'

const configureStore = () => {
  const store = createStore(todoApp)
  return store
}

export default configureStore
