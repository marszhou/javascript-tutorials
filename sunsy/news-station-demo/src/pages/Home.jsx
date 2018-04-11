import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import FeedList from '../components/FeedList'

class Home extends Component {
  render() {
    const feeds = store.getTopFeeds(10)
    return (
      <div>
        Home
        <FeedList feeds={feeds}/>
        <Link to='/feeds/page/1'>查看全部</Link>
      </div>
    )
  }
}

export default Home
