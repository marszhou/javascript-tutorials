import React, { Component } from 'react';
import {  NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div>
        <span>
          <NavLink to='/all' activeStyle={{color: 'black', fontSize: '120%'}}>全部</NavLink> |
        </span>
        <span>
          <NavLink to='/unFinished' activeStyle={{color: 'black', fontSize: '120%'}}>未完成</NavLink> |
        </span>
        <span>
          <NavLink to='/finished' activeStyle={{color: 'black', fontSize: '120%'}}>已完成</NavLink>
        </span>
      </div>
    );
  }
}

export default Nav;