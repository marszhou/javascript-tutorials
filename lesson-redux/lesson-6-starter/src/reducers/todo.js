export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      return state.id !== action.id
        ? state
        : { ...state, completed: !state.completed }
    default:
      return state
  }
}