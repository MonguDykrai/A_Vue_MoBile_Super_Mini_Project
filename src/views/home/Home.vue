<template>
  <div class="view-home">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <a href="javascript: void(0);">
          <img :src="item.img" :alt="item.id + '.jpg'">
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <c-sudoku></c-sudoku>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
import { Sudoku } from '@/views'

export default {
  name: 'vw-home',
  components: { Sudoku },
  data: function () {
    return {
      msg: 'home',
      imgList: []
    }
  },
  created: function () {
    axios({
      url: 'http://www.liulongbin.top:3005/api/getlunbo'
    }).then(res => {
      // res.data.message 为一个数组
      this.imgList = res.data.message
      //console.log(this.imgList)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-home {
  padding-top: 40px;
  padding-bottom: 51px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.mint-swipe {
  height: 160px;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>