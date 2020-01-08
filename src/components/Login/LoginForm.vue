<template>
  <form class="form">
    <div class="login_form">
      <div class="mui-input-row">
        <label>手机号:</label>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="mui-input-row">
        <label>密码:</label>
        <input type="text" placeholder="请输入密码" />
      </div>
    </div>
    <div class="register_form">
      <div class="mui-input-row">
        <label>手机号:</label>
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="mui-input-row">
        <label>密码:</label>
        <input type="text" placeholder="请输入密码" />
      </div>
    </div>
    <div>
      <login-submit />
    </div>
  </form>
</template>
<script>
import LoginSubmit from './LoginSubmit'

export default {
  components: {
    LoginSubmit
  }
}
</script>
<style>
.form {
  padding: 20px;
  margin-left: 50px;
}
.register .register_form {
  opacity: 0;
}
.register .login_button label:nth-child(2) {
  opacity: 0;
}
.login .login_form {
  opacity: 0;
}
.login .register_form {
  transform: translateY(-100%);
}
.login .login_button label:nth-child(3) {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
