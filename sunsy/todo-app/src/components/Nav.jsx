import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react'
import TodoList from './TodoList'

class Nav extends Component {
  
  render() {
    const { items, onItemClick } = this.props;
    const itemsFilter =  (filter, items) => {
      if(filter === 'all') return items;
      if(filter === 'isFinished') return items.filter(item => item.isFinished === true);
      if(filter === 'unFinished') return items.filter(item => item.isFinished === false);
    }
    const panes = [
      { menuItem: '全部', render: () => <Tab.Pane>{<TodoList items={itemsFilter('all', items)} onItemClick={onItemClick} />}</Tab.Pane> },
      { menuItem: '未完成', render: () => <Tab.Pane>{<TodoList items={itemsFilter('unFinished', items)} onItemClick={onItemClick} />}</Tab.Pane> },
      { menuItem: '已完成', render: () => <Tab.Pane>{<TodoList items={itemsFilter('isFinished', items)} onItemClick={onItemClick} />}</Tab.Pane> },
    ]

    return (
      <div>
        <Tab panes={panes} />
      </div>
    );
  }
}

export default Nav;