<template>
  <div>
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item  v-for="item in lunbotuList" :key="item.id">
        <img :src="item.proImg" @click="getProDetail(item.id)" />
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
      console.log('我是banner接口')
      this.lunbotuList = res.data
    })
  },
  methods: {
    getProDetail (proId) {
      this.$router.push({path: 'bannerDetail', query: {id: proId}})
    }
  }
}
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 173px;
  .van-swipe-item {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
