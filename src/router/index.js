import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Member from '@/views/member/Member'
import Cart from '@/views/cart/Cart'
import Search from '@/views/search/Search'

import NewsList from '@/views/news/list/NewsList'
import PicList from '@/views/pic/list/PicList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/news/list',
      name: 'NewsList',
      component: NewsList
    },
    {
      path: '/pic/list',
      name: 'PicList',
      component: PicList
    }
  ]
})
