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
import hot from '../categoryContent/Hot'
import imported from '../categoryContent/Imported'
import landmark from '../categoryContent/Landmark'
import seasonal from '../categoryContent/Seasonal'
import onefree from '../categoryContent/onefree'
export default {
  data () {
    return {
      activeIndex: 0,
      items: [
        { text: '热销水果' },
        { text: '进口水果' },
        { text: '时令水果' },
        { text: '买一赠一' },
        { text: '地标水果' }
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
