import React, { Component } from 'react';
import Nav from './component/Nav'
import AddTodo from './component/AddTodo'
import TodoList from './page/TodoList'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  state = {
    items: [],
  }

  handleAddTodo = (text) => {
    if(text.trim()) {
      const id = Math.random().toString(36).substr(2);
      const item = {'text': text, 'id': id, 'finished': false};
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
        if(item.id === id) item.finished = !item.finished;
      })
      this.setState({
        items: items
      })
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route component={Nav} />
            <Route path={`/:finished`} 
              render={({match}) => (<TodoList items={this.state.items} onItemClick={this.handleItemClick} match={match}/>)} />
            <Route render={() => (<AddTodo onAddTodo={this.handleAddTodo} />)} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;