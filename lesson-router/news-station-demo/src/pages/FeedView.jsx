import React, { Component } from 'react'
import store from '../store'
import {Link} from 'react-router-dom'


class FeedView extends Component {
  renderFeed(feed) {
    return (
      <div>
        <h2>{feed.title}</h2>
        分类：<Link to={`/categories/${feed.category}`}>{feed.category}</Link>
        {' '}
        作者：<Link to={`/authors/${feed.author}`}>{feed.author}</Link>
        <div dangerouslySetInnerHTML={{ __html: feed.description }} />
      </div>
    )
  }

  render() {
    const feed = store.getFeed(+this.props.match.params.id)
    return <div>{feed ? this.renderFeed(feed) : null}</div>
  }
}

export default FeedView
