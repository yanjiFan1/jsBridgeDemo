<template>
  <div id="app">
    <!--<keep-alive include="keepAliveArr">
      <router-view class="child-view"></router-view>
    </keep-alive>-->
    <!-- <keep-alive :exclude="excludeArr">
      <router-view v-if='$route.meta.keepAlive' class="child-view"></router-view>
    </keep-alive> -->
    <router-view v-if='!$route.meta.keepAlive' class="child-view"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App'
}
</script>
<style lang='scss'>
</style>
<style>
  #app {
    font-family: 'Helvetica Neue', Tahoma, Arial, PingFangSC-Regular, 'Hiragino Sans GB', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  body {
    padding-bottom: constant(safe-area-inset-bottom);
    padding-bottom: env(safe-area-inset-bottom);
    -webkit-text-size-adjust: none;
  }

  img {
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 100%;
  }

  .clearfix:after {
    content: '';
    display: block;
    visibility: hidden;
    height: 0;
    clear: both;
  }
</style>
