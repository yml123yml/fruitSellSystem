<template>
  <ul class="login_tabs">
    <li>注册</li>
    <li class="join">-or-</li>
    <li>登录</li>
  </ul>
</template>
<style lang="scss" scoped>
.login_tabs {
  display: flex;
  padding: 140px 0 0 90px;
  li {
    padding: 10px;
    flex: 1;
    transition: all 0.6s ease;
    list-style: none;
  }
  .join {
    font-size: 12px;
  }
}
.register .login_tabs li:first-child {
  transform: translateX(100%) scale(1.5);
}
.register .login_tabs li:last-child {
  transform: scale(1);
  opacity: 0.4;
}
.register .join {
  transform: translateX(60%);
  opacity: 0.4;
}
.login .login_tabs li:last-child {
  transform: translateX(-70%) scale(1.5);
}
.login .login_tabs li:first-child {
  transform: translateX(-10%) scale(1);
  opacity: 0.4;
}
.login .join {
  transform: translateX(-48%);
  opacity: 0.4;
}
</style>
