<template>
  <div class="page">
      <!-- 轮播图组件 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in imgList" :key="index">
        <img :src="item.img" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格， 数据都是静态的 -->
    <ul class="news">
      <li class="news-list">
        <router-link to = "/news/list">
          <img src="../assets/images/menu1.png" alt="">
          <div class="news-txt">新闻资讯</div>
        </router-link>
      </li>
      <li class="news-list">
        <router-link to="pic/list">
          <img src="../assets/images/menu2.png" alt="">
          <div class="news-txt">图片分享</div>
        </router-link>
      </li>
      <li class="news-list">
        <a href="#">
          <img src="../assets/images/menu3.png" alt="">
          <div class="news-txt">商品购买</div>
        </a>
      </li>
      <li class="news-list">
        <a href="#">
          <img src="../assets/images/menu4.png" alt="">
          <div class="news-txt">留言反馈</div>
        </a>
      </li>
      <li class="news-list">
        <a href="#">
          <img src="../assets/images/menu5.png" alt="">
          <div class="news-txt">视频专区</div>
        </a>
      </li>
      <li class="news-list">
        <a href="#">
          <img src="../assets/images/menu6.png" alt="">
          <div class="news-txt">联系我们</div>
        </a>
      </li>
     
     
    </ul>

  </div>


</template>

<script>
/* eslint-disable */
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
    // 1.获取轮播图相关数据
    axios({
      url: "http://www.liulongbin.top:3005/api/getlunbo"
    }).then(res => {
      // res.data.message为一个数组
      this.imgList = res.data.message;
    });

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.page {
  padding: 0 5px;
  padding-top: 5px;
}

.news img {
  width: 50px;
  display: block;
  margin: 0 auto;
}
.news-list {
  /* padding: 11px 15px; */
  margin: 0;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  float: left;
  width: 33%;
  padding: 15px 0;
}
/* .news-list:nth-child(3n) {
  border-right: 0;
} */
.news-list a {
  display: block;
  color: #000;
  text-decoration: none;
}
.news-txt{
  text-align: center;
  margin-top: 15px;
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

/*轮播图样式*/ 
.mint-swipe {
  height: 150px;
}
.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>