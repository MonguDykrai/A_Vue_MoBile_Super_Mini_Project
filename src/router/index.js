import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Member from '@/components/Member'
import Cart from '@/components/Cart'
import Search from '@/components/Search'

// 新闻列表
import newsList from '@/views/news/List';
// import newsList from '../views/news/List.vue'; 第二种方法

//图片分享
import picList from '@/views/picShare/List';


Vue.use(Router)

export default new Router({
  mode: 'history', // 美化地址栏
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
      component: newsList
    },
    {
      path: '/pic/list',
      component: picList
    }
  ]
})
