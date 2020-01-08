<template>
  <div class="container">
    <div class="bg bg-blur"></div>
    <div class="content" :class="{ login: isSignIn, register: isSignUp }">
      <login-tabs @click.native="switchState" />
    <login-form />
    </div>
  </div>
</template>
<script>
import LoginTabs from './Login/LoginTabs'
import LoginForm from './Login/LoginForm'
export default {
  name: 'Login',
  components: {
    LoginTabs,
    LoginForm
  },
  data () {
    return {
      state: 1
    }
  },
  computed: {
    isSignIn () {
      return this.state === 1
    },
    isSignUp () {
      return this.state === 2
    }
  },
  methods: {
    switchState () {
      this.state = this.state === 1 ? 2 : 1
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  .bg {
    background: url("../assets/img/loginBG.jpg") no-repeat;
    background-size: 100% 100%;
    height: 100%;
    position: fixed;
    width: 100%;
  }
  .bg-blur {
    float: left;
    width: 100%;
    filter: blur(2px);
  }
  .content {
    position: absolute;
    text-align: center;
  }
}
</style>
