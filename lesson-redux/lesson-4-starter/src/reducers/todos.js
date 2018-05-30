import todo from './todo'

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(item => todo(item, action))
    default:
      return state
  }
}