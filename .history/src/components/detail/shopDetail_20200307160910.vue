<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
    <ul style="margin-top:60px;">
      <li v-for="item in list" :key="item.id">
        <div class="picture">
          <img :src="item.pic" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
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
      padding: 20px 5px;
      .picture {
        width: 104px;
        height: 104px;
        img {
          width: 104px;
        height: 104px;
        }
      }
      .info {
        margin-left: 10px;
        .title {
          font-size: 15px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
