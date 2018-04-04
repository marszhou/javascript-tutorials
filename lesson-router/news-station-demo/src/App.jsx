import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Authors from './pages/Authors'
import AuthorFeeds from './pages/AuthorFeeds'
import Categories from './pages/Categories'
import CategoryFeeds from './pages/CategoryFeeds'
import Feeds from './pages/Feeds'
import FeedView from './pages/FeedView'
import Nav from './components/Nav'

export default function() {
  return (
    <Router>
      <div>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/categories" component={Categories} />
        <Route path="/feeds/view/:id" component={FeedView} />
        <Route path="/feeds/page/:page" component={Feeds} />
      </div>
    </Router>
  )
}
