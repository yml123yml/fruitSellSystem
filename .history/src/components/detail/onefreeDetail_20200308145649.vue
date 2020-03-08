<template>
  <div class="goodDetail">
    <header-detail title="买一赠一"></header-detail>
    <ul style="margin-top:60px;">
      <li v-for="item in list" :key="item.id">
        <div class="picture">
          <img :src="item.pic" />
        </div>
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <div class="tip">{{ item.tip }}</div>
          <p class="price">
            <span class="priceRed">￥{{ item.price }}</span>
            <span class="standard">{{ item.num }}kg/箱</span>
          </p>
          <p class="car">加入购物车</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'onefreeDetail',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('/api/category/twoFruit').then(res => {
      this.list = res.data
    })
  },
  components: {
    headerDetail
  }
}
</script>

<style lang="scss" scoped>
.goodDetail {
  ul {
    li {
      border-bottom: 1px solid #ccc;
      display: flex;
      padding: 20px 5px;
      .picture {
        width: 104px;
        height: 104px;
        img {
          width: 104px;
          height: 104px;
        }
      }
      .info {
        margin-left: 10px;
        .title {
          font-size: 1rem;
        }
        .desc {
          font-size: 0.5rem;
          color: #808080;
          padding: 0.3rem 0 0.3rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .tip {
          font-size: 0.46rem;
          line-height: 0.86rem;
          padding: 0.2rem 0.3rem;
          border: 1px solid #11b57c;
          border-radius: 0.4rem;
          font-style: normal;
          color: #11b57c;
          background: #fff;
          width: fit-content;
          box-sizing: border-box;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          position: relative;
          height: 1rem;
          padding-top: 0.7rem;
          z-index: 10;
          .priceRed {
            font-size: 1.1rem;
            color: #fd3d3d;
            padding-right: 0.45rem;
            line-height: 1.1rem;
          }
          .standard {
            font-size: 0.8rem;
            color: #808080;
            line-height: 0.8rem;
            padding-right: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
