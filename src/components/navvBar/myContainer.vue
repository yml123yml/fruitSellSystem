<template>
  <div class="my">
    <div class="header2">
      <van-cell @click="showPopup"><i class="iconfont">&#xe615;</i></van-cell>
    <van-popup v-model="show" position="right" :style="{height:'100%'}">
      <ul>
        <li>
          <i style="height:20px;width:20px;background:#FEDD52;border-radius:50%;padding:5px;" class="iconfont">&#xe622;</i>
          <span>
            个人资料
          </span>
        </li>
          <li @click="quit()">
            <i style="height:20px;width:20px;background:#FEDD52;border-radius:50%;padding:5px;" class="iconfont">&#xe603;</i>
            <span>
              退出登录
            </span>
          </li>
      </ul>
    </van-popup>
      <img class="avator" src="../../../static/img/avator.jpg" />
      <div>
        <p class="aname">{{ name }}</p>
        <router-link to="/login">
          <p class="aname" v-if="!name">未登录</p>
        </router-link>
      </div>
    </div>
    <div class="my_order">
      <div class="title">我的订单</div>
      <ul>
        <li>
          <i class="iconfont">&#xe642;</i>
          <span>待付款</span>
        </li>
        <li>
          <i style="font-weight:600;" class="iconfont">&#xe61b;</i>
          <span>待配送</span>
        </li>
        <li>
          <i style="font-weight:600;" class="iconfont">&#xe6ca;</i>
          <span>待收货</span>
        </li>
        <li>
          <i style="font-weight:600;" class="iconfont">&#xe654;</i>
          <span>待评价</span>
        </li>
      </ul>
    </div>
    <div class="order_list">
      <ul>
        <router-link to="/address">
          <li>
            <i class="iconfont">&#xe622;</i>
            <span>
              收货地址
              <i class="iconfont">&#xe6e0;</i>
            </span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      name: ''
    }
  },
  methods: {
    showPopup () {
      this.show = true
    },
    quit () {
      localStorage.removeItem('userinfo')
      this.$router.push({path: '/login'})
    }
  },
  mounted () {
    let userinfo = JSON.parse(localStorage.getItem('userinfo'))
    this.name = userinfo.userName
  }
}
</script>

<style lang="scss" scope>
.my {
  background: #fff;
  min-height: 100vh;
  .header2 {
    position: relative;
    width: 100%;
    height: 160px;
    background: url("../../../static/img/bgimg.jpg");
    .van-cell {
      background: none;
      border-bottom: 1px solid #FFF;
      padding-bottom: 125px;
      width: 100%;
      i {
        float: right;
        font-size: 20px;
        color: #FFf;
      }
    }
    .van-popup {
      width: 50%;
      padding: 10px 10px;
      line-height: 40px;
      i {
        color: #fff;
        margin-right: 10px;
      }
    }
    .avator {
      position: absolute;
      top: 40px;
      left: 40px;
      line-height: 40px;
      height: 78px;
      width: 78px;
      border-radius: 50%;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .aname {
      position: absolute;
      font-size: 28px;
      color: #ffffff;
      top: 70px;
      left: 140px;
    }
  }
  .my_order {
    width: 92%;
    margin: 10px 15px;
    padding-bottom: 20px;
    background: #fafafa;
    border-radius: 12px;
    box-shadow: 0 0px 8px #ebedf0;
    .title {
      font-weight: 700;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #f5f5f5;
      padding-left: 20px;
    }
    ul {
      display: flex;
      flex-direction: row;
      li {
        height: 60px;
        padding: 14px 22px;
        font-size: 14px;
        text-align: center;
        display: flex;
        flex-direction: column;
        i {
          color: #38a56b;
          font-size: 20px;
          margin-bottom: 10px;
        }
      }
    }
  }
  .order_list {
    margin: 10px 15px;
    ul {
      display: flex;
      flex-direction: column;
      padding: 25px 10px;
      li {
        height: 40px;
        line-height: 40px;
        span {
          margin-left: 10px;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          width: 294px;
          font-size: 16px;
          border-bottom: 1px solid #f5f5f5;
          i {
            float: right;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
