<template>
  <div class="container">
    <van-grid :column-num="3" :border="false">
      <van-grid-item
        v-for="(item,index) in seasonalList"
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
      seasonalList: []
    }
  },
  mounted () {
    axios.post('/api/category/seasonalFruit').then(res => {
      this.seasonalList = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
/deep/ .van-icon__image {
  width: 68px;
  height: 68px;
}
</style>
