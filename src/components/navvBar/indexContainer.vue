<template>
  <div>
    <van-sticky>
        <form>
          <i class="iconfont iconfont-search">&#xe613;</i>
          <input type="search" @search="onSearch" />
        </form>
    </van-sticky>
    <swipe></swipe>
    <van-grid :border="false" :column-num="5">
      <router-link :to="{name:'/hot'}">
        <van-grid-item>
          <van-icon class="van-icon1">
            <i class="iconfont">&#xe60a;</i>
          </van-icon>
          <p class="category">热销水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'imported'}">
        <van-grid-item>
          <van-icon class="van-icon2">
            <i class="iconfont">&#xe600;</i>
          </van-icon>
          <p class="category">进口水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'seasonal'}">
        <van-grid-item>
          <van-icon class="van-icon3">
            <i class="iconfont">&#xe65b;</i>
          </van-icon>
          <p class="category">时令水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'onefree'}">
        <van-grid-item>
          <van-icon class="van-icon4">
            <i class="iconfont">&#xe8b2;</i>
          </van-icon>
          <p class="category">买一赠一</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'landmark'}">
        <van-grid-item>
          <van-icon class="van-icon5">
            <i class="iconfont">&#xe699;</i>
          </van-icon>
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
swipe {
  position: relative;
}
form {
  position: absolute;
  left: 70px;
  top: 8px;
  z-index: 11;
  .iconfont-search {
    position: absolute;
    margin: 0 10px;
    padding-right: 30px;
    font-size: 12px;
    opacity: 0.5;
  }

  input[type="search"] {
    height: 22px;
    padding-left: 30px;
  }
}
.van-grid {
  .van-grid-item {
    padding: 0 5px;
    .van-icon {
      color: #fff;
      font-size: 15px;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
    }
    .van-icon1 {
      background: #FF6C81;
    }
    .van-icon2 {
      background: #669FFD;
    }
    .van-icon3 {
      font-weight: 700;
      background: #F862B4;
    }
    .van-icon4 {
      background: #20CA9B;
    }
    .van-icon5 {
      background: #FC8C56;
    }
    .category {
      font-size: 12px;
      padding: 3px 0 0 0;
    }
    .van-grid-item__content {
      background: #fff;
    }
  }
}
</style>
