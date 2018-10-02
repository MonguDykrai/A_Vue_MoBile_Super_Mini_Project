// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'

import Mint from 'mint-ui';
Vue.use(Mint);

// import { Header, Button, Tabbar, TabItem, Swipe, SwipeItem} from 'mint-ui'

// 轮播图组件
// import { Swipe, SwipeItem } from 'mint-ui';

// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

// Vue.component(Header.name, Header)
// Vue.component(Button.name, Button)
// Vue.component(Tabbar.name, Tabbar)
// Vue.component(TabItem.name, TabItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
