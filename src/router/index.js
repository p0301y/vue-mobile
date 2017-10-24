import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import app from "../App.vue"


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: app,
      /*children: [
        {
          path: '/NETEAZY',
          name: 'netEazy',
          component(resolve){
            require.ensure(['../components/Neteasy.vue'], () => {
              resolve(require('../components/Neteasy.vue'))
            })
          }
        }
      ]*/
      /*component(resolve) {
        require.ensure(['../App.vue'], () => {
          resolve(require('../App.vue'));
        });
      },*/
      /*children: [
        {
          path: '/content',
          name: 'content',
          component: require("../components/Content.vue"),
          children: [
            {
              path: '/lazyload',
              name: 'lazyload',
              component: require("../components/LazyLoad.vue"),
              children: [
                {
                  path: "/NETEAZY",
                  name: "netEasy",
                  component(resolve){
                    require.ensure(['../components/Neteasy.vue'], () => {
                      resolve(require('../components/Neteasy.vue'))
                    })
                  }
                }
              ]
            }
          ]
        }
      ]*/
    }
  ]
})
