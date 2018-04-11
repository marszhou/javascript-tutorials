import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

class FeedList extends Component {

  render() {
    const { feeds } = this.props;
    return (
      <div>
        <ul>
          {
            feeds.map(feed => (
              <li key={feed.id}>
                <Link to={`/feeds/view/${feed.id}`}>{feed.title}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default FeedList;