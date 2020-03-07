<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
    <ul style="margin-top:60px;">
      <li v-for="item in list" :key="item.id">
        <div class="picture">
          <img :src="item.pic" />
        </div>
        <div class="info">
          <div>{{ item.title }}</div>
          <div>{{ item.desc }}</div>
          <div>{{ item.tip }}</div>
          <div>{{ item.price }}</div>
          <div>{{ item.num }}</div>
        </div>
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
  // background: url('../../../static//img/hotFruit/l1.jpg');
  ul {
    li {
      border-bottom: 1px solid #ccc;
      display: flex;
      .picture {
        width: 250px;
        height: 150px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
