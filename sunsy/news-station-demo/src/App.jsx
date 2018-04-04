import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import store from './store.js'
import feeds from './feeds.json'
import './style.css'



export default function() {

  const Categories = ({match}) => {
    const categories = store.getCategories(feeds);
    return (
      <Router>
        <div>
          <ul className="ul categoryList">
            {categories.map((category, index) => (
              <li key={index} className="li">
                <Link className="link" to={`${match.url}/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
          <hr/>
          <Route path={`${match.url}/:category`} component={FeedsByCategory}/>
        </div>
      </Router>
    )
  }

  const Authors = ({match}) => {
    const authors = store.getAuthors(feeds);
    return (
      <Router>
        <div>
          <ul className="ul authorList">
            {authors.map((author, index) => {
              return (
                <li key={index} className="li">
                  <Link className="link" to={`${match.url}/${author}`}>{author}</Link>
                </li>
              )
            })}
          </ul>
          <hr/>
          <Route path={`${match.url}/:author`} component={FeedsByAuthor}/>
        </div>
      </Router>
    )
  }

  const FeedsByCategory = ({match}) => {
    const feedsByCategory = store.getFeedsByCategory(match.params.category);
    return (
      <Router>
        <div>
          <ul className="ul">
            {feedsByCategory.map((feed, index) => (
              <li key={index} className="li">
                <Link className="link" to={`${match.url}/${feed.id}`}>{feed["title"]}</Link>
              </li>
            ))}
          </ul>
          <hr/>
          <Route path={`${match.url}/:feedId`} component={Article}/>
        </div>
      </Router>
    )
  }

  const FeedsByAuthor = ({match}) => {
    const feedsByAuthor = store.getFeedsByAuthor(match["params"]["author"]);
    return (
      <Router>
        <div>
          <ul className="ul">
            {feedsByAuthor.map((feed, index) => (
              <li key={index} className="li">
                <Link className="link" to={`${match.url}/${feed.id}`}>{feed.title}</Link>
              </li>
            ))}
          </ul>
          <hr/>
          <Route path={`${match.url}/:feedId`} component={Article}/>
        </div>
      </Router>
    )
  }

  const Article = ({match}) => {
    const feedId = match.params.feedId;
    const feed = store.getFeed(feedId)
    return(
      <div>
        <div dangerouslySetInnerHTML={{__html: feed["description"]}} />
      </div>
    )
  }

  return (
    <Router>
      <div>
        <ul className="ul navigation">
          <li><Link to="/" className="link">首页Home</Link></li>
          <li><Link to="/about" className="link">关于我们</Link></li>
          <li><Link to="/categories" className="link">分类列表</Link></li>
          <li><Link to="/authors" className="link">作者列表</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/about" render={() => <h2>About</h2>}/>
        <Route path="/categories" component={Categories}/>
        <Route path="/authors" component={Authors}/>
      </div>
    </Router>
  )
}
