<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
    <ul style="margin-top:60px;">
      <li v-for="item in list" :key="item">
        <img :src="list.pic"/>
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
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      var currentId = parseInt(this.$route.query.id)
      const url = `api/category/hotFruitList?hotid=${currentId}`
      axios.post(url).then(res => {
        this.list = res.data[currentId - 1]
      })
    }
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
  // background: url('../../../static//img/hotFruit/l1sw1.jpg')
}
</style>
