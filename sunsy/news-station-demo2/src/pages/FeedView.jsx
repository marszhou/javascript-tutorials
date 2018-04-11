import React, { Component } from 'react';
import store from '../store'
import { Link } from 'react-router-dom'

class FeedView extends Component {
  render() {
    const id = parseInt(this.props.match.params.id);
    const feed = store.getFeed(id);
    return (
      <div>
        <h1>{feed.title}</h1>
        分类：<Link to={`/categories/${feed.category}`}>{feed.category}</Link>
        {'  '}
        作者：<Link to={`/feeds/${feed.author}`}>{feed.author}</Link>
        <div dangerouslySetInnerHTML={{__html: feed.description}}/>
      </div>
    );
  }
}

export default FeedView;