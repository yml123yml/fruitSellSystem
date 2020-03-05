<template>
  <div class="goodDetail">
    <header-detail title="商品详情"></header-detail>
    <ul style="padding:60px 0;">
        <van-tabs :active=active>
            <van-tab>
                <div slot="title">商品</div>
                <div>
                    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
                        <van-swipe-item>
                            <img :src="goodInfo.proSwipeImg1" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img :src="goodInfo.proSwipeImg2" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img :src="goodInfo.proSwipeImg3" />
                        </van-swipe-item>
                        <van-swipe-item>
                            <img :src="goodInfo.proSwipeImg4" />
                        </van-swipe-item>
                    </van-swipe>
                    <div class="goodDetailTitle">
                        <h3>{{ goodInfo.proName }}</h3>
                        <h4>{{ goodInfo.proChar }}</h4>
                        <h5>￥{{ goodInfo.proPrice }}</h5>
                    </div>
                    <div class="purchaseNum">
                        <label>购买数量</label>
                        <van-stepper v-model="value" />
                    </div>
                </div>
            </van-tab>
            <van-tab>
                <div slot="title">详情</div>
                <div class="xiangqing">
                    <img :src="goodInfo.proDetailImg1" />
                    <img :src="goodInfo.proDetailImg2" />
                    <img :src="goodInfo.proDetailImg3" />
                    <img :src="goodInfo.proDetailImg4" />
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
  </div>

</template>

<script>
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'bannerDetail',
  data () {
    return {
      active: 0,
      goodInfo: {},
      value: 1
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      var currentId = parseInt(this.$route.query.id)
      console.log('我是id编号' + currentId)
      const url = `api/banner/allBanner?id=${currentId}`
      axios.post(url).then((res) => {
        console.log(res.data[currentId - 1])
        this.goodInfo = res.data[currentId - 1]
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
    height: 100vh;
    background: #fff;
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
    border-top: 1px solid #e9e7e7;
    border-bottom: 1px solid #e9e7e7;
    label {
        padding: 20px;
        display: inline-block;
        vertical-align: middle;
        font-size: 20px;
        width: 30%;
    }
    .van-stepper {
        padding: 20px;
        display: flex;
        margin-top: -10px;
        width: 50%;
        float: right;
    }
}
.xiangqing {
    img {
        width: 100%;
    }
}
</style>
