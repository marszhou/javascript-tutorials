import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ModelSwitch from './pages/ModelSwitch'
import Nav from './components/Nav'

export default function() {
  return (
    <Router>
      <div>
        <Nav />
        <Route component={ModelSwitch} />
      </div>
    </Router>
  )
}
