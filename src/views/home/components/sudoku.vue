<template>
  <div class="comp-sudoku">
    <ul class="mainmenu clearfix">
      <li>
        <router-link to="/news/list">
          <div class="clearfix">
            <img src="@/assets/images/menu1.png" alt="1">
          </div>
          <span>新闻资讯</span>
        </router-link>
      </li>
      <li>
        <router-link to="/pic/list">
          <div class="clearfix">
            <img src="@/assets/images/menu2.png" alt="2">
          </div>
          <span>图片分享</span>
        </router-link>
      </li>
      <li>
        <router-link to="/goods/list">
          <div class="clearfix">
            <img src="@/assets/images/menu3.png" alt="3">
          </div>
          <span>商品购买</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="clearfix">
            <img src="@/assets/images/menu4.png" alt="4">
          </div>
          <span>留言反馈</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="clearfix">
            <img src="@/assets/images/menu5.png" alt="5">
          </div>
          <span>视频专区</span>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="clearfix">
            <img src="@/assets/images/menu6.png" alt="6">
          </div><span>联系我们</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "c-sudoku"
}
</script>

<style scoped>
.mainmenu li {
  float: left;
  width: 33.33%;
  box-sizing: border-box;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  overflow: hidden;
  padding-top: 1.15rem;
  padding-bottom: 1.15rem;
  background-color: #fff;
}

.mainmenu li a {
  display: block;
  text-align: center;
}

.mainmenu li a img {
  margin: 0 auto 14px;
  width: 3.15rem;
  height: 3.15rem;
}

.mainmenu li a span {
  display: block;
  height: 15px;
  color: #333;
  font-size: 15px;
  line-height: 15px;
}

.mainmenu li:nth-child(3n) {
  border-right: none;
}

a:active {
  background-color: palegreen;
}
</style>// eslint-disable-next-line