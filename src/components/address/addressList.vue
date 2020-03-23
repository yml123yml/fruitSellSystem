<template>
  <div>
    <header-detail title="收货地址"></header-detail>
    <van-address-list
      v-model="defaultAddress.id"
      :list="list"
      @select="setDefaultAddress"
      @add="onAddList"
    />
  </div>
</template>

<script>
import headerDetail from '../../common/header'
import axios from 'axios'
export default {
  data () {
    return {
      list: [],
      defaultAddress: {
        id: 1,
        name: '',
        tel: '',
        province: '',
        city: '',
        county: '',
        addressDetail: ''
      }
    }
  },
  components: {
    headerDetail
  },
  methods: {
    setDefaultAddress (item, index) {
      this.defaultAddress.id = item.id
      this.defaultAddress.name = item.name
      this.defaultAddress.tel = item.tel
      this.defaultAddress.province = item.province
      this.defaultAddress.city = item.city
      this.defaultAddress.county = item.county
      this.defaultAddress.addressDetail = item.addressDetail
      localStorage.setItem('defaultAddress', JSON.stringify(this.defaultAddress))
    },
    onAddList () {
      this.$router.push({path: 'editAddress'})
    }
  },
  mounted () {
    axios.post('api/address/query').then(res => {
      this.list = res.data
      console.log(this.list)
      localStorage.setItem('addressList', JSON.stringify(this.list))
    })
  }
}
</script>

<style lang="scss" scoped>
.van-address-list {
  margin-top: 50px;
}
/deep/ .van-address-item {
  padding: 12px;
  background-color: #fff;
  border-radius: 0px;
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
}
</style>
