<template>
  <div id="app">
    <router-view />
    <nav class="mui-bar mui-bar-tab" v-if="$route.meta.keepAlive">
      <router-link class="mui-tab-item" to="/indexContainer">
        <span class="mui-icon iconfont">&#xe63b;</span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/categoryContainer">
        <span class="mui-icon iconfont">&#xe66c;</span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cartContainer">
        <span class="mui-icon iconfont">&#xe620;
          <span class="mui-badge">2</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myContainer">
        <span class="mui-icon iconfont">&#xe66e;</span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
}
.mui-bar-tab {
  background: #fff;
}
</style>
