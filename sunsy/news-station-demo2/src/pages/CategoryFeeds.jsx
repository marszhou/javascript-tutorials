import React, { Component } from 'react';
import FeedList from '../components/FeedList'
import { Route } from 'react-router-dom'
import store from '../store'
import FeedView from './FeedView'

class CategoryFeeds extends Component {
  render() {
    const feeds = store.getFeedsByCategory(this.props.match.params.category);
    return (
      <div>
        <div>
          <FeedList feeds={feeds}/>
        </div>
      </div>
    );
  }
}

export default CategoryFeeds;