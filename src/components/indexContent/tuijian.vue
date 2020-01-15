<template>
  <div class="container">
    <img src="../../../static/img/tuijian.jpg" />
    <div class="tuijian">
      <div class="tuijian-in">
        <div class="tuijian-item" v-for="(item,index) in tuijianList" :key="index">
          <div class="pic">
            <img :src="item.thumb" />
          </div>
          <div class="title">
            <div class="big-title">{{ item.bigTitle }}</div>
            <div class="small-title">{{ item.littleTitle }}</div>
            <div class="price">
              <span>{{ item.price }}</span>
              <span>{{ item.num }}</span>
            </div>
            <div class="buy">立即购买</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tuijianList: [
        {
          id: 1,
          thumb: '../../../static/img/tuijian1.jpg',
          bigTitle: '天山雪水灌溉\n果肉细腻松脆',
          littleTitle: '农夫山泉17.5°阿克苏苹果礼盒装',
          price: '￥98.0',
          num: '/14个'
        },
        {
          id: 2,
          thumb: '../../../static/img/tuijian2.jpg',
          bigTitle: '天山雪水灌溉\n果肉细腻松脆',
          littleTitle: '农夫山泉17.5°阿克苏苹果礼盒装',
          price: '￥98.0',
          num: '/14个'
        },
        {
          id: 3,
          thumb: '../../../static/img/tuijian3.jpg',
          bigTitle: '天山雪水灌溉\n果肉细腻松脆',
          littleTitle: '农夫山泉17.5°阿克苏苹果礼盒装',
          price: '￥98.0',
          num: '/14个'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  background: #ff741f;
  height: 95vh;
  img {
    height: 50px;
    width: 375px;
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
            height: 140px;
          }
        }
        .title {
          margin: 10px 5px;
          .big-title {
            white-space: pre-line;
            font-weight: 700;
          }
          .small-title {
            font-size: 14px;
            line-height: 30px;
          }
          .price {
            margin-top: 10px;
            span:nth-child(1) {
              color: red;
              font-size: 24px;
            }
            span:nth-child(2) {
              font-size: 12px;
            }
          }
          .buy {
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
