<template>
  <div class="goodDetail">
    <header-detail title="商品详情"></header-detail>
    <ul style="margin-top:60px;">
      <van-tabs :active="active">
        <van-tab>
          <div slot="title">商品</div>
          <div>
            <van-swipe
              class="my-swipe"
              :autoplay="2000"
              indicator-color="white"
            >
              <van-swipe-item>
                <img :src="goodInfo.proSwipeImg1" />
              </van-swipe-item>
              <van-swipe-item>
                <img :src="goodInfo.proSwipeImg2" />
              </van-swipe-item>
              <van-swipe-item>
                <img :src="goodInfo.proSwipeImg3" />
              </van-swipe-item>
            </van-swipe>
            <div class="goodDetailTitle">
              <h3>{{ goodInfo.title }}</h3>
              <h4>{{ goodInfo.desc }}</h4>
              <h5>￥{{ goodInfo.price }}</h5>
            </div>
            <div class="purchaseNum">
              <label>购买数量</label>
              <van-stepper v-model="goodInfo.homeValue" />
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">详情</div>
          <div class="xiangqing">
            <img :src="goodInfo.proDetailImg1" />
            <img :src="goodInfo.proDetailImg2" />
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">评论</div>
          <div>
            评论内容
          </div>
        </van-tab>
      </van-tabs>
    </ul>
    <van-goods-action>
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :info="cartLen"
        @click="goCarShop"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="handleToCart"      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="goPayGoods(goodInfo)"
      />
    </van-goods-action>
  </div>
</template>

<script>
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'shopDetail',
  data () {
    return {
      active: 0,
      goodInfo: {},
      proattrs: [],
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
      const url = `api/category/allFruit?id=${currentId}`
      axios.post(url).then(res => {
        this.goodInfo = res.data[currentId - 1]
      })
    },
    goCarShop () {
      this.$router.push({path: 'cartContainer'})
    },
    addGoodsCar (goodInfo) {
      return this.cartLen++
    },
    handleToCart () {
      var cartPros = localStorage.getItem('cartPros')
      var cartId = localStorage.getItem('cartId')
      if (!cartId) {
        cartId = '0'
      }
      cartPros = JSON.parse(cartPros)
      var pro = {id: this.goodInfo.id, pic: this.goodInfo.pic, title: this.goodInfo.title, desc: this.goodInfo.desc}
      pro.choose = []

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
