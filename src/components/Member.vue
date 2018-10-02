<template>
  <div class="c-member">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'Member',
    data() {
      return {
        msg: 'member'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .c-member {
    padding-top: 40px;
    padding-bottom: 51px;
  }
</style>