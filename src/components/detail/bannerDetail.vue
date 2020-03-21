<template>
  <div class="goodDetail">
    <header-detail title="商品详情"></header-detail>
    <ul style="padding-top:60px;">
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
                <img :src="goodsInfo.proSwipeImg1" />
              </van-swipe-item>
              <van-swipe-item>
                <img :src="goodsInfo.proSwipeImg2" />
              </van-swipe-item>
              <van-swipe-item>
                <img :src="goodsInfo.proSwipeImg3" />
              </van-swipe-item>
              <van-swipe-item>
                <img :src="goodsInfo.proSwipeImg4" />
              </van-swipe-item>
            </van-swipe>
            <div class="goodDetailTitle">
              <h3>{{ goodsInfo.title }}</h3>
              <h4>{{ goodsInfo.description }}</h4>
              <h5>￥{{ goodsInfo.price }}</h5>
            </div>
            <div class="purchaseNum">
              <label>购买数量</label>
              <van-stepper v-model="homeValue" />
            </div>
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">详情</div>
          <div class="xiangqing">
            <img :src="goodsInfo.proDetailImg1" />
            <img :src="goodsInfo.proDetailImg2" />
          </div>
        </van-tab>
        <van-tab>
          <div slot="title">评论</div>
          <div>
            暂无评论
          </div>
        </van-tab>
      </van-tabs>
    </ul>
    <van-goods-action>
      <van-goods-action-icon icon="cart-o" text="购物车" @click="goCarShop" />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addGoodsCar()"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="goPayGoods(goodsInfo)"
      />
    </van-goods-action>
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'bannerDetail',
  data () {
    return {
      active: 0,
      goodsInfo: {},
      value: 1,
      count: 1,
      homeValue: 1,
      cartNumber: 0
    }
  },
  methods: {
    goCarShop () {
      this.$router.push({ path: 'cartContainer' })
    },
    addGoodsCar () {
      this.goodsInfo.homeValue = this.homeValue
      let cartsInfo = []
      if (localStorage.getItem('cartsInfo')) {
        let tempInfo = JSON.parse(localStorage.getItem('cartsInfo'))
        tempInfo.push(this.goodsInfo)
        localStorage.setItem('cartsInfo', JSON.stringify(tempInfo))
      } else {
        cartsInfo.push(this.goodsInfo)
        localStorage.setItem('cartsInfo', JSON.stringify(cartsInfo))
      }
      Toast('加入购物车成功')
    }
  },
  mounted () {
    let goodsInfo2 = JSON.parse(localStorage.getItem('goodsInfo'))
    axios
      .post('api/banner/queryBannerDetail?', { id: goodsInfo2.id })
      .then(res => {
        this.goodsInfo = res.data[0]
      })
  },
  components: {
    headerDetail
  }
}
</script>

<style lang="scss" scoped>
.goodDetail {
  min-height: 100vh;
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
/deep/ .van-swipe {
  height: 300px;
  transform: translateZ(0);
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
