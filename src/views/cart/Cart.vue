<template>
  <div class="view-cart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'vw-cart',
  data() {
    return {
      msg: 'cart'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-cart {
  padding-top: 40px;
  padding-bottom: 51px;
}
</style>