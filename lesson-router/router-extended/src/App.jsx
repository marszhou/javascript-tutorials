import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'

// import Home from './pages/Home'
// import About from './pages/About'
// import Authors from './pages/Authors'
// import AuthorFeeds from './pages/AuthorFeeds'
// import Categories from './pages/Categories'
// import CategoryFeeds from './pages/CategoryFeeds'
// import Feeds from './pages/Feeds'
// import FeedView from './pages/FeedView'
// import Nav from './components/Nav'

export default function() {
  return (
    <Router>
      <div>
        <Route path='/a-loc' render={() => (<div>a</div>)}/>
        <Route path='/b-loc' render={() => (<Redirect to='/a-loc'/>)} />
        <Route path='/c-loc' render={() => (<div>c <Link to='/b-loc'>goto b</Link></div>)}/>
        <Route path='/news/:page(\d+)' render={({match}) => (<div>news page={match.params.page}</div>)} />
        <Route path='/news/:title([a-z\s]+)' render={({match}) => (<div>news title={match.params.title}</div>)} />
        <Route path='/images/img-:name.png' render={({match}) => (<div>name={match.params.name}</div>)} />
      </div>
    </Router>
  )
}
