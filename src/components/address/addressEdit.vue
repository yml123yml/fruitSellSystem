<template>
  <div>
    <edit-header title="地址编辑"></edit-header>
    <van-address-edit :area-list="areaList" @save="onSaveAddress" />
  </div>
</template>

<script>
import areaList from '../area/area'
import editHeader from '../../common/header'
import axios from 'axios'
export default {
  data () {
    return {
      areaList,
      currentAddressInfo: {},
      searchResult: [],
      list: []
    }
  },
  methods: {
    onSaveAddress (item) {
      axios.post('/api/address/add', {
        name: item.name,
        tel: item.tel,
        province: item.province,
        city: item.city,
        county: item.county,
        addressDetail: item.addressDetail
      })
      this.$router.push({ path: 'address' })
    }
  },
  components: {
    editHeader
  },
  mounted () {
    let List = localStorage.getItem('addressList')
    this.list = JSON.parse(List)
  }
}
</script>

<style lang="scss" scoped>
.van-address-edit {
  margin-top: 60px;
}
</style>
