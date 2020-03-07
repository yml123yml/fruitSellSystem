<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
    <ul style="margin-top:60px;">
      <li>
        <img :src="list.pic2"/>
        <div>{{ list.title2 }}</div>
        <div>{{ list.desc2 }}</div>
        <van-tag mark type="success">{{ list.tip2 }}</van-tag>
        <div>{{ list.price2 }}</div>
        <div>{{ list.num2 }}</div>
        <img :src="list.pic1"/>
        <div>{{ list.title1 }}</div>
        <div>{{ list.desc1 }}</div>
        <van-tag mark type="success">{{ list.tip1 }}</van-tag>
        <div>{{ list.price1 }}</div>
        <div>{{ list.num1}}</div>
        <img :src="list.pic3"/>
        <div>{{ list.title3 }}</div>
        <div>{{ list.desc3 }}</div>
        <van-tag mark type="success">{{ list.tip3 }}</van-tag>
        <div>{{ list.price3 }}</div>
        <div>{{ list.num3 }}</div>
        <img :src="list.pic4"/>
        <div>{{ list.title4 }}</div>
        <div>{{ list.desc4 }}</div>
        <van-tag mark type="success">{{ list.tip4 }}</van-tag>
        <div>{{ list.price4 }}</div>
        <div>{{ list.num4 }}</div>
        <img :src="list.pic5"/>
        <div>{{ list.title5 }}</div>
        <div>{{ list.desc5 }}</div>
        <van-tag mark type="success">{{ list.tip5 }}</van-tag>
        <div>{{ list.price5 }}</div>
        <div>{{ list.num5 }}</div>
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
      list: {}
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
        console.log(res.data)
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
}
</style>
