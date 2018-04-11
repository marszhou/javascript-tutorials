import React, { Component } from 'react';
import store from '../store'
import { Link } from 'react-router-dom'

class AuthorFeeds extends Component {
  render() {
    const author = this.props.match.params.author;
    const feeds = store.getFeedsByAuthor(author);
    return (
      <div>
        作者：{author}
        <ul>
          {
            feeds.map(feed =>
              <li key={feed.id}>
                <Link to={`/feeds/view/${feed.id}`}>{feed.title}</Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default AuthorFeeds;