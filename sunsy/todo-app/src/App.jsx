import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import Nav from './components/Nav'
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    items: []
  }
  handleAddTodo = (text) => {
    if(text.trim()) {
      const id = Math.random().toString(36).substr(2);
      const item = {'text': text, 'id': id, 'isFinished': false};
      this.setState({
        items: [...this.state.items, item]
      })
      document.querySelector('#inputTodo').value = '';
    }
  }

  handleItemClick = (id) => {
    if(id) {
      const items = [...this.state.items];
      items.forEach(item => {
        if(item.id === id) item.isFinished = !item.isFinished;
      })
      this.setState({
        items: items
      })
    }
  }

  render() {
    return (
      <div>
        <Container>
          <Nav items={this.state.items} onItemClick={this.handleItemClick} />
          <AddTodo onAddTodo={this.handleAddTodo} />
        </Container>
      </div>
    );
  }
}

export default App;