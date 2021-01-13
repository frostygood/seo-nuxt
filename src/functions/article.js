export default {
    async getAllArticles(name, { $content, error }) {
      let articles
      try {
        articles = await $content(''+name).limit(100).fetch();
      } catch (e) {
        error({ message: 'Articles not found' })
      }
      return articles
    },
    async getArticle(name, slug, { $content, error }) {
      let article
      try {
        article = await $content(''+name, ''+slug).fetch()
      } catch (e) {
        error({ message: 'Article not found' })
      }
      return article
    }
  }