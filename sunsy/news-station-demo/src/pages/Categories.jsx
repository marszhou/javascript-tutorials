import React, { Component } from 'react'
import store from '../store'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import CategoryFeeds from './CategoryFeeds'

class Categories extends Component {
  render() {
    const categories = store.getCategories()

    return (
      <div>
        {categories.map(c => (
          <span key={c}>
            <NavLink to={`/categories/${c}`} activeStyle={{textDecoration: 'none'}}>{c}</NavLink> |{' '}
          </span>
        ))}

        <Route path={`${this.props.match.url}/:category`} component={CategoryFeeds} />

      </div>
    )
  }
}

export default Categories
