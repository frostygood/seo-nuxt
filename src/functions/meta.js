export default {
    getMeta(title, description, img, canonical) {
      return {
        title: title,
        meta: [
          { hid: 'description', name: 'description', content: description },
          // Open Graph
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'og:description', property: 'og:description', content: description },
          { hid: 'og:image', property: 'og:image', content: img},
          // Twitter Card
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'twitter:description', name: 'twitter:description', content: description },
          { hid: 'twitter:image', name: 'twitter:image', content: img },
          // Google+. Schema.org
          { itemprop: 'title', content: title },
          { itemprop: 'description', content: description},
          { itemprop: 'image', content: img},
        ],
        link: [
          { rel: "canonical", href: canonical }
        ]
      }
    },
  }