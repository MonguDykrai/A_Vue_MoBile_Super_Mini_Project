<template>
  <div class="c-search">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        msg: 'search'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-search {
    padding-top: 40px;
    padding-bottom: 51px;
  }
</style>