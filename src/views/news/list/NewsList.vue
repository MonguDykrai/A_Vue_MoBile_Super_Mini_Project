<template>
  <div class="view-news-list">
    {{ msg }}
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'vw-news-list',
  data: function () {
    return {
      msg: 'news-list'
    }
  }
}
</script>

<style scoped>
.view-news-list {
  padding-top: 40px;
  padding-bottom: 51px;
}
</style>