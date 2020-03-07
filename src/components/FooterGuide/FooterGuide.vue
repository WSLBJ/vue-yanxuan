<template>
  <footer class="footer_guide">
    <a href="javascript:;"
       class="guide_item"
       :class="{active: $route.path==='/msite'}"
       @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{active: $route.path==='/category'}"
       @click="goTo('/category')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{active: $route.path==='/worthbuy'}"
       @click="goTo('/worthbuy')">
      <span class="item_icon">
        <i class="iconfont icon-bao"></i>
      </span>
      <span>值得买</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{active: $route.path==='/cart'}"
       @click="goTo('/cart')">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;"
       class="guide_item"
       :class="{active: $route.path==='/personal'}"
       @click="goTo('/personal')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>
<script>
export default {
  name: 'FooterGuide',
  methods: {
    goTo (path) {
      this.$route.path !== path && this.$router.replace(path)
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
.footer_guide
  top-border-1px(#d9d9d9)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex-direction column
    align-items center
    justify-content center
    flex 1
    text-align center
    &.active
      color #DD1A21
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>