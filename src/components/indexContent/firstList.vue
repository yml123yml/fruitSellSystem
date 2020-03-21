<template>
  <div class="first">
    <van-notice-bar text="欢迎来到果多多app,这里有你喜欢的水果,欢迎选购。" left-icon="volume-o" />
    <div class="product-list">
      <div class="product-list-in">
        <div class="proitem" v-for="(item,index) in proList" :key="index">
          <div class="pic">
            <img :src="item.pic" />
            <div class="saletip">
              <span>{{ item.saletip }}</span>
            </div>
            <div class="info">
              <p class="name">
                <a href="javascript:;">{{ item.title }}</a>
              </p>
              <div class="price">
                <strong>￥{{ item.price }}</strong>
                <van-icon @click="addGoodsCar(item.id)" name="shopping-cart-o" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import axios from 'axios'
export default {
  data () {
    return {
      proList: [],
      homeValue: 1
    }
  },
  mounted () {
    axios.post('/api/tuijian/selectPro').then(res => {
      this.proList = res.data
    })
  },
  methods: {
    addGoodsCar (id) {
      this.proList[id - 1].homeValue = this.homeValue
      let cartsInfo = []
      if (localStorage.getItem('cartsInfo')) {
        let tempInfo = JSON.parse(localStorage.getItem('cartsInfo'))
        tempInfo.push(this.proList[id - 1])
        localStorage.setItem('cartsInfo', JSON.stringify(tempInfo))
      } else {
        cartsInfo.push(this.proList[id - 1])
        localStorage.setItem('cartsInfo', JSON.stringify(cartsInfo))
      }
      Toast('加入购物车成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.first {
  .van-notice-bar {
    margin-top: -15px;
    background: #fff;
  }
  .product-list {
    padding: 0 20px;
    .product-list-in {
      display: flex;
      flex-direction: row;
      overflow-x: scroll;
      overflow-y: hidden;
      width: 100%;
      .proitem {
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        margin: 10px 10px 10px 3px;
        .pic {
          position: relative;
          img {
            width: 120px;
            height: 120px;
          }
          .saletip {
            position: absolute;
            bottom: 170px;
            right: -20px;
            z-index: 1;
            span {
              border: none;
              height: 10px;
              background: #fb3d3d;
              color: #fff;
              border-radius: 2rem 3.31rem 3.31rem 0;
              padding: 4px;
              font-size: .1rem;
              line-height: 10px;
            }
          }
          .info {
            padding-bottom: 10px;
            .name {
              text-align: center;
            }
            .price {
              font-size: 12px;
              strong {
                margin-left: 20px;
                color: red;
              }
              .van-icon {
                float: right;
                padding-right: 10px;
                margin-top: -5px;
                font-size: 22px;
                color: green;
              }
            }
          }
        }
      }
    }
  }
}
</style>
