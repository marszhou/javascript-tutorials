import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavLink from './NavLink'

const links = [
  { text: '全部', filter: 'all' },
  { text: '已完成', filter: 'completed' },
  { text: '未完成', filter: 'imcompleted' }
]

class Nav extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onLinkClick: PropTypes.func
  }

  render() {
    return (
      <div>
        {links.map((linkProps, index) => (
          <NavLink
            key={index}
            {...linkProps}
            onClick={this.props.onLinkClick}
            isActive={this.props.filter === linkProps.filter}
          />
        ))}
      </div>
    )
  }
}

export default Nav
