import { combineReducers } from 'redux'
import byId, * as fromId from './byId'
import listByFilter, * as fromList from './createList'

const todos = combineReducers({
  byId,
  listByFilter
})

export default todos

export const getVisibleTodos = (state, filter) => {
  const ids = fromList.getListByFilter(state.listByFilter[filter])
  return ids.map(id => fromId.getTodo(state.byId, id))
}

export const getIsFetching = (state, filter) => {
  return fromList.getIsFetching(state.listByFilter[filter])
}

export const getErrorMessage = (state, filter) => {
  return fromList.getErrorMessage(state.listByFilter[filter])
}
