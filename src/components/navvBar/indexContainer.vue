<template>
  <div>
    <div style="height:38px;">
      <div class="header">
        <div class="title">冰果</div>
        <form action>
          <i class="iconfont iconfont-search">&#xe613;</i>
          <input type="search" @search="onSearch" />
        </form>
      </div>
    </div>
    <swipe></swipe>
    <van-grid :border="false" :column-num="5">
      <router-link :to="{name:'hotFruit'}">
        <van-grid-item>
          <van-icon name="../../../static/img/category2.png" />
          <p class="category">热销水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'importedFruit'}">
        <van-grid-item>
          <van-icon name="../../../static/img/category2.png"/>
        <p class="category">进口水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'seasonalFruit'}">
        <van-grid-item>
          <van-icon name="../../../static/img/category2.png"/>
          <p class="category">时令水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'onefreeFruit'}">
        <van-grid-item>
          <van-icon name="../../../static/img/category2.png"/>
          <p class="category">买一赠一</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'landmarkFruit'}">
        <van-grid-item>
          <van-icon name="../../../static/img/category2.png"/>
          <p class="category">地标水果</p>
        </van-grid-item>
      </router-link>
    </van-grid>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
    <p>我是内容</p>
  </div>
</template>

<script>
import swipe from '../swipe.vue'
export default {
  data () {
    return {}
  },
  methods: {
    onSearch () {
      alert('暂无水果信息')
    }
  },
  components: {
    swipe
  }
}
</script>

<style lang="scss">
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 38px;
  background: linear-gradient(90deg, #39da85, #01b27a);
  display: flex;
  .title {
    margin: 0 20px;
    font-size: 12px;
  }
  .iconfont-search {
    position: absolute;
    margin-left: 10px;
    font-size: 12px;
    opacity: 0.5;
  }
  input {
    width: 300px;
    height: 22px;
    background: #fff;
    border-radius: 20px;
    padding: 0 0 0 40px;
    text-align: left;
  }
}
.van-grid-item {
  .van-icon {
    font-size: 50px;
    border: 1px solid rgba(125,205,205,0.5);
    border-radius: 50%;
  }
  .category {
      font-size: 12px;
      padding: 3px 0 0 0;
    }
  .van-grid-item__content {
    background: #fff;
  }
}
</style>
