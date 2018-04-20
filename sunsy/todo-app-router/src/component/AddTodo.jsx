import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    const { onAddTodo } = this.props;
    return (
      <div>
        <input id='inputTodo'type="text" ref={el => this.input = el}/>
        <button onClick={() => onAddTodo(this.input.value)}>添加</button>
      </div>
    );
  }
}

export default AddTodo;