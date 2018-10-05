<template>
  <div class="view-goods-list">
    {{ msg }}
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'vw-goods-list',
  data: function () {
    return {
      msg: 'goods-list'
    }
  }
}
</script>

<style scoped>
.view-goods-list {
  padding-top: 40px;
  padding-bottom: 51px;
}
</style>