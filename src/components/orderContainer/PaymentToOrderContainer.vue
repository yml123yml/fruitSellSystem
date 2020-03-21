<template>
  <div class="jiesuan">
    <div style="height:40px;">
      <div class="header">
        <div class="title">确认订单</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.jiesuan {
  background: #ffffff;
  min-height: 100vh;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(90deg, #39da85, #01b27a);
    .title {
      margin: 0 20px;
      font-size: 14px;
      color: #ffffff;
    }
  }
}
</style>
