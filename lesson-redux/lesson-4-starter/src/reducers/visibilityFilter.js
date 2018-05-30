export default (
  state = 'SHOW_ALL', // SHOW_COMPLETED, SHOW_ACTIVE
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}