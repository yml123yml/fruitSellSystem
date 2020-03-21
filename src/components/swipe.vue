<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item  v-for="(item,index) in lunbotuList" :key="index">
        <img :src="item.pic" @click="getProDetail(item)" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      lunbotuList: []
    }
  },
  mounted () {
    axios.post('/api/banner/allBanner').then(res => {
      this.lunbotuList = res.data
    })
  },
  methods: {
    getProDetail (item) {
      localStorage.setItem('goodsInfo', JSON.stringify(item))
      this.$router.push({path: '/bannerDetail'})
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-swipe {
  height: 173px;
  transform: translateZ(0);
  .van-swipe-item {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
