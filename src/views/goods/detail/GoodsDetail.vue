<template>
  <div class="view-goods-detail">
    {{ msg }}
    <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
  </div>
</template>

<script>
/* eslint-disable */
  import axios from 'axios'

  export default {
    name: 'vm-goods-detail',
    data: function () {
      return {
        msg: 'goods-detail',
        goodsDetail: null,
        num1: 1
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
  }
</style>// eslint-disable-next-line