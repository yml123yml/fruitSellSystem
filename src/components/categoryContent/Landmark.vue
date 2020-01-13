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
        },
        {
          id: 5,
          title: '莓',
          thumb: '../../../static/img/hot5.jpg'
        },
        {
          id: 6,
          title: '牛油果',
          thumb: '../../../static/img/hot6.jpg'
        },
        {
          id: 7,
          title: '提子',
          thumb: '../../../static/img/hot7.jpg'
        },
        {
          id: 8,
          title: '苹果',
          thumb: '../../../static/img/hot8.jpg'
        },
        {
          id: 9,
          title: '梨',
          thumb: '../../../static/img/hot9.jpg'
        },
        {
          id: 10,
          title: '柑橘橙柚',
          thumb: '../../../static/img/hot10.jpg'
        },
        {
          id: 11,
          title: '全部',
          thumb: '../../../static/img/hot11.jpg'
        },
        {
          id: 12,
          title: '火龙果',
          thumb: '../../../static/img/hot12.jpg'
        },
        {
          id: 13,
          title: '椰子',
          thumb: '../../../static/img/hot13.jpg'
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
