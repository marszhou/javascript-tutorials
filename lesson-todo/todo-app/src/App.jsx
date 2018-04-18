import React, { Component } from 'react';
import Nav from './components/Nav';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function filterItems(items, filter) {
  return items
}

class App extends Component {

  state = {
    items: [
      {text: 'learn javascript', id: 1},
      {text: 'go for a walk', id: 2}
    ],
    filter: 'all'
  }


  handleLinkClick = (filter) => {
    console.log('handleLinkClick', filter)
    this.setState({filter})
  }

  handleAddTodo = (text) => {
    console.log('handleAddTodo', text)
  }

  handleItemClick = (itemId) => {
    console.log('handleItemClick', itemId)
  }

  render() {
    const {items, filter} = this.state
    const filteredItems  = filterItems(items, filter)

    return (
      <div>
        <Nav filter={filter} onLinkClick={this.handleLinkClick}/>
        <TodoList items={filteredItems} onItemClick={this.handleItemClick}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default App;