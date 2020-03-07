<template>
  <div class="goodDetail">
    <header-detail title="新鲜水果"></header-detail>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import headerDetail from '../../common/header'
export default {
  name: 'shopDetail',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('/api/category/hotFruitList').then(res => {
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
  // background: url('../../../static//img/hotFruit/l1.jpg');
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
        }
        .tip {
          font-size: 0.36rem;
          line-height: 0.36rem;
          margin-bottom: 0.15rem;
          padding: 0.13rem 0.2rem 0.11rem;
          margin-right: 0.2rem;
          border: 1px solid #11b57c;
          border-radius: 0.12rem 0 0.12rem 0;
          font-style: normal;
          color: #11b57c;
          background: #fff;
          max-width: 100%;
          box-sizing: border-box;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          position: relative;
          height: 0.8rem;
          padding-top: 0.3rem;
          z-index: 10;
          .priceRed {
            font-size: 0.46rem;
            color: #fd3d3d;
            padding-right: 0.45rem;
            line-height: 0.8rem;
          }
          .standard {
            font-size: 0.34rem;
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
