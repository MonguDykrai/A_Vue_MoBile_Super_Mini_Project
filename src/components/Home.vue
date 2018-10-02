<template>

  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item, index) in imgList" :key="index">
      <img :src="item.img" alt="">
    </mt-swipe-item>
  </mt-swipe>
    
</template>

<script>

import axios from "axios";
export default {
  name: "Home", 
  data() {
    return {
      imgList: [],
      msg: "home"
    };
  },
  created() {
    axios({
      url: "http://www.liulongbin.top:3005/api/getlunbo"
    }).then(res => {
      // res.data.message为一个数组
      this.imgList = res.data.message
      console.log(this.imgList);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.mint-swipe{
  height: 150px;
}
.mint-swipe-item img{
  width: 100%;
  height: 100%;
}
</style>