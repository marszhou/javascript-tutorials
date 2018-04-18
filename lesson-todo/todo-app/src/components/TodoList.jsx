import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
  // items: [{text, id}, {text, id}]
  // onItemClick

  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <TodoItem key={item.id} onClick={this.props.onItemClick} {...item} />
        ))}
      </div>
    )
  }
}

export default TodoList
