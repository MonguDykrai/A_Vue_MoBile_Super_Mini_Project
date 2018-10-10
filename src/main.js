// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/media-query.css'

import { Header, Button, Tabbar, TabItem, Swipe, SwipeItem } from 'mint-ui'
import { InfiniteScroll } from "mint-ui";
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

//import MintUi from 'mint-ui';
//Vue.use(MintUi);



Vue.use(InfiniteScroll);

Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
