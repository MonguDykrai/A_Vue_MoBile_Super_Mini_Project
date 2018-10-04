<template>
  <mt-header title="無題" :style="{fontFamily: 'Microsoft YaHei Light'}" :class="{'is-fixed': fixed}">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
  </mt-header>
</template>

<script>
/* eslint-disable */
export default {
  name: 'c-header',
  props: ['fixed']
}
</script>

<style scoped>
</style>