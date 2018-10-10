<template>
  <div class="view-goods-list">
    <!-- 商品展示区域 -->
    <div class="goods-content clearfix" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <!-- 单个商品展示 -->
      <div class="product" v-for="(item, index) in goodsList" :key="index">
        <!-- 点击商品后，需要跳转到该商品对应的详情页 -->
        <router-link :to="'/goods/detail/' + item.id">
          <img v-lazy="item.img_url">
          <div class="product-details">
            <h4>{{item.title}}</h4>
            <p class="price">
              <span class="sales">￥{{item.sell_price}}</span>
              <del>￥{{item.market_price}}</del>
            </p>
            <p class="hot">
              <span>热卖中</span>
              <span class="fr">还剩{{item.stock_quantity}}件</span>
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <!-- 显示加载更多 -->
    <p class="page-infinite-loading" v-if="isMoreData">
      <span>
        <div class="mint-spinner-fading-circle circle-color-36" style="width: 28px; height: 28px;">
          <div class="mint-spinner-fading-circle-circle is-circle2"></div>
          <div class="mint-spinner-fading-circle-circle is-circle3"></div>
          <div class="mint-spinner-fading-circle-circle is-circle4"></div>
          <div class="mint-spinner-fading-circle-circle is-circle5"></div>
          <div class="mint-spinner-fading-circle-circle is-circle6"></div>
          <div class="mint-spinner-fading-circle-circle is-circle7"></div>
          <div class="mint-spinner-fading-circle-circle is-circle8"></div>
          <div class="mint-spinner-fading-circle-circle is-circle9"></div>
          <div class="mint-spinner-fading-circle-circle is-circle10"></div>
          <div class="mint-spinner-fading-circle-circle is-circle11"></div>
          <div class="mint-spinner-fading-circle-circle is-circle12"></div>
          <div class="mint-spinner-fading-circle-circle is-circle13"></div>
        </div>
      </span>
      加载中...
    </p>
  </div>
</template>

<script>
/* eslint-disable */
  import { Toast } from "mint-ui"
  import axios from "axios";

  export default {
    name: 'vw-goods-list',
    data: function () {
      return {
        goodsList: [],
        pageIndex: 1,
        loading: false,
        isMoreData: false
      }
    },
    created() {
      this.getGoodsList()
    },
    methods: {
      getGoodsList() {
        axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=' + this.pageIndex)
          .then(res => {
            this.goodsList = this.goodsList.concat(res.data.message);
            if (res.data.message.length == 0) {
              // alert('没有更多数据了')
              Toast("没有更多数据了")
              this.isMoreData = false // 为假则 将加载更多的盒子隐藏
              this.loading = true // 为真，无限滚动不会触发
            }
          });
      },

      loadMore() {
        // this.loading = true;
        this.pageIndex++
        this.getGoodsList()
        this.isMoreData = true
        this.loading = false
      }
    }
  }
</script>

<style scoped>
  .view-goods-list {
    padding-top: 40px;
    padding-bottom: 51px;
  }

  .goods-content {
    padding: 3px;
  }

  .product {
    width: 47%;
    border: 1px solid #ccc;
    box-shadow: 0 0 7px #aaa;
    float: left;
    margin: 1%;
  }

  a {
    color: #007aff;
  }

  .price {
    margin: 15px 0;
  }

  h4 {
    margin-top: 5px;
    height: 28px;
  }

  h4,
  p {
    font-size: 14px;
    text-align: left;
    line-height: 1;
    margin-bottom: 5px;
  }

  .sales {
    color: red;
  }

  .fr {
    float: right;
  }

  .hot {
    color: #8f8f94;
  }

  /*加载更多的样式*/
  .page-infinite-loading {
    text-align: center;
    height: 30px;
    line-height: 30px;
  }

  .page-infinite-loading div {
    display: inline-block;
    vertical-align: middle;
    margin-right: 5px;
  }

  .mint-spinner-fading-circle {
    position: relative;
  }

  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
</style>// eslint-disable-next-line