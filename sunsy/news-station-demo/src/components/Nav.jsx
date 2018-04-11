import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    const activeStyle = {
      color: 'red',
      fontSize: '120%'
    }
    return (
      <div>
        <NavLink exact to="/" activeStyle={activeStyle}>
          首页
        </NavLink>{' '}
        |
        <NavLink exact to="/about" activeStyle={activeStyle}>
          关于我们
        </NavLink>
        |
        <NavLink exact to="/categories" activeStyle={activeStyle}>
          全部分类
        </NavLink>

        <hr />
      </div>
    )
  }
}

export default Nav
