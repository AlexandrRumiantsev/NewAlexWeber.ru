//https://medium.com/js-dojo/how-i-generated-dynamic-routes-for-different-nuxt-js-pages-ce2ee6972743

/*
import data from './static/storedata.json'
let dynamicRoutes = () => {
  return new Promise(resolve => {
    resolve(data.map(el => `product/${el.id}`))
  })
}
*/
import axios from 'axios'

const dynamicRoutes = async () => {

    const url = 'http://alexweber.ru:5000/';

    const resForProjects = await axios.get(
      url + 'get_file_data_project'
    )

    const resForPapers = await axios.get(
      url + 'get_file_data_paper'
    )


    const routesForProject = resForProjects.data.map((project)=>{
      let data = JSON.parse(project);
      return {
        route: `/projects/${data._id}`,
        payload: data
      }
    })

    const routesForPaper = resForPapers.data.map((paper)=>{
      let data = JSON.parse(paper);
      return {
        route: `/papers/${data._id}`,
        payload: data
      }
    })

    const routes = routesForProject.concat(routesForPaper);

    return routes;

}



export default {
  mode: 'spa',
  /*router: {
     base: './'
  },*/
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    script: [{ src: 'https://js.stripe.com/v3/' }],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,600|PT+Serif&display=swap'
      }
    ]
  },
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['normalize.css', { src: '~/assets/main.scss', lang: 'sass' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [`~/plugins/currency-filter.js`],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
