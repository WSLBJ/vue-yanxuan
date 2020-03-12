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
        <input type="text" placeholder="请输入手机号" />
      </div>
      <div class="duanxin">
        <input type="password" placeholder="请输入短信验证码" />
        <span class="yanzhengma">获取验证码</span>
      </div>
      <div class="problem">
        <span class="problem-left">遇到问题？</span>
        <span class="problem-right">使用密码验证登录</span>
      </div>
      <div class="login">登录</div>
      <div class="agreed">
        <van-checkbox v-model="checked" shape="square" icon-size="16px">
          我同意<span class="tiaokuan">《服务条款》</span>和<span
            class="tiaokuan"
            >《网易隐私政策》</span
          >
        </van-checkbox>
      </div>
      <div class="other">其他登录方式<img src="../imgs/dayu.png" /></div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Checkbox, CheckboxGroup } from "vant";
import "vant/lib/checkbox/style";
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
export default {
  name: "PhoneLogin",
  data() {
    return {
      checked: true
    };
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

.clear
  height 72px
.title
  text-align center
  img
    width 134px
    height 45px
.con
  width 335.5px
  margin 30px auto 0
  font-size 14px
  .phone
    border-bottom 1px solid #ccc
    height 45.7px
    input
      height 45.7px
  .duanxin
    border-bottom 1px solid #ccc
    height 45.7px
    margin-top 16px
    display flex
    justify-content space-between
    align-items center
    input
      height 45.7px
    .yanzhengma
      border 1px solid #ccc
      padding 2px 4px
      border-radius 3px
      height 22px
      line-height 22px
      margin-right 10px
  .problem
    display flex
    justify-content space-between
    margin 21px 0
    .problem-left
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
  .agreed
    font-size 12px
    margin-top 10px
    .tiaokuan
      color #007AFF
  .other
    margin-top 30px
    text-align center
    img
      width 14px
      height 14px
      vertical-align top
</style>
