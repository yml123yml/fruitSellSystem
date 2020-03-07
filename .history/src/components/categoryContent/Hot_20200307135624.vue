<template>
  <div class="container">
      <van-grid :column-num="3" :border="false">
        <van-grid-item
          v-for="(item,index) in hotList"
          :key="index"
          :icon="item.pic"
          :text="item.name"
          @click="getProDetail(item.id)"
        />
      </van-grid>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      hotList: []
    }
  },
  mounted () {
    axios.post('/api/category/hotFruit').then(res => {
      this.hotList = res.data
    })
  },
  methods: {
    getProDetail (proId) {
      this.$router.push({path: 'shopDetail', query: {id: proId}})
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-icon__image {
  width: 58px;
  height: 58px;
  object-fit: contain;
}
</style>
