<template>
  <div class="headerTitle">
    <div class="header-left" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </div>
    <div class="header-in">{{ title }}</div>
  </div>
</template>

<script>
export default {
  name: 'headerTitle',
  props: ['title']
}
</script>

<style lang="scss" scoped>
.headerTitle {
  width: 100%;
  height: 60px;
  background: #ffffff;
  line-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  border-bottom: 1px solid #eee;
  .header-left {
    display: inline-block;
    font-size: 16px;
    margin-left: 10px;
  }
  .header-in {
    margin-left: 140px;
    display: inline-block;
    font-size: 16px;
    line-height: 60px;
  }
}
</style>
