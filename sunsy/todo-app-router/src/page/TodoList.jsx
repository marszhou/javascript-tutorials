import React, { Component } from 'react';
import TodoItem from '../component/TodoItem'

class TodoList extends Component {

  filterItems = (filter, items) => {
    if(filter === 'all') return items;
    if(filter === 'finished') return items.filter(item => item.finished === true);
    if(filter === 'unFinished') return items.filter(item => item.finished === false);
  }

  render() {
    const { items, onItemClick, match } = this.props;
    const filteredItems = this.filterItems(match.params.finished, items)
    return (
      <div>
        <ul>
          {filteredItems.map(item => (
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