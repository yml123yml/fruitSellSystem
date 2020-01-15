<template>
  <div class="container">
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 'a',
      option1: [
        { text: '全部商品', value: 0 },
        { text: '活动商品', value: 1 }
      ],
      option2: [
        { text: '默认排序', value: 'a' },
        { text: '价格排序', value: 'b' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
