<template>
  <div>
    <div style="height:38px;">
      <div class="header">
        <div class="title">分类</div>
      </div>
    </div>
    <van-tree-select height="55vw" :items="items" :main-active-index.sync="activeIndex">
      <template slot="content">
        <hot-fruit v-if="activeIndex === 0"></hot-fruit>
        <imported-fruit v-if="activeIndex === 1"></imported-fruit>
        <landmark-fruit v-if="activeIndex === 2"></landmark-fruit>
        <seasonal-fruit v-if="activeIndex === 3"></seasonal-fruit>
        <onefree-fruit v-if="activeIndex === 4"></onefree-fruit>
      </template>
    </van-tree-select>
  </div>
</template>

<script>
import hotFruit from '../categoryContainer/HotFruit'
import importedFruit from '../categoryContainer/ImportedFruit'
import landmarkFruit from '../categoryContainer/LandmarkFruit'
import seasonalFruit from '../categoryContainer/SeasonalFruit'
import onefreeFruit from '../categoryContainer/onefreeFruit'
export default {
  data () {
    return {
      activeIndex: 0,
      items: [{ text: '热销水果' }, { text: '进口水果' }, { text: '时令水果' }, { text: '买一赠一' }, { text: '地标水果' }]
    }
  },
  components: {
    hotFruit,
    importedFruit,
    landmarkFruit,
    seasonalFruit,
    onefreeFruit

  }
}
</script>

<style lang="scss">
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 38px;
  background: linear-gradient(90deg, #39da85, #01b27a);
  display: flex;
  .title {
    margin: 0 20px;
    font-size: 12px;
  }
}
</style>
