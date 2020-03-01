<template>
  <span class="login_button">
    <input type="button" value />
    <label>
      <router-link :to="{name:'Index'}" style="color:#fff;">登录</router-link>
    </label>
    <label>
      <div @click="addUser">注册</div>
    </label>
  </span>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    addUser () {
      var passWord = this.passWord
      var userPhone = this.userPhone
      axios.post('/api/user/addUser', {
        userPhone: userPhone,
        passWord: passWord
      }, {}).then((res) => {
        alert('添加成功')
      })
    }
  }
}
</script>
<style>
.login_button {
  position: relative;
  display: flex;
  overflow: hidden;
}
.login_button input {
  display: block;
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 2px;
  background: #0066d0;
  color: #fff;
}
.login_button label {
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  transition: all 0.6s ease;
  color: #fff;
}
</style>
