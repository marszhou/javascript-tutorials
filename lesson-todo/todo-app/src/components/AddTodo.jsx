import React, { Component } from 'react'

class AddTodo extends Component {
  // onAddTodo
  render() {
    return (
      <div>
        <input ref={el => (this.input = el)} />
        <button onClick={() => this.props.onAddTodo(this.input.value)}>add</button>
      </div>
    )
  }
}

export default AddTodo
