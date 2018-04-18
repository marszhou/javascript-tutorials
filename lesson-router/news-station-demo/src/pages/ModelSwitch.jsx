import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Modal from '../components/Modal'
import { matchPath } from 'react-router'
import {makeRoutes} from '../routes'
import FeedView from './FeedView'

class ModelSwitch extends Component {
  previousLocation = this.props.location

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    console.log(nextProps.history.action)
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
          {makeRoutes()}
        </Switch>
        {isModal && modelComponent ? <Modal>{modelComponent}</Modal> : null}
      </div>
    )
  }
}

export default ModelSwitch
