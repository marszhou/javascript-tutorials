import {Route} from 'react-router-dom'
import React from 'react'

import Home from './pages/Home'
import About from './pages/About'
import Authors from './pages/Authors'
import AuthorFeeds from './pages/AuthorFeeds'
import Categories from './pages/Categories'
import CategoryFeeds from './pages/CategoryFeeds'
import Feeds from './pages/Feeds'
import FeedView from './pages/FeedView'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/:page(\\d+)',
    component: Home,
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/categories',
    component: Categories
  },
  {
    path: '/feeds/view/:id',
    component: FeedView
  },
  {
    path: '/feeds/page/:page',
    component: Feeds
  }
]

export const makeRoutes = () => routes.map((route, index) => <Route key={index} {...route} />)