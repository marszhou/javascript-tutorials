import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Authors from './Authors'
import AuthorFeeds from './AuthorFeeds'
import Categories from './Categories'
import CategoryFeeds from './CategoryFeeds'
import Feeds from './Feeds'
import FeedView from './FeedView'
import Modal from '../components/Modal'
import { matchPath } from 'react-router'

class ModelSwitch extends Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {
    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ) // not initial render

    let modelComponent = null
    if (isModal) {
      if (
        matchPath(location.pathname, {
          path: '/feeds/view/:id',
          exact: true,
          strict: true
        })
      ) {
        modelComponent = <Route path="/feeds/view/:id" component={FeedView} />
      }
    }
    return (
      <div>
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/" exact component={Home} />
          <Route path="/:page(\d+)" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/categories" component={Categories} />
          <Route path="/feeds/view/:id" component={FeedView} />
          <Route path="/feeds/page/:page" component={Feeds} />
        </Switch>
        {isModal && modelComponent ? <Modal>{modelComponent}</Modal> : null}
      </div>
    )
  }
}

export default ModelSwitch
