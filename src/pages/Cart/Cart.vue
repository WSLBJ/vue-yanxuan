<template>
  <div class="carBox">
    <footer class="carFooter">
      <span class="left">购物车</span>
      <span class="right">领劵</span>
    </footer>
    <nav class="carNav">
      <ul class="nav_ul">
        <li>
          <i>·
          </i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i>·
          </i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i>·
          </i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </nav>
    <div class="carContent">
      <div class="carContent_car">
        <img src="./img/01.png"
             alt="">
        <p>去添加点什么吧</p>
      </div>
      <div class="btn"
           @click="$router.replace('/personal')">登录</div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant'
export default {
  name: 'Cart',
  components: {
    [Icon.name]: Icon
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.carBox
  width 100%
  height 100%
  font-size 16px
  .carFooter
    width 100%
    height 44px
    box-sizing border-box
    padding 0 15px
    line-height 44px
    background-color #fff
    .left
      font-size 18px
    .right
      font-size 15px
      color red
      float right
      margin-right 15px
  .carNav
    width 100%
    box-sizing border-box
    padding 0 15px
    height 35px
    font-size 10px
    background-color #EEEEEE
    .nav_ul
      display flex
      justify-content space-around
      line-height 35px
      color #666
  .carContent
    width 100%
    height 94%
    background-color #F4F4F4
    padding-top -2px
    .carContent_car
      width 100%
      position absolute
      left 0
      bottom 55%
      transform translateY(50%)
      text-align center
      img
        width 124px
        height 124px
      p
        font-size 14px
        color #999
    .btn
      width 240px
      height 45px
      background-color #DD1A21
      text-align center
      line-height 45px
      color #fff
      position absolute
      bottom 30%
      left 50%
      transform translateX(-50%)
</style>