import {v4} from 'node-uuid'
export const addTodo = text => ({
  type: 'ADD_TODO',
  text,
  id: v4()
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})