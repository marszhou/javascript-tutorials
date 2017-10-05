const initTodo = (element) => {
  const createStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state
    const subscribe = (listener) => {
      listeners.push(listener)
      return () => listeners.filtre(_l => _l !== listener)
    }
    const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach(listener => listener())
    }
    dispatch({})
    return {
      getState,
      subscribe,
      dispatch
    }
  }

  let nextTodoId = 0
  const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, {
          id: ++nextTodoId,
          text: action.text,
          completed: false
        }]
      case 'TOGGLE_TODO':
        return state.map(todo => ({
          ...todo,
          completed: todo.id === action.id ? !todo.completed : todo.completed
        }))
      default:
        return state
    }
  }

  const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }

  const app = (state={}, action) => ({
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  })

  const store = createStore(app)
  // console.log(store.getState())

  const render = () => {

  }
}