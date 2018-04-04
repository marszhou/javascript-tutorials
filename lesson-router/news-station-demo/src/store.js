import feeds from './feeds.json'
import _ from 'lodash'

export default {
  getTopFeeds(n) {
    // 返回前n个feed
    return feeds.slice(0, n)
  },

  getFeedsByPage(page, pageSize = 10) {
    // 返回指定页码的feed
    page = parseInt(page)
    const pageCount = Math.ceil(feeds.length / pageSize)

    if (page <= 0) return []
    if (page > pageCount) return []

    return feeds.slice((page - 1) * pageSize, page * pageSize)
  },

  getCategories() {
    // 返回feed分类列表
    return _.uniq(feeds.map(feed => feed.category))
  },

  getAuthors() {
    // 返回feed作者列表
    return _.uniq(feeds.map(feed => feed.author))
  },

  getFeedsByCategory(category) {
    // 按指定分类返回feed列表
    return feeds.filter(feed => feed.category === category)
  },

  getFeedsByAuthor(author) {
    // 按指定作者返回feed列表
    return feeds.filter(feed => feed.author === author)
  },

  getFeed(id) {
    // 返回指定feed
    return feeds.find(feed => feed.id === id)
  }
}
