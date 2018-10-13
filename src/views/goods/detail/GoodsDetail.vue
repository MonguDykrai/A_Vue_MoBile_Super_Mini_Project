<template>
  <div class="view-goods-detail">
    <div class="comp-carousel"></div>

    <div class="comp-info">
      <div class="head"></div>
      <div class="body">
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="stockQuantity"></el-input-number>
      </div>
    </div>

    <div class="comp-param"></div>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios'

  export default {
    name: 'vm-goods-detail',
    data: function () {
      return {
        goodsDetail: null,
        num1: 1,
        stockQuantity: 0
      }
    },
    created: function () {
      let { id } = this.$route.params
      axios.get(`http://www.liulongbin.top:3005/api/goods/getinfo/${id}`)
        .then((response) => {
          let { status } = response.data
          if (status == 0) {
            let message = response.data.message[0]
            this.goodsDetail = message
            console.log(this.goodsDetail)

            let { stock_quantity } = this.goodsDetail
            this.stockQuantity = stock_quantity

            // https://element.eleme.io/#/en-US/component/input-number
          } else if (status == 1) {
            throw new Error('error occured.')
          }
        })
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>

<style scoped>
  .view-goods-detail {
    padding-top: 40px;
    padding-bottom: 51px;

    margin-left: 6px;
    margin-right: 6px;

    background-color: #f1d9e1;
  }

  .comp-info > .head {
    height: 50px;
    background-color: rebeccapurple;
  }

  .comp-info > .body {
    height: 50px;
    background-color: #72d399;
  }
</style>// eslint-disable-next-line