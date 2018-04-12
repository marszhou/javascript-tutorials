import React from 'react'
import { NavLink } from 'react-router-dom'

const styles= {
  normal: { margin: '0 10px', color: 'blue' },
  active: { fontSize: '120%', textDecoration: 'none', color: 'red', fontWeight: 'bold' },
}

const Pagination = ({ current, pageCount, baseUrl }) => {
  const hasNext = current < pageCount
  const hasPrevious = current > 1

  return (
    <div>
      {hasPrevious ? (
        <NavLink to={`${baseUrl}${current - 1}`} style={styles.normal}>上一页</NavLink>
      ) : null}
      {[...Array(pageCount)].map((page, index) => (
        <NavLink
          key={index}
          to={`${baseUrl}${index + 1}`}
          className="a"
          style={styles.normal}
          activeStyle={styles.active}
        >
          {index + 1}
        </NavLink>
      ))}
      {hasNext ? (
        <NavLink to={`${baseUrl}${current + 1}`} style={styles.normal}>下一页</NavLink>
      ) : null}
    </div>
  )
}

export default Pagination
