<template>
  <div class="container">
    <van-notice-bar text="欢迎来到果多多app,这里是你喜欢的水果,欢迎选购。" left-icon="volume-o" />
    <div class="product-list">
      <div class="product-list-in">
        <div class="proitem" v-for="(item,index) in proList" :key="index">
          <div class="pic">
            <img :src="item.picture" />
            <div class="saletip">
              <span>{{ item.saletip }}</span>
            </div>
            <div class="info">
              <p class="name">
                <a href="javascript:;">{{ item.name }}</a>
              </p>
              <div class="price">
                <strong>{{ item.price }}</strong>
                <i class="iconfont">&#xe620;</i>
              </div>
            </div>
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
      proList: []
    }
  },
  mounted () {
    axios.post('/api/tuijian/selectPro').then(res => {
      this.proList = res.data
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #fff;
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
        border-radius: 3px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        margin: 10px 10px 10px 0;
        .pic {
          position: relative;
          img {
            width: 125px;
            height: 125px;
          }
          .saletip {
            position: absolute;
            bottom: 170px;
            right: -20px;
            span {
              border: none;
              height: 8px;
              background: #fb3d3d;
              color: #fff;
              border-radius: 2rem 3.31rem 3.31rem 0;
              padding: 2px;
              font-size: 8px;
              line-height: 8px;
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
                margin-left: 5px;
                color: red;
              }
              i {
                border-radius: 50%;
                padding: 5px;
                background: #01b27a;
                color: #fff;
                font-size: 11px;
                margin-left: 50px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
