<template>
  <div>
    <div style="height:38px;">
      <div class="header">
        <div class="title">冰果</div>
        <form action="">
          <i class="iconfont iconfont-search">&#xe613;</i>
          <input type="search" placeholder="请输入水果名称"  @search="onSearch"/>
        </form>
      </div>
    </div>
    <swipe></swipe>
    <p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p>
    <p>我是内容</p><p>我是内容</p><p>我是内容</p><p>我是内容</p>
  </div>
</template>

<script>
import swipe from '../swipe.vue'
export default {
  data () {
    return {
    }
  },
  methods: {
    onSearch () {
      alert('暂无水果信息')
    }
  },
  components: {
    swipe
  }
}
</script>

<style lang="scss">
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
  .iconfont-search {
    position: absolute;
    margin-left: 10px;
  }
  input {
    width: 300px;
    height: 22px;
    background: #fff;
    border-radius: 20px;
    padding: 0 0 0 40px;
    text-align: left;
  }
}

</style>
