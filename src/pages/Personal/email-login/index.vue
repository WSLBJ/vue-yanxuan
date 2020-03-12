<template>
  <div>
    <!-- header -->
    <header class="header">
      <i class="iconfont icon-shouye home"></i>
      <h1 class="title">
        <img src="../imgs/logo.png" class="logo" />
      </h1>
      <div class="right">
        <i class="iconfont icon-sousuo search"></i>
        <i class="iconfont icon-gouwuche gouwuche"></i>
      </div>
    </header>
    <div class="clear"></div>
    <!-- title -->
    <h1 class="title">
      <img src="../imgs/title.png" />
    </h1>
    <!-- 登录表单 -->
    <div class="con">
      <div class="phone">
        <label for="" class="in-label">
          <input type="text" placeholder="邮箱账号" />
        </label>
      </div>
      <div class="duanxin">
        <label for="" class="in-label">
          <input type="password" placeholder="密码" />
        </label>
      </div>
      <div class="problem">
        <span class="problem-left">注册账号</span>
        <span class="problem-right">忘记密码</span>
      </div>
      <div class="login">登录</div>
      <div class="other">其他登录方式<img src="../imgs/dayu.png" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "EmailLogin"
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

.clear
  height 72px
.title
  text-align center
  img
    width 134px
    height 45px
.con
  width 335.5px
  margin 80px auto 0
  font-size 14px
  .phone
    border-bottom 1px solid #ccc
    height 45.7px
    input
      height 45.7px
      outline none
  .duanxin
    border-bottom 1px solid #ccc
    height 45.7px
    display flex
    justify-content space-between
    align-items center
    input
      height 45.7px
      outline none
  .problem
    display flex
    justify-content space-between
    margin 21px 0
    color #888
  .login
    width 100%
    background-color #DD1A21
    height 45.69px
    border-radius 3px
    text-align center
    line-height 45.69px
    color #fff
    font-size 16px
  .other
    margin-top 38px
    text-align center
    img
      width 14px
      height 14px
      vertical-align top
</style>
