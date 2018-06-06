import React from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../actions'

const AddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <input ref={n => (input = n)} />{' '}
      <button
        onClick={() => {
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        add todo
      </button>
    </div>
  )
}

export default connect()(AddTodo)
