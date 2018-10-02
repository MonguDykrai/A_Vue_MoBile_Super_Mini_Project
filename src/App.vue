<template>
  <div id="app">
    <mt-header title="無題" :style="{fontFamily: 'Microsoft YaHei Light'}" :class="{'is-fixed': fixed}" :fixed="fixed">
      <router-link to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <router-view />

    <mt-tabbar v-model="selected" :class="{'is-fixed': fixed}" :fixed="fixed">
      <!-- v-model="selected" cannot be deleted -->
      <mt-tab-item id="iHome">
        <i slot="icon" class="iconfont icon-ioshomeoutline"></i>
        Home
      </mt-tab-item>
      <mt-tab-item id="iMember">
        <i slot="icon" class="iconfont icon-profileo"></i>
        Member
      </mt-tab-item>
      <mt-tab-item id="iCart">
        <i slot="icon" class="iconfont icon-cart"></i>
        Cart
      </mt-tab-item>
      <mt-tab-item id="iSearch">
        <i slot="icon" class="iconfont icon-search"></i>
        Search
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>

  export default {
    name: 'App',
    data: function () {
      return {
        selected: null, // value of selected tab-item's id, name can be anything (e.g. value)
        fixed: true
      }
    },
    watch: {
      // Which link has been clicked
      selected: function (newVal) {
        let compID = newVal
        switch (compID) {
          case 'iHome':
            /*
             * this.$route
             * {name: "HelloWorld", meta: {…}, path: "/", hash: "", query: {…}, …}
             * 
             * this.$router
             * access to the router instance
             */
            this.$router.push('/')
            break;
          case 'iMember':
            this.$router.push('/member')
            break;
          case 'iCart':
            this.$router.push('/cart')
            break;
          case 'iSearch':
            this.$router.push('/search')
            break;
        }
      }
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .mint-tabbar {
    /* 默认高度是由 icon 和 font 的高度撑起来的，先写死 */
    /* height: 50px; */

    background-color: #F7F7F7;
    border-top: 1px solid #959598;
  }

  .mint-tab-item {
    padding: 5px 0;
  }


  .mint-tabbar>.mint-tab-item.is-selected {
    background-color: inherit;
  }

  .mint-tab-item-icon>* {
    font-size: 24px;
  }

  .mint-tab-item-label {
    font-size: 11px;
    /* 为啥不管用 */
  }
</style>