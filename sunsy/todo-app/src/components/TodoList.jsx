import React, { Component } from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  render() {
    const { items, onItemClick } = this.props;
    return (
      <div>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <TodoItem item={item} onItemClick={onItemClick}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;