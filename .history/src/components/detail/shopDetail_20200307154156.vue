<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
    <ul style="margin-top:60px;">
      <li v-for="item in list" :key="item.id">
        <img :src="item.pic" />
        <div>{{ item.title }}</div>
        <div>{{ item.desc }}</div>
        <div>{{ item.tip }}</div>
        <div>{{ item.price }}</div>
        <div>{{ item.num }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'shopDetail',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('/api/category/hotFruitList').then(res => {
      this.list = res.data
    })
  },
  components: {
    headerDetail
  }
}
</script>

<style lang="scss" scoped>
.goodDetail {
  height: 90vh;
  background: #fff;
  // background: url('../../../static//img/hotFruit/l1.jpg');
}
</style>
