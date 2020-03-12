<template>
  <div class="top_container">
    <!-- 头部 -->
    <header class="header">
      <h1 class="logo"></h1>
      <div class="search"
           @click="goSearch('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span class="search_name">搜索商品,共24027款好物</span>
      </div>
      <div class="login">登录</div>
    </header>

    <!-- 头部导航 -->
    <div class="nav">
      <van-tabs v-model="active">
        <van-tab title="推荐"
                 to="/msite"></van-tab>
        <van-tab :to="`/tab?tabId=${navItem.id}`"
                 v-for="(navItem, index) in nav"
                 :key="index"
                 :title='navItem.name'>
        </van-tab>
      </van-tabs>
      <i class="iconfont icon-xiala toggleWrap"
         :class="{on:isShow }"
         @click="toggleWrap">
      </i>
    </div>

    <!-- 全部频道 -->
    <div class="all_channel"
         v-show="isShow">
      <div class="all_channel_title">全部频道</div>
      <div class="all_channel_item_container">
        <div class="all_channel_item"
             :class="{active: $route.path === '/msite'}"
             @click="changeIndex(-1,-1)">推荐</div>
        <div class="all_channel_item"
             :class="{active: targetIndex === index && $route.path !== '/msite'}"
             @click="changeIndex(index, navItem.id)"
             v-for="(navItem, index) in nav"
             :key="index">{{navItem.name}}</div>
      </div>
    </div>

    <!-- 遮罩层 -->
    <div class="mask"
         v-show='isShow'
         @click="toggleWrap"></div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MsiteHeader',
  data () {
    return {
      isShow: false,
      targetIndex: -1,
      active: 0 //当前选中的导航项
    }
  },
  computed: {
    ...mapState({
      nav: state => state.msite.nav
    })
  },
  mounted () {
    // 发送请求，获取导航数据
    this.$store.dispatch('getNav')
    // 事件总线
    this.$bus.$on('activeIndex', (index) => {
      this.active = index + 1
      console.log(index)
      this.changeIndex(index)
    })
  },
  methods: {
    goSearch (path) {
      this.$route.path !== path && this.$router.push(path)
    },
    toggleWrap () {
      this.isShow = !this.isShow
    },
    changeIndex (index, id) {
      this.targetIndex = index
      if (id) {
        this.toggleWrap()
        if (id === -1) {
          this.$router.push('msite', () => { })
          this.active = 0
        } else {
          this.$router.push({ path: 'tab', query: { tabId: id } }, () => { })
        }
      }
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.top_container
  width 100%
  position fixed
  top 0
  left 0
  z-index 400
  background-color #fff
  .header
    width 100%
    height 30px
    line-height 30px
    padding 6px 0
    display flex
    align-items center
    background-color #fff
    position relative
    z-index 300
    .logo
      width 90px
      height 30px
      background url('./images/logo.png') no-repeat center center / 70px
    .search
      width 230px
      height 28px
      line-height 28px
      font-size 14px
      color #666
      background-color #EDEDED
      border-radius 6px
      display flex
      i
        width 30px
        height 30px
        text-align center
        font-size 24px
        margin-left 10px
    .login
      width 40px
      height 20px
      margin-left 4px
      line-height 20px
      font-size 14px
      text-align center
      border 1px solid red
      border-radius 4px
      color red
  .nav
    overflow hidden
    position relative
    background-color #fff
    padding-right 64px
    .toggleWrap
      display block
      position absolute
      top 0
      right 20px
      z-index 200
      line-height 44px
      text-align center
      background #fff
      transition all 0.5s
      &.on
        transform rotate(180deg)
  .all_channel
    width 100%
    font-size 12px
    padding 10px 0
    position absolute
    top 42px
    z-index 100
    background #fff
    .all_channel_title
      font-size 16px
      color #333
      margin 5px 0 20px 5px
    .all_channel_item_container
      display flex
      flex-wrap wrap
      .all_channel_item
        width 80px
        margin 5px 5px 10px 5px
        text-align center
        line-height 25px
        border 1px solid #ccc
        border-radius 4px
        &.active
          color #DD1A21
          border-color #DD1A21
  .mask
    position fixed
    z-index 1
    background rgba(0, 0, 0, 0.5)
    top 0
    left 0
    right 0
    bottom 0
</style>