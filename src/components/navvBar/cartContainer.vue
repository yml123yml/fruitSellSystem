<template>
  <div class="cartcontainer">
    <div style="height:40px;">
      <div class="header">
        <div class="title">
          <span>购物车</span>
          <span style="float:right;" @click="delCart()">删除</span>
        </div>
      </div>
    </div>
    <div class="cartList">
      <ul v-if="shopcartList.length > 0">
        <li v-for="(item, index) in shopcartList" :key="index">
          <van-checkbox
            :value="item.id"
            v-model="item.isChecked"
            checked-color="#15C481"
            @click="chooseChange(item.id, item)"
          ></van-checkbox>
          <div class="shopdetail">
            <div class="detailimg">
              <img :src="item.pic" />
            </div>
            <div class="detailtext">
              <div class="shoptitle">{{ item.title }}</div>
              <van-row>
                <van-col span="4">
                  <p class="shopprice">
                    <span>¥{{ item.price }}</span>
                  </p>
                </van-col>
                <van-col span="4">
                  <span class="oldprice">¥{{ item.oldPrice }}</span>
                </van-col>
                <van-col span="16">
                  <div class="shopnum">
                    <van-stepper
                      v-model="item.homeValue"
                      @change="onChange(item)"
                    />
                  </div>
                </van-col>
              </van-row>
            </div>
          </div>
        </li>
      </ul>
      <div class="nohaveshop" v-else>
        <van-icon name="shopping-cart-o" />
        <p class="p1">你的购物车空空如也~~</p>
        <p class="p2">快去采购吧!</p>
      </div>
    </div>
    <div>
      <div class="cartfotter" v-if="shopcartList.length > 0">
        <van-submit-bar button-text="去结算" @submit="onSubmit">
          <van-checkbox
            v-model="allchecked"
            checked-color="#15C481"
            @click="checkAll"
            >全选</van-checkbox
          >
          <div class="buyprice">
            <span class="p1">合计</span>
            <span class="p2">¥{{ totalprice }}</span>
          </div>
        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-duplicates
import { Toast } from 'vant'
// eslint-disable-next-line import/no-duplicates
import { Dialog } from 'vant'
export default {
  data () {
    return {
      result: [],
      shopcartList: [],
      allchecked: false,
      selectedData: [],
      // 总价
      totalprice: 0,
      totallvd: 0
    }
  },
  methods: {
    // 单选的change事件
    chooseChange (i, item) {
      if (this.selectedData.indexOf(i) > -1) {
        var arrs = this.selectedData.filter(function (item) {
          return item !== i
        })
        this.selectedData = arrs
        item.isChecked = false
        this.count()
      } else {
        this.selectedData.push(i)
        item.isChecked = true
        this.count()
      }
      if (this.selectedData.length < this.shopcartList.length) {
        this.allchecked = false
      } else {
        this.allchecked = true
      }
      this.count()
    },
    // 商品数量
    onChange (item) {
      this.count()
    },
    // 计算价格
    count: function () {
      var totalPrice = 0 // 临时总价
      this.shopcartList.forEach(function (val) {
        if (val.isChecked) {
          totalPrice += val.homeValue * val.price // 累计总价
          totalPrice = parseFloat(totalPrice.toFixed(2))
        }
      })
      this.totalprice = totalPrice
    },
    // 全选
    checkAll () {
      let list = this.shopcartList
      if (this.allchecked === true) {
        list.forEach(element => {
          element.isChecked = false
        })
        this.selectedData = []
        this.count()
      } else {
        list.forEach(element => {
          element.isChecked = true
          if (this.selectedData.indexOf(element.id) < 0) {
            this.selectedData.push(element.id)
          }
        })
        this.count()
      }
    },
    // 去结算
    onSubmit () {
      let userinfo = JSON.parse(localStorage.getItem('userinfo'))
      if (userinfo === null) {
        Toast('未登录无法购买商品,请去登录')
        setTimeout(function () {
          this.$router.push('myContainer')
        }.bind(this), 2000)
      } else {
        // 选择购买的商品
        var orderList = []
        this.shopcartList.forEach(function (item) {
          if (item.isChecked) {
            orderList.push({ id: item.id, num: item.homeValue, title: item.title, price: item.price, pic: item.pic })
            localStorage.setItem('orderList', JSON.stringify(orderList))
          }
        })
        if (orderList.length === 0) {
          Toast('请选择商品购买')
        } else {
          this.$router.push('PaymentToOrderContainer')
        }
      }
    },
    delCart () {
      let that = this
      Dialog.confirm({
        message: '您是否要删除已选中的商品'
      }).then(() => {
        let tempInfo = that.shopcartList
        let temp = []
        tempInfo.forEach(e => {
          if (!e.isChecked) {
            temp.push(e)
          }
        })
        that.shopcartList = temp
        localStorage.setItem('cartsInfo', JSON.stringify(that.shopcartList))
      }).catch(() => {
        // on cancel
      })
    }
  },
  created: function () {
    this.count()
  },
  mounted () {
    let cartsInfo = JSON.parse(localStorage.getItem('cartsInfo'))
    this.shopcartList = cartsInfo
  }
}
</script>
<style lang="scss">
.cartcontainer {
  background: #fff;
  min-height: 100vh;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: linear-gradient(90deg, #39da85, #01b27a);
  z-index: 1;
  .title {
    margin: 0 20px;
    font-size: 14px;
    color: #ffffff;
  }
}
.cartList {
  margin-top: 10px;
  padding-bottom: 130px;
  ul {
    li {
      width: 100%;
      height: 96px;
      display: flex;
      flex-direction: row;
      align-items: center;
      .van-checkbox {
        margin-left: 15px;
        padding-right: 15px;
      }
      .shopdetail {
        display: flex;
        flex-direction: row;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        .detailimg {
          width: 71px;
          height: 55px;
          margin-right: 5px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
        .detailtext {
          height: 60px;
          line-height: 25px;
          .shoptitle {
            margin-left: 8px;
            font-size: 12px;
          }
          .shopprice {
            margin: 0 8px;
            font-size: 12px;
            color: #15c481;
            font-weight: 600;
          }
          .oldprice {
            margin: 0 8px;
            font-size: 8px;
            color: #a5a5a5;
            text-decoration: line-through;
          }
          .shopnum {
            margin-left: 40px;
            .van-stepper {
              button {
                width: 15px;
                height: 15px;
                border: 1px solid rgba(0, 0, 0, 0.4);
                border-radius: 50px;
                background-color: #fff;
                margin: -12px 10px 0 10px;
              }
              .van-stepper__minus::before {
                width: 8px;
                color: rgba(0, 0, 0, 0.4);
              }
              .van-stepper__plus::before {
                color: rgba(0, 0, 0, 0.4);
                width: 8px;
              }
              .van-stepper__plus::after {
                color: rgba(0, 0, 0, 0.4);
                height: 8px;
              }
              .van-stepper__input {
                font-size: 12px;
                width: 30%;
                height: 22px;
                color: #333333;
                background-color: #fff;
                padding: 0px 12px;
              }
            }
          }
        }
      }
    }
  }
  .nohaveshop {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    .van-icon {
      font-size: 60px;
      color: #666;
    }
    p {
      font-size: 14px;
      color: #999;
    }
    .p1 {
      margin-top: 20px;
    }
  }
}
.cartfotter {
  .van-submit-bar {
    position: fixed;
    bottom: 49px;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: #fff;
  }
  .van-submit-bar__bar {
    height: 50px;
    font-size: 16px;
    .van-checkbox {
      margin-left: 17px;
      ::v-deep .van-checkbox__icon {
        height: 14px;
        line-height: 14px;
        .van-icon {
          width: 14px;
          height: 14px;
          font-size: 12px;
          border: 1px solid #a5a5a5;
        }
      }
      ::v-deep .van-checkbox__label {
        font-size: 16px;
        color: #212121;
        margin-left: 9px;
      }
    }
    .buyprice {
      height: 50px;
      flex: 1;
      padding-right: 8px;
      text-align: right;
      display: flex;
      flex-direction: column;
      .p1 {
        font-size: 10px;
        color: #001410;
      }
      .p2 {
        font-size: 12px;
        color: #15c481;
        margin-top: 4px;
      }
    }
    .van-button--danger {
      width: 80px;
      height: 40px;
      background: rgba(21, 196, 129, 0.8);
      border: none;
      font-size: 16px;
      color: #ffffff;
    }
  }
}
</style>
