import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/users',
      name: 'users',
/*      beforeEnter: (to, from, next) => {
        console.log('to', to)
        console.log('from', from)
        next('/')
      },*/
      component: () => import(/* webpackChunkName: "users" */ './views/Users.vue'),
      children: [
        { path: ':id',
          name: 'users-detail',
          component: () => import(/* webpackChunkName: "users-detail" */ './views/UsersDetail.vue')
        },
        { path: ':id/edit',
          name: 'users-edit',
          component: () => import(/* webpackChunkName: "users-edit" */ './views/UsersEdit.vue')
        },
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import(/* webpackChunkName: "shop" */ './views/Shop.vue')
    },
  ]
})
