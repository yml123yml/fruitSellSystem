<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item  v-for="item in lunbotuList" :key="item.id">
        <img :src="item.images" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lunbotuList: [
        { images: '../../static/img/banner1.jpg' },
        { images: '../../static/img/banner2.png' },
        { images: '../../static/img/banner3.png' },
        { images: '../../static/img/banner4.png' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 153px;
  .van-swipe-item {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
