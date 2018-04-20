import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react'

class AddTodo extends Component {

  render() {
    const { onAddTodo } = this.props;
    return (
      <div>
        <input id='inputTodo' placeholder='添加事项' ref={el => this.input = el} />
        <Button onClick={() => onAddTodo(this.input.value)}>添加</Button>
      </div>
    );
  }
}

export default AddTodo;