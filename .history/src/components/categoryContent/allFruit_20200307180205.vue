<template>
  <div class="goodDetail">
    <ul style="margin-top:20px;">
      <li v-for="item in list" :key="item.id" @click="getProDetail(item.id)">
        <img :src="item.pic" />
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.desc }}</div>
          <p class="price">
            <span class="priceRed">￥{{ item.price }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'allFruit',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('/api/category/allFruit').then(res => {
      this.list = res.data
    })
  },
  methods: {
    getProDetail (proId) {
      this.$router.push({path: 'shopDetail', query: {id: proId}})
    }
  }
}
</script>

<style lang="scss" scoped>
.goodDetail {
  ul {
    li {
      border-bottom: 1px solid rgba($color: #ccc, $alpha: 0.5);
      display: flex;
      padding: 10px 5px;
      img {
        width: 80px;
        height: 80px;
        border: 1px solid red;
        border-radius: 50%;
      }
      .info {
        margin-left: 10px;
        .title {
          font-size: 1rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .desc {
          font-size: 0.5rem;
          color: #808080;
          padding: 0.2rem 0 0.2rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .price {
          position: relative;
          height: 1rem;
          padding-top: 0.4rem;
          z-index: 10;
          .priceRed {
            font-size: 1rem;
            color: #fd3d3d;
            padding-right: 0.45rem;
            line-height: 1.1rem;
          }
        }
      }
    }
  }
}
</style>
