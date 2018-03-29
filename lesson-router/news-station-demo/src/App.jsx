import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default function() {
  return (
    <Router>
      <div>
        <Route path="/" exact render={() => <h1>Hello world!</h1>} />
      </div>
    </Router>
  )
}
