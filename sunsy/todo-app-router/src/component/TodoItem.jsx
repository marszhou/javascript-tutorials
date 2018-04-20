import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { item, onItemClick } = this.props;
    return (
      <div onClick={() => onItemClick(item.id)} 
        style={item.finished ? {textDecoration: 'line-through', color: 'red'} : {color: 'blue'}}
      >
        {item.text}
      </div>
    );
  }
}

export default TodoItem;