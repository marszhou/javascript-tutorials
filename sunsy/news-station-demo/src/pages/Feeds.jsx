import React, { Component } from 'react';
import store from '../store'
import FeedList from '../components/FeedList'
class Feeds extends Component {
  render() {
    const page = + this.props.match.params.page
    const feeds = store.getFeedsByPage(page, 5)

    return (
      <div>
        <FeedList feeds={feeds}/>
      </div>
    );
  }
}

export default Feeds;