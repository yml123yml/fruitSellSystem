<template>
  <div>
    <ul style="margin-top:20px;">
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="getProDetail(item)"
      >
        <img :src="item.pic" />
        <div class="info">
          <div class="title">{{ item.title }}</div>
          <div class="desc">{{ item.description }}</div>
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
  name: 'apple',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    axios.post('/api/category/apple').then(res => {
      this.list = res.data
    })
  },
  methods: {
    getProDetail (item) {
      localStorage.setItem('goodsInfo', JSON.stringify(item))
      this.$router.push({ path: 'shopDetail' })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  li {
    border-bottom: 1px solid rgba($color: #ccc, $alpha: 0.2);
    display: flex;
    padding: 10px 5px;
    img {
      margin: 0 10px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }
    .info {
      width: 170px;
      margin-left: 10px;
      .title {
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        font-size: 0.5rem;
        color: #808080;
        padding: 0.2rem 0 0.2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
  li:last-child {
    border: none;
  }
}
</style>
