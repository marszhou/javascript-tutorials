import React from 'react'

const NavLink = ({ filter, text, isActive, onClick }) => {
  return (
    <a
      onClick={e => onClick(filter)}
      href="#"
      style={{ color: isActive ? 'red' : 'blue' }}
    >
      {text}
    </a>
  )
}

export default NavLink
