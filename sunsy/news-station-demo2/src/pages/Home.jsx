import React, { Component } from 'react';
import store from '../store'
import Feeds from './Feeds'
import { Link } from 'react-router-dom'
import PageSelector from '../components/PageSelector';

class Home extends Component {
  state = {
    currentPage: 1
  }

  handlePageChange = (page, onClickNum) => {
    if(onClickNum) {
      this.setState({
        currentPage: page
      })
    }else{
      this.setState({
        currentPage: this.state.currentPage + page
      })
    }
  }
  
  render() {
    const feeds = store.getFeedsByPage(this.state.currentPage,3)
    return (
      <div>
        Home
        <ul>
          {feeds.map(feed =>
            <li key={feed.id}>
              <Link to={`/feeds/view/${feed.id}`}>{feed.title}</Link>
            </li>
          )}
        </ul>
        <PageSelector currentPage={this.state.currentPage} handlePageChange={this.handlePageChange}/>
      </div>
    );
  }
}

export default Home;