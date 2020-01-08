<template>
  <span class="login_button">
    <input type="button" value />
    <label>
      <router-link :to="{name:'Index'}" style="color:#fff;">登录</router-link>
    </label>
    <label>注册</label>
  </span>
</template>
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
