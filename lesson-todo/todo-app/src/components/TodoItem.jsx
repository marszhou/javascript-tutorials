import React, { Component } from 'react';

class TodoItem extends Component {

  // text
  // onClick
  // id

  render() {
    return (
      <li onClick={() => this.props.onClick(this.props.id)}>
        {this.props.text}
      </li>
    );
  }
}

export default TodoItem;
