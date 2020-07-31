module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/project/:id',
        name: "project",
        components: {
          default: resolve(__dirname, 'components/Projects.vue')
        }
      })
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'xxxx',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    hotMiddleware: {
      client: {
        // turn off client overlay when errors are present
        overlay: false
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

