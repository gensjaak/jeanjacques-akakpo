module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'jeanjacquesakakpo.me',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** CSS file
  */
  css: [
    '@/assets/styles/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#000' },
  /*
  ** Build configuration
  */
  mode: 'spa',
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
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