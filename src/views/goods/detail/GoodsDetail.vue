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
        goodsList: [],
        goodsDetail: null,
        num1: 1
      }
    },
    created: function () {
      axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=1')
        .then((response) => {
          let { status, statusText } = response
          let { message } = response.data
          let { goodsList, goodsDetail } = this
          if (status == 200 && statusText == 'OK') {
            goodsList = message
            
            axios.get('http://www.liulongbin.top:3005/api/getgoods?pageindex=2')
              .then((response) => {
                let { status, statusText } = response
                let { message } = response.data

                if (status == 200 && statusText == 'OK') {
                  goodsList = goodsList.concat(message)

                  let { id } = this.$route.query

                  goodsList.map(function (element, index, array) {
                    if (element.id == id) {
                      goodsDetail = element
                    }
                  })

                  console.log(goodsDetail)

                  // https://element.eleme.io/#/en-US/component/input-number
                }
              })
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