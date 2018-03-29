import feeds from 'feeds.json'

export default {
  topFeeds(n) {
    // 返回前n个feed
  },

  getFeedsByPage(page, pageSize=10) {
    // 返回指定页码的feed
  },

  getCategories() {
    // 返回feed分类列表
  },

  getAuthors() {
    // 返回feed作者列表
  },

  getFeedsByCategory(category) {
    // 按指定分类返回feed列表
  },

  getFeedsByAuthor(author) {
    // 按指定作者返回feed列表
  },

  getFeed(id) {
    // 返回指定feed
  }
}