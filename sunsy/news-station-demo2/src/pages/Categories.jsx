import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import store from '../store'
import CategoryFeeds from './CategoryFeeds'


class Categories extends Component {
  render() {
    const categories = store.getCategories();
    return (
      <div>
        {
          categories.map(category => (
            <span key={category}>
              <NavLink to={`${this.props.match.url}/${category}`} 
                activeStyle={{textDecoration: 'none', color: 'red'}}
              >
                {category}
              </NavLink> 
                {' | '}
            </span>
          ))
        }
        <hr/>
        <Route path={`${this.props.match.url}/:category`} component={CategoryFeeds}/>
      </div>
    );
  }
}

export default Categories;