import React from 'react';
import {Link} from 'react-router-dom'

const FeedList = ({feeds}) => {
  return (
    <ul>{feeds.map(feed => <li key={feed.id}><Link to={`/feeds/view/${feed.id}`}>{feed.title}</Link></li>)}</ul>
  );
};

export default FeedList;