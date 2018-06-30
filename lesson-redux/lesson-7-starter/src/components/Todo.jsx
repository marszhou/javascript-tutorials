import React from 'react'

export default ({ onClick, text, completed }) => {
  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
      onClick={onClick}
    >
      {text}
    </li>
  )
}