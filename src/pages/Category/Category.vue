<template>
  <div class="classifyBox">
    <van-sticky>
      <header class="search"
              @click="$router.push('/search')">
        <div class="search_outer">
          <van-icon name="search"
                    size="18"
                    class="a_icon" />
          <span>搜索商品, 共23602款好物</span>
        </div>
      </header>
    </van-sticky>

    <!-- 内容 -->
    <div class="classify_content">
      <CategoryLeftNav />
      <CategoryRightList />
    </div>

  </div>
</template>
<script>
import { Icon, Sticky } from 'vant'
import { mapState } from 'vuex'
import CategoryLeftNav from './CategoryLeftNav'
import CategoryRightList from './CategoryRightList'
export default {
  name: 'Category',
  components: {
    [Icon.name]: Icon,
    [Sticky.name]: Sticky,
    CategoryLeftNav,
    CategoryRightList
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.classifyBox
  width 100%
  height 100%
  font-size 16px
  .search
    height 44px
    width 100%
    box-sizing border-box
    padding 0 15px
    display flex
    flex-direction column
    justify-content center
    border-bottom 1px solid #EDEDED
    background-color #fff
    .search_outer
      height 28px
      width 100%
      background-color #EDEDED
      text-align center
      line-height 28px
      color #666
      font-size 14px
      border-radius 5px
      position relative
      .a_icon
        position absolute
        top 6px
      span
        padding-left 20px
</style>
