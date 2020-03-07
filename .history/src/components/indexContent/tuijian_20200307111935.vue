<template>
  <div class="container">
    <img src="../../../static/img/tuijian.jpg" />
    <div class="tuijian">
      <div class="tuijian-in">
        <div class="tuijian-item" v-for="(item,index) in tuijianList" :key="index">
          <div class="pic" @click="getProDetail(item.id)">
            <img :src="item.thumb" />
          </div>
          <div class="title">
            <div class="big-title">
              {{ item.bigTitle1 }}
              {{ item.bigTitle2 }}
            </div>
            <div class="small-title">{{ item.littleTitle }}</div>
            <div class="price">
              <span>￥{{ item.price }}</span>
              <span>/{{ item.num }}个</span>
            </div>
            <div class="buy">立即购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      tuijianList: []
    }
  },
  mounted () {
    axios.post('/api/tuijian/heavyPro').then(res => {
      this.tuijianList = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ff741f;
  padding-bottom: 120px;
  // height: 100vh;
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
