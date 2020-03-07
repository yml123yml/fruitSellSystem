<template>
  <div class="container">
    <div style="height:40px;">
      <div class="header">
        <div class="title">分类</div>
      </div>
    </div>
    <van-tree-select height="90vh" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <all-fruit v-if="activeIndex === 0"></all-fruit>
        <apple v-if="activeIndex === 1"></apple>
        <liulian v-if="activeIndex === 2"></liulian>
        <mangguo v-if="activeIndex === 3"></mangguo>
        <qiyiguo v-if="activeIndex === 4"></qiyiguo>
        <huolongguo v-if="activeIndex === 5"></huolongguo>
        <orange v-if="activeIndex === 6"></orange>
        <strawberry v-if="activeIndex === 7"></strawberry>
        <migua v-if="activeIndex === 8"></migua>
        <shiliu v-if="activeIndex === 9"></shiliu>
        <dongzao v-if="activeIndex === 10"></dongzao>
        <pipa v-if="activeIndex === 11"></pipa>
        <jinju v-if="activeIndex === 12"></jinju>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import allFruit from '../categoryContent/allFruit'
import apple from '../categoryContent/apple'
import dongzao from '../categoryContent/dongzao'
import huolongguo from '../categoryContent/huolongguo'
import jinju from '../categoryContent/jinju'
import liulian from '../categoryContent/liulian'
import mangguo from '../categoryContent/mangguo'
import migua from '../categoryContent/migua'
import orange from '../categoryContent/orange'
import pipa from '../categoryContent/pipa'
import qiyiguo from '../categoryContent/qiyiguo'
import shiliu from '../categoryContent/shiliu'
import strawberry from '../categoryContent/strawberry'
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
        { text: '瓜果类' },
        { text: '石榴山竹' },
        { text: '青枣龙眼' },
        { text: '枇杷芭乐' },
        { text: '金桔柠檬' }
      ]
    }
  },
  components: {
    allFruit,
    apple,
    dongzao,
    huolongguo,
    jinju,
    liulian,
    mangguo,
    migua,
    orange,
    pipa,
    qiyiguo,
    shiliu,
    strawberry
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
.van-sidebar-item--select {
  color: red;
}
.van-tree-select__nav {
  flex: none;
  background: url('../../../static/img/allFruit/l1.jpg');
  background: url('../../../static/img/allFruit/l1sw1.jpg');
  background: url('../../../static/img/allFruit/l1sw2.jpg');
  background: url('../../../static/img/allFruit/l1sw3.jpg');
  background: url('../../../static/img/allFruit/l1de1.jpg');
}
</style>
