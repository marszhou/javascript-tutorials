import React, { Component } from 'react';
import FeedList from '../components/FeedList'
import store from '../store'

class CategoryFeeds extends Component {
  render() {
    const feeds = store.getFeedsByCategory(this.props.match.params.category)
    return (
      <div>
        <FeedList feeds={feeds} />
      </div>
    );
  }
}

export default CategoryFeeds;