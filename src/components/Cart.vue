<template>
  <div class="c-cart">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        msg: 'cart'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-cart {
    padding-top: 40px;
    padding-bottom: 51px;
  }
</style>