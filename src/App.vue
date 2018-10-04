<template>
  <div id="app">
    <c-header :fixed="fixed"></c-header>

    <router-view />

    <c-tabbar :fixed="fixed"></c-tabbar>
  </div>
</template>

<script>
/* eslint-disable */
import { Header, Tabbar } from '@/components'

export default {
  name: 'App',
  data: function () {
    return {
      fixed: true
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>