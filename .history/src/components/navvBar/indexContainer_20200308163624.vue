<template>
  <div>
    <form>
      <i class="iconfont iconfont-search">&#xe613;</i>
      <input type="search" @search="onSearch" v-model="search" ref="searchInput" />
    </form>
    <swipe></swipe>
    <van-grid :border="false" :column-num="5">
      <router-link :to="{name:'hotDetail'}">
        <van-grid-item>
          <van-icon class="van-icon1">
            <i class="iconfont">&#xe60a;</i>
          </van-icon>
          <p class="category">热销水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'importedDetail'}">
        <van-grid-item>
          <van-icon class="van-icon2">
            <i class="iconfont">&#xe600;</i>
          </van-icon>
          <p class="category">进口水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'seasonalDetail'}">
        <van-grid-item>
          <van-icon class="van-icon3">
            <i class="iconfont">&#xe65b;</i>
          </van-icon>
          <p class="category">时令水果</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'onefreeDetail'}">
        <van-grid-item>
          <van-icon class="van-icon4">
            <i class="iconfont">&#xe8b2;</i>
          </van-icon>
          <p class="category">买一赠一</p>
        </van-grid-item>
      </router-link>
      <router-link :to="{name:'landmarkDetail'}">
        <van-grid-item>
          <van-icon class="van-icon5">
            <i class="iconfont">&#xe699;</i>
          </van-icon>
          <p class="category">地标水果</p>
        </van-grid-item>
      </router-link>
    </van-grid>
    <first-list></first-list>
    <tui-jian></tui-jian>
  </div>
</template>

<script>
import swipe from '../swipe.vue'
import firstList from '../indexContent/firstList'
import tuiJian from '../indexContent/tuijian'
export default {
  name: 'indexContainer',
  data () {
    return {
    }
  },
  components: {
    swipe,
    firstList,
    tuiJian
  }
}
</script>
<style lang="scss" scoped>
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
    margin-left: 10px;
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
      background: #ff6c81;
    }
    .van-icon2 {
      background: #669ffd;
    }
    .van-icon3 {
      font-weight: 700;
      background: #f862b4;
    }
    .van-icon4 {
      background: #20ca9b;
    }
    .van-icon5 {
      background: #fc8c56;
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
.fixForm {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0 50px;
  height: 40px;
  line-height: 38px;
  background: linear-gradient(90deg, #39da85, #01b27a);
}
</style>
