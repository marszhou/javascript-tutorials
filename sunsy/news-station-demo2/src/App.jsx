import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Categories from './pages/Categories'
import CategoryFeed from './pages/CategoryFeeds'
import Authors from './pages/Authors'
import AuthorFeeds from './pages/AuthorFeeds'
import Feeds from './pages/Feeds'
import FeedView from './pages/FeedView'
import Nav from './components/Nav'

export default function() {
  return (
    <Router>
      <div>
        <Nav />
        <Route  exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/categories' component={Categories}/>
        <Route path='/authors' component={Authors}/>
        <Route path='/feeds/view/:id' component={FeedView}/>
        <Route path='/feeds/:author' component={AuthorFeeds}/>
        <Route path='/pages/:page' component={Feeds}/>
      </div>
    </Router>
  )
}
