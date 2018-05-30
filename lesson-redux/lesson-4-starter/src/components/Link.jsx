import React from 'react'

export default ({ active, children, onClick }) => {
  return active ? (
    <span>{children}</span>
  ) : (
    // eslint-disable-next-line
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}