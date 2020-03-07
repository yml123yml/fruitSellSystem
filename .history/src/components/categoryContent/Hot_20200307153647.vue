<template>
  <div class="container">
      <van-grid :column-num="3" :border="false">
        <van-grid-item
          v-for="(item,index) in hotList"
          :key="index"
          :icon="item.pic"
          :text="item.name"
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
      console.log(res.data)
      this.hotList = res.data
    })
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
