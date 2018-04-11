import React, { Component } from 'react';
import store from '../store'
import { Link } from 'react-router-dom'

class Authors extends Component {
  render() {
    const authors = store.getAuthors();
    return (
      <div>
        <ul>
          {
            authors.map(author => 
              <li key={author}>
                <Link to={`/feeds/${author}`}>{author}</Link>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default Authors;