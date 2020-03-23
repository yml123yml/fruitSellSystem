<template>
  <div style="margin-bottom: 100px;">
    <header-detail title="结算"></header-detail>
    <div class="orderDetails">
      <div class="currentAddressList">
        <p>
          <span class="name">收货人：{{ list2.name }}</span>
          <span class="tel">电话：{{ list2.tel }}</span>
        </p>
        <p>
          收货地址：<span class="addressDetail">
            {{ list2.province }}
            {{ list2.city }}
            {{ list2.county }}
            {{ list2.addressDetail }}
          </span>
        </p>
      </div>
      <p style="background:#f4f4f4;height:20px"></p>
      <div class="ordersList">
        <h4>商品清单</h4>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <van-card
              :num="item.num"
              :price="item.price"
              :title="item.title"
              :thumb="item.pic"
            />
          </li>
        </ul>
      </div>

      <van-submit-bar button-text="提交订单" @submit="paySuccess"/>
    </div>
  </div>
</template>

<script>
import headerDetail from '../../common/header'
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      list2: []
    }
  },
  components: {
    headerDetail
  },
  methods: {
    paySuccess () {
      axios.post('api/orderList/add', {
        pic: this.list.pic,
        title: this.list.title,
        name: this.list2.name,
        tel: this.list2.tel,
        province: this.list2.province,
        city: this.list2.city,
        county: this.list2.county,
        addressDetail: this.list2.addressDetail
      }).then(res => {
        console.log(res)
      })
      alert('提交成功')
    }
  },
  mounted () {
    let orderList = localStorage.getItem('orderList')
    this.list = JSON.parse(orderList)
    let currentAddressList = localStorage.getItem('defaultAddress')
    this.list2 = JSON.parse(currentAddressList)
  }
}
</script>

<style lang="scss" scoped>
.orderDetails {
  margin-top: 60px;
  .currentAddressList {
    padding: 1rem 1.5rem 0 1.5rem;
    p {
      color: #000;
      .tel {
        float: right;
      }
    }
  }
  .ordersList {
    h4 {
      border-bottom: 1px solid #eaeaea;
      font-size: 14px;
      padding: 0.5rem;
    }
    ul {
      padding: 10px 0;
      li {
        margin: 5px 10px;
        height: 75px;
        .van-card {
          height: 75px;
          background: none;
          border: 1px solid #f5f5e6;
          /deep/ .van-card__thumb img {
            border-radius: 50%;
            height: 50px;
            width: 50px;
          }
          /deep/ .van-card__title {
            margin-left: -20px;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 16px;
            margin-top: 5px;
          }
          /deep/ .van-card__bottom {
            height: 20px;
            margin-left: -17px;
            margin-bottom: 30px;
          }
          /deep/ .van-card__num {
            height: 20px;
            margin-right: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }
}
</style>
