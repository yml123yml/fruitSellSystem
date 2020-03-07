<template>
  <div class="container">
    <div style="height:40px;">
      <div class="header">
        <div class="title">分类</div>
      </div>
    </div>
    <van-tree-select height="90vh" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <hot v-if="activeIndex === 0"></hot>
        <imported v-if="activeIndex === 1"></imported>
        <seasonal v-if="activeIndex === 2"></seasonal>
        <onefree v-if="activeIndex === 3"></onefree>
        <landmark v-if="activeIndex === 4"></landmark>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import allFruit from '../categoryContent/allFruit'
import apple from '../categoryContent/apple'
import dongzao from '../categoryContent/dongzao'
import huolongguo from '../categoryContent/huolongguo'
import allFruit from '../categoryContent/allFruit'
import apple from '../categoryContent/apple'
import allFruit from '../categoryContent/allFruit'
import apple from '../categoryContent/apple'
import allFruit from '../categoryContent/allFruit'
import apple from '../categoryContent/apple'
import allFruit from '../categoryContent/allFruit'
import apple from '../categoryContent/apple'

export default {
  data () {
    return {
      activeIndex: 0,
      items: [
        { text: '全部' },
        { text: '苹果' },
        { text: '榴莲' },
        { text: '芒果' },
        { text: '奇异果' },
        { text: '火龙果' },
        { text: '橙子' },
        { text: '草莓' },
        { text: '蜜瓜甜瓜' },
        { text: '石榴山竹' },
        { text: '冬枣龙眼' },
        { text: '枇杷芭乐' },
        { text: '金桔柠檬' }
      ]
    }
  },
  components: {
    hot,
    imported,
    landmark,
    seasonal,
    onefree
  }
}
</script>

<style lang="scss" scoped>
.container {
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(90deg, #39da85, #01b27a);
    .title {
      margin: 0 20px;
      font-size: 14px;
      color: #ffffff;
    }
  }
}
</style>
