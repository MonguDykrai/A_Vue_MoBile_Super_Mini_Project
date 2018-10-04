<template>
  <div class="view-member">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'vw-member',
  data() {
    return {
      msg: 'member'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view-member {
  padding-top: 40px;
  padding-bottom: 51px;
}
</style>