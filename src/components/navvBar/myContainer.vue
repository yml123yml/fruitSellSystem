<template>
  <div>
    <div style="height:38px;">
      <div class="header">
        <div class="title">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
}
</style>
