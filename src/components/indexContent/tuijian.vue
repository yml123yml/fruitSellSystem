<template>
  <div class="tuijian1">
    <img src="../../../static/img/tuijian.jpg" />
    <div class="tuijian">
      <div class="tuijian-in">
        <div class="tuijian-item" v-for="(item,index) in tuijianList" :key="index">
          <div class="pic">
            <img :src="item.pic" />
          </div>
          <div class="title">
            <div class="big-title">
              {{ item.title }}
              {{ item.bigTitle2 }}
            </div>
            <div class="small-title">{{ item.littleTitle }}</div>
            <div class="price">
              <span>￥{{ item.price }}</span>
              <span>/{{ item.num }}个</span>
            </div>
            <div class="buy" @click="addGoodsCar(item.id)">加入购物车</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'
export default {
  data () {
    return {
      tuijianList: [],
      homeValue: 1
    }
  },
  mounted () {
    axios.post('/api/tuijian/heavyPro').then(res => {
      this.tuijianList = res.data
    })
  },
  methods: {
    addGoodsCar (id) {
      this.tuijianList[id - 1].homeValue = this.homeValue
      let cartsInfo = []
      if (localStorage.getItem('cartsInfo')) {
        let tempInfo = JSON.parse(localStorage.getItem('cartsInfo'))
        tempInfo.push(this.tuijianList[id - 1])
        localStorage.setItem('cartsInfo', JSON.stringify(tempInfo))
      } else {
        cartsInfo.push(this.tuijianList[id - 1])
        localStorage.setItem('cartsInfo', JSON.stringify(cartsInfo))
      }
      Toast('加入购物车成功')
    }
  }
}
</script>

<style lang="scss" scoped>
.tuijian1 {
  background: #ff741f;
  padding-bottom: 100px;
  img {
    width: 100%;
    height: 50px;
  }
  .tuijian {
    padding: 0 15px;
    .tuijian-in {
      .tuijian-item {
        margin-bottom: 10px;
        display: flex;
        flex-direction: row;
        background: #fff;
        border-radius: 13px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        .pic {
          margin-left: 12px;
          img {
            width: 120px;
            height: 150px;
          }
        }
        .title {
          .big-title {
            white-space: pre-line;
            font-weight: 700;
            line-height: 25px;
          }
          .small-title {
            font-size: 14px;
            line-height: 30px;
          }
          .price {
            margin: 10px 0;
            span:nth-child(1) {
              color: red;
              font-size: 24px;
            }
            span:nth-child(2) {
              font-size: 12px;
            }
          }
          .buy {
            margin-bottom: 20px;
            background: #ff741f;
            text-align: center;
            width: 150px;
            height: 26px;
            line-height: 26px;
            color: #fff;
            border-radius: 15px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
