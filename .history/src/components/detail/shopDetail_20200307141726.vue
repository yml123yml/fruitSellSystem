<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
    <ul style="margin-top:60px;">

    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'tuijianDetail',
  data () {
    return {
      active: 0,
      goodInfo: {},
      value: 1,
      cartLen: 0
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
        console.log('我是log')
        console.log(res.data)
        this.goodInfo = res.data[currentId - 1]
        console.log(this.goodInfo)
      })
    },
    goCarShop () {
      this.$router.push({path: 'cartContainer'})
    },
    addGoodsCar (goodInfo) {
      return this.cartLen++
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
/deep/ .van-tabs--line .van-tabs__wrap {
  position: fixed;
  z-index: 88;
  width: 100%;
}
.van-tab__pane {
  padding-top: 50px;
}
.van-swipe {
  height: 300px;
  .van-swipe-item {
    text-align: center;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.goodDetailTitle {
  text-align: center;
  h3 {
    padding: 10px 0;
    font-size: 20px;
    color: #3a3a3a;
  }
  h4 {
    font-size: 16px;
    color: #878787;
  }
  h5 {
    padding: 10px 0;
    font-size: 30px;
    color: #ff660a;
  }
}

.purchaseNum {
  background: none;
  border-top: 1px solid #e9e7e7;
  border-bottom: 1px solid #e9e7e7;
  label {
    padding: 15px;
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    width: 30%;
  }
  .van-stepper {
    padding: 5px 0;
    display: flex;
    width: 60%;
    float: right;
    margin-right: 20px;
  }
  /deep/ .van-stepper__minus,
  /deep/ .van-stepper__plus {
    margin: 0 5px;
    height: 40px;
    width: 80px;
  }
}
.xiangqing {
  img {
    width: 100%;
  }
}
.van-goods-action {
  height: 60px;
}
</style>
