import feeds from './feeds.json'

export default {
  getTopFeeds(n) {
    // 返回前n个feed
    return feeds.slice(0, n)
  },

  getFeedsByPage(page, pageSize=10) {
    // 返回指定页码的feed
  },

  getCategories(feeds) {
    // 返回feed分类列表
    const categories = [];
    feeds.forEach(feed => {
      if(!categories.includes(feed.category)) categories.push(feed.category)
    })
    return categories;
  },

  getAuthors(feeds) {
    // 返回feed作者列表
    const authors =[];
    feeds.forEach(feed => {
      if(!authors.includes(feed.author)) authors.push(feed.author)
    })
    return authors;
  },

  getFeedsByCategory(category) {
    // 按指定分类返回feed列表
    const feedsByCategory = [];
    feeds.forEach(feed => {
      if(feed.category === category) feedsByCategory.push(feed)
    })
    return feedsByCategory;
  },

  getFeedsByAuthor(author) {
    // 按指定作者返回feed列表
    const feedsByAuthor = [];
    feeds.forEach(feed => {
      if(feed["author"] === author) feedsByAuthor.push(feed)
    })
    return feedsByAuthor;
  },

  getFeed(id) {
    // 返回指定feed
    for(let i=0;i<feeds.length;i++){
      if(parseInt(feeds[i]["id"]) === parseInt(id)) return feeds[i];
    }
  }
}