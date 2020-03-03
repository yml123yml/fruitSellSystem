<template>
  <div class="container">
    <van-grid :column-num="3" :border="false">
      <van-grid-item
        v-for="(item,index) in landmankList"
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
      landmankList: []
    }
  },
  mounted () {
    axios.post('/api/category/landmankFruit').then(res => {
      this.landmankList = res.data
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
