<template>
  <div>
    <!-- header -->
    <header class="header">
      <i class="iconfont icon-shouye home"
         @click="$router.push('/msite')"></i>
      <h1 class="title">
        <img src="./imgs/logo.png"
             class="logo" />
      </h1>
      <div class="right">
        <i class="iconfont icon-sousuo search"></i>
        <i class="iconfont icon-gouwuche gouwuche"></i>
      </div>
    </header>

    <!-- content -->
    <div class="con">
      <div class="title">
        <img src="./imgs/title.png" />
      </div>
      <div class="login">
        <div class="phone-login"
             @click="goTo('/Personal/phone-login')">
          <img src="./imgs/phone.png" />
          <span>手机号快捷登录</span>
        </div>
        <div class="email-login"
             @click="goTo('/Personal/email-login')">
          <img src="./imgs/email.png" />
          <span>邮箱账号登录</span>
        </div>
      </div>
      <!-- footer -->
      <footer class="footer">
        <div class="weixin">
          <img src="./imgs/weixin.png" />
          <span>微信</span>
        </div>
        <div class="qq">
          <img src="./imgs/qq.png" />
          <span>QQ</span>
        </div>
        <div class="weibo">
          <img src="./imgs/weibo.png" />
          <span>微博</span>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: "Personal",
  methods: {
    goTo (path) {
      this.$route.path !== path && this.$router.replace(path);
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.header
  box-sizing border-box
  width 100%
  height 44px
  background-color #fafafa
  display flex
  justify-content space-between
  align-items center
  padding 0 12px
  position fixed
  top 0
  left 0
  .logo
    box-sizing border-box
    padding 2px
    width 86px
    height 27px
    transform translateX(22px)
  .home
    display inline-block
    font-size 22px
    width 24px
    font-size 22px
    color #000
  .right
    display flex
    align-items center
    margin-right 3px
    .search
      font-size 32px
      margin-right 10px
      color #000
    .gouwuche
      font-size 22px
      color #000
.con
  background-color #F2F5F4
  .title
    margin-top 87px
    padding 80px 0 116px
    text-align center
    img
      width 134px
      height 45px
  .login
    padding 0 20px
    .phone-login
      width 335.2px
      height 47px
      margin-bottom 16px
      background-color #DD1A21
      text-align center
      img
        width 20px
        height 20px
        margin-right 8px
      span
        color #ffffff
        font-size 15px
        vertical-align middle
    .email-login
      width 335.2px
      height 47px
      margin-bottom 16px
      border 1px solid #DD1A21
      text-align center
      box-sizing border-box
      img
        width 20px
        height 20px
        margin-right 8px
      span
        color #DD1A21
        font-size 15px
        vertical-align middle
  .footer
    display flex
    justify-content center
    align-items center
    margin 280px 0 30px
    img
      width 20px
      height 20px
      padding 2.5px
      box-sizing border-box
    span
      font-size 14px
      color #7f7f7f
      vertical-align middle
      margin-left 3px
    .qq
      margin 0 22px
      padding 0 20px
      border-left 1px solid #7f7f7f
      border-right 1px solid #7f7f7f
      display flex
      align-items center
    .weibo
      display flex
      align-items center
    .weixin
      display flex
      align-items center
</style>
