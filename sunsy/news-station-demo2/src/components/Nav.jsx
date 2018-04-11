import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

class Nav extends Component {

  render() {
    const activeStyle = {
      color: 'red',
      fontSize: '120%',
      textDecoration: 'none'
    }

    return (
      <div>
        <NavLink exact to='/' activeStyle={activeStyle}>首页</NavLink>
        {' | '}
        <NavLink to='/about' activeStyle={activeStyle}>关于我们</NavLink>
        {' | '}
        <NavLink to='/categories' activeStyle={activeStyle}>全部分类</NavLink>
        {' | '}
        <NavLink to='/authors' activeStyle={activeStyle}>作者列表</NavLink>
        <hr/>
      </div>
    );
  }
}

export default Nav;