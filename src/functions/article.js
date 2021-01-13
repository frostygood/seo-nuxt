export default {
    async getAllArticle(name, { $content, error }) {
      let articles
      try {
        articles = await $content(''+name).limit(100).fetch();
      } catch (e) {
        error({ message: 'Article not found' })
      }
      return articles
    }
  }