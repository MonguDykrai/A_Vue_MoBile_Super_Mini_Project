<template>
  <mt-header title="無題" :style="{fontFamily: 'Microsoft YaHei Light'}" :class="{'is-fixed': fixed}">
    <router-link to="" @click.native="goPreviousView" slot="left">
      <!-- must to use the native qualifier to qualify the click event, or will not trigger function goPreviousView -->
      <mt-button icon="back" v-if="$route.path != '/'"></mt-button>
      <!-- back icon do not need display when is the home page -->
    </router-link>
  </mt-header>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'c-header',
    props: ['fixed'],
    methods: {
      goPreviousView: function () {
        this.$router.go(-1) // equivalent to `this.$router.back()`
      }
    }
  }
</script>

<style scoped>
</style>