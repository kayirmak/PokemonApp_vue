import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/views/Feed'
import FavoriteList from '@/views/FavoriteList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/favoriteList',
      name: 'FavoriteList',
      component: FavoriteList
    }
  ]
})
