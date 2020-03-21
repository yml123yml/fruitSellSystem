<template>
  <div class="container">
    <div class="bg bg-blur"></div>
    <div class="content">
      <div class="login-wrap" v-show="showLogin">
        <h3>登录</h3>
        <p v-show="showTip">{{tip}}</p>
        <input type="text" placeholder="请输入用户名" v-model="userName" />
        <input type="password" placeholder="请输入密码" v-model="passWord" />
        <button @click.prevent="login">登录</button>
        <span @click.self="toRegister">没有账号？马上去注册</span>
      </div>
      <div class="register-wrap" v-show="showRegister">
        <h3>注册</h3>
        <p v-show="showTip">{{tip}}</p>
        <input type="text" placeholder="请输入用户名" v-model="newUsername" />
        <input type="password" placeholder="请输入密码" v-model="newPassword" />
        <button @click.prevent="register">注册</button>
        <span @click.self="toLogin">已有账号？马上去登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      showLogin: true,
      showRegister: false,
      userName: '',
      passWord: '',
      newUsername: '',
      newPassword: '',
      showTip: false,
      tip: ''
    }
  },
  methods: {
    toRegister () {
      this.showRegister = true
      this.showLogin = false
    },
    toLogin () {
      this.showRegister = false
      this.showLogin = true
    },
    register () {
      let data = {'userName': this.newUsername, 'passWord': this.newPassword}
      axios.post('/api/user/addUser', data).then((res) => {
        /* 接口的传值是(-1,该用户已存在) */
        if (res.data === -1) {
          this.tip = '该账号已存在'
          this.showTip = true
          this.username = ''
          this.passWord = ''
        } else if (res.status === 200) {
          this.tip = '注册成功'
          this.showTip = true
          this.username = ''
          this.passWord = ''
          window.location.reload()
          /* 注册成功之后再跳回登录页 */
          setTimeout(function () {
            this.showRegister = false
            this.showLogin = true
            this.showTip = false
          }.bind(this), 2000)
        }
      })
    },
    login () {
      var self = this
      let data = {'username': this.userName, 'password': this.passWord}
      axios.post('/api/user/selectUser', data).then((res) => {
        /* 接口的传值是(-1,该用户不存在),(0,密码错误)，同时还会检测管理员账号的值 */
        if (res.data === -1) {
          this.tip = '该用户不存在'
          this.showTip = true
        } else if (res.data === 0) {
          this.tip = '密码输入错误'
          this.showTip = true
        } else {
          this.tip = '登录成功'
          this.showTip = true
          localStorage.setItem('userinfo', JSON.stringify(res.data[0]))
          setTimeout(function () {
            self.$router.push({name: 'indexContainer'})
          }, 1000)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .bg {
    background: url("../../static/img/bg2.png") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: -100;
  }
  .bg-blur {
    float: left;
    width: 100%;
    filter: blur(0.2px);
  }
  .content {
    position: absolute;
    top: 30%;
    left: 20%;
    .login-wrap {
      text-align: center;
    }
    .register-wrap {
      text-align: center;
    }
    h3 {
      margin-bottom: 15px;
    }
    p {
      color:red;
    }
    input {
      display: block;
      width: 250px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      margin-bottom: 10px;
      outline: none;
      padding: 10px;
      box-sizing: border-box;
    }
    button {
      display: block;
      width: 250px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      border: none;
      background-color: #41b883;
      color: #fff;
      font-size: 18px;
      margin-bottom: 5px;
      padding: 0;
    }
    span {
      display: block;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
