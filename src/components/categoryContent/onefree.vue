<template>
  <div class="container">
    <van-grid :column-num="3" :border="false">
      <van-grid-item v-for="(item,index) in hotList" :key="index" :icon="item.thumb" :text="item.title" />
    </van-grid>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hotList: [
        {
          id: 1,
          title: '全部',
          thumb: '../../../static/img/hot1.jpg'
        },
        {
          id: 2,
          title: '奇异果',
          thumb: '../../../static/img/hot2.jpg'
        },
        {
          id: 3,
          title: '车厘子',
          thumb: '../../../static/img/hot3.jpg'
        },
        {
          id: 4,
          title: '桃',
          thumb: '../../../static/img/hot4.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.van-grid {
    margin-bottom: 30px;
}
/deep/ .van-icon__image {
    width: 48px;
    height: 48px;
    object-fit: contain;
}
</style>
