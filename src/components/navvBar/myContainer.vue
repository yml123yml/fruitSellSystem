<template>
  <div class="container">
    <div class="header2">
      <img class="avator" src="../../../static/img/category2.png" />
    </div>
    <div class="my_order">
      <div class="title">
        我的订单
      </div>
      <ul>
        <li>
          <i class="iconfont">&#xe61a;</i>
          <span>待付款</span>
        </li>
        <li>
          <i class="iconfont">&#xe602;</i>
          <span>待配送</span>
        </li>
        <li>
          <i class="iconfont">&#xe601;</i>
          <span>待收货</span>
        </li>
        <li>
          <i class="iconfont">&#xe62d;</i>
          <span>待评价</span>
        </li>
      </ul>
    </div>
    <div class="order_list">
      <ul>
        <li>
          <i class="iconfont">&#xe608;</i>
          <span>
            收货地址
            <i class="iconfont">&#xe6e0;</i>
          </span>
        </li>
        <li>
          <i class="iconfont">&#xe638;</i>
          <span>
            联系客服
            <i class="iconfont">&#xe6e0;</i>
          </span>
        </li>
        <li>
          <i class="iconfont">&#xe67b;</i>
          <span>
            设置
            <i class="iconfont">&#xe6e0;</i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  background: #fff;
  height: 100vh;
  .header2 {
    width: 100%;
    height: 160px;
    display: flex;

    .avator {
      margin: 5px 10px 0 250px;
      line-height: 40px;
      height: 28px;
      width: 28px;
      img {
        height: 100%;
        width: 100%;
        border: 1px solid rgba(0,0,0,.1);
        border-radius: 50%;

      }
    }
  }
  .my_order {
    width: 92%;
    margin: 0 15px;
    background: #FAFAFA;
    border-radius: 12px;
    box-shadow: 0 0px 8px #ebedf0;
    .title {
      font-weight: 700;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #F5F5F5;
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
          font-size: 18px;
          color: red;

        }
      }
    }
  }
  .order_list {
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
          width: 320px;
          border-bottom: 1px solid #F5F5F5;
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
