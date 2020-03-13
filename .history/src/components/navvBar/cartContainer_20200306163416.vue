<template>
  <div class="container">
    <div style="height:38px;">
      <div class="header">
        <div class="title">购物车</div>
      </div>
    </div>
    <div class="cartList">
      <ul v-if="goods.length > 0">
        <li v-for="(item, index) in goods" :key="index">
          <van-checkbox
            :value="item.id"
            v-model="item.isChecked"
            checked-color="#15C481"
            @click="chooseChange(item.id, item)"
          ></van-checkbox>
          <div class="shopdetail">
            <div class="detailimg">
              <img :src="item.thumb" />
            </div>
            <div class="detailtext">
              <div class="shoptitle">{{ item.title }}</div>
              <van-row>
                <van-col span="4">
                  <p class="shopprice">
                    <span>¥{{ item.price}}</span>
                  </p>
                </van-col>
                <van-col span="4">
                  <span class="oldprice">¥{{ item.oldprice}}</span>
                </van-col>
                <van-col span="16">
                  <div class="shopnum">
                    <van-stepper v-model="item.num" @change="onChange(item)" />
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
      <div class="cartfotter" v-if="goods.length > 0">
        <van-submit-bar button-text="去结算" @submit="onSubmit">
          <van-checkbox v-model="allchecked" checked-color="#15C481" @click="checkAll">全选</van-checkbox>
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
export default {
  data () {
    return {
      result: [],
      goods: [
        {
          id: 1,
          title: 'A级-广东四会砂糖橘 2斤装',
          price: 980,
          oldprice: 1400,
          num: 1,
          thumb: '../../../static/img/jinkoufruit-01.jpg'
        },
        {
          id: 2,
          title: 'A级-智利JJ级车厘子（28mm-30mm） 250g',
          price: 1200,
          oldprice: 1400,
          lvd: 0,
          num: 1,
          thumb: '../../../static/img/jinkoufruit-02.jpg'
        },
        {
          id: 3,
          title: 'A级-海南陵水圣女果 480g',
          price: 1000,
          oldprice: 1400,
          num: 1,
          thumb: '../../../static/img/jinkoufruit-03.jpg'
        }
      ],
      allchecked: false,
      selectedData: [],
      // 总价
      totalprice: 0,
      totallvd: 0
    }
  },
  methods: {
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose ({ position, instance }) {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          instance.close()
          break
        case 'right':
          this.$dialog
            .confirm({
              message: '确定删除吗？'
            })
            .then(() => {
              instance.close()
            })
          break
      }
    },
    // 单选的change事件
    chooseChange (i, item) {
      this.$toast(i)
      if (this.selectedData.indexOf(i) > -1) {
        console.log(i)
        var arrs = this.selectedData.filter(function (item) {
          return item !== i
        })
        this.selectedData = arrs
        item.isChecked = false
        // this.remove(this.selectedData, i);
        this.count()
        console.log(this.selectedData)
      } else {
        this.selectedData.push(i)
        item.isChecked = true
        this.count()
      }
      if (this.selectedData.length < this.goods.length) {
        this.allchecked = false
      } else {
        this.allchecked = true
      }
      this.count()
      console.log(this.selectedData)
    },
    // 商品数量
    onChange (item) {
      this.$toast(item.num)
      this.count()
      console.log(this.goods)
    },
    // 计算价格
    count: function () {
      var totalPrice = 0 // 临时总价
      this.goods.forEach(function (val) {
        if (val.isChecked) {
          totalPrice += val.num * val.price // 累计总价
        }
      })
      this.totalprice = totalPrice
    },
    // 全选
    checkAll () {
      let list = this.goods
      if (this.allchecked === true) {
        list.forEach(element => {
          element.isChecked = false
        })
        this.selectedData = []
        this.count()
        console.log('111' + this.selectedData)
      } else {
        list.forEach(element => {
          element.isChecked = true
          if (this.selectedData.indexOf(element.id) < 0) {
            this.selectedData.push(element.id)
          }
        })
        this.count()
        console.log('222' + this.selectedData)
      }
    },
    // 去结算
    onSubmit () {
      // 选择购买的商品
      var cartgoods = []
      this.goods.forEach(function (item) {
        if (item.isChecked) {
          cartgoods.push({ id: item.id, num: item.num })
        }
      })
      if (cartgoods.length === 0) {
        this.$toast('请选择商品购买')
      } else {
        this.$router.push('PaymentToOrderContainer')
      }
      console.log(cartgoods)
    }
  },
  created: function () {
    this.count()
  }
}
</script>
<style lang="scss">
.container {
  background: #fff;
  height: 100vh;
}
.header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 38px;
  background: linear-gradient(90deg, #39da85, #01b27a);
  display: flex;
  .title {
    margin: 0 20px;
    font-size: 12px;
  }
}
.cartList {
  margin-top: 10px;
  ul {
    li {
      width: 100%;
      height: 96px;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: -5px;

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
            margin-left: 8px;
            font-size: 12px;
            color: #15c481;
            font-weight: 600;
          }
          .oldprice {
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
    bottom: 51px;
    left: 0;
    z-index: 100;
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
