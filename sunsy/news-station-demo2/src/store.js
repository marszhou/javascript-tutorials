import feeds from './feeds.json'

export default {
  getTopFeeds(n) {
    // 返回前n个feed
    return feeds.slice(0, n)
  },

  getFeedsByPage(page, pageSize = 10) {
    // 返回指定页码的feed
    return feeds.slice((page-1)*pageSize, page*pageSize)
  },

  getCategories() {
    // 返回feed分类列表
    const categories = [];
    feeds.forEach(feed => {
      if(!categories.includes(feed.category)) categories.push(feed.category)
    })
    return categories;
  },

  getAuthors() {
    // 返回feed作者列表
    const authors = [];
    feeds.forEach(feed => {
      if(!authors.includes(feed.author)) authors.push(feed.author)
    })
    return authors;
  },

  getFeedsByCategory(category) {
    // 按指定分类返回feed列表
    return feeds.filter(feed => (
      feed.category === category
    ))
  },

  getFeedsByAuthor(author) {
    // 按指定作者返回feed列表
    return feeds.filter(feed => (
      feed.author === author
    ))
  },

  getFeed(id) {
    // 返回指定feed
    return feeds.find(feed => (
      feed.id === id
    ))
  },

  calculatePagesIndex(currentPage, totalFeeds=feeds, pageSize=3) {
    // 返回页码数组
    const totalPages = Math.ceil(totalFeeds.length/pageSize);
    if(totalPages <= 10) return [...Array(totalPages)].map((el, index) => el = index + 1);
    if(totalPages > 10 && currentPage < 7) return [...Array(10)].map((el, index) => el = index + 1);
    if(totalPages > 10 && currentPage >= 7 && currentPage + 4 <= totalPages) {
      return [...Array(10)].map((el, index) => el = currentPage -5 + index)
    }
    if(totalPages > 10 && currentPage >= 7 && currentPage + 4 > totalPages) {
      return [...Array(10)].map((el, index) => el = totalPages - 9 + index)
    }
  },

  calculateTotalPages(totalFeeds=feeds, pageSize=3) {
    return Math.ceil(totalFeeds.length/pageSize)
  }
}
