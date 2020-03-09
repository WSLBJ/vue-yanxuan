<template>
  <div class="classifyBox">
    <header class="search">
      <div class="search_outer">
        <van-icon name="search" size="18" class="a_icon" />
        <span>搜索商品, 共23602款好物</span>
      </div>
    </header>
    <!-- 内容 -->
    <div class="classify_content">
      <!-- 左侧导航 -->
      <div class="classify_left_nav">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item title="推荐专区" class="nav_title" />
          <van-sidebar-item title="宅家防护" class="nav_title" />
          <van-sidebar-item title="爆品专区" class="nav_title" />
          <van-sidebar-item title="新品专区" class="nav_title" />
          <van-sidebar-item title="居家生活" class="nav_title" />
          <van-sidebar-item title="服饰鞋包" class="nav_title" />
          <van-sidebar-item title="美食酒水" class="nav_title" />
          <van-sidebar-item title="个护清洁" class="nav_title" />
          <van-sidebar-item title="母婴亲子" class="nav_title" />
          <van-sidebar-item title="运动旅行" class="nav_title" />
          <van-sidebar-item title="数码家电" class="nav_title" />
          <van-sidebar-item title="全球特色" class="nav_title" />
        </van-sidebar>
      </div>
      <!-- 右侧内容 -->
      <div class="classify_right">
        <div class="top_img">
          <img src="./images/00.webp" alt="">
        </div>
        <div class="right_content">
          <ul class="content_ul">
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
            <li class="content_ul_li">
              <div class="content_li_div">
                <img src="./images/01.webp" alt="">
                <div>精选好物15元起</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import { Icon, Sidebar, SidebarItem } from 'vant'
export default {
  name: 'Classify',
  data() {
    return {
      activeKey: 0
    }
  },
  components: {
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
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
  .classify_left_nav
    height 100%
    width 23%
    float left
    .nav_title
      height 45px
      text-align center
      line-height 10px
      border-right 1px solid #EDEDED
  .classify_right
    width 77%
    float right
    box-sizing border-box
    padding 15px
    .top_img
      width 100%
      height 96px
      margin-bottom 15px
      img
        width 100%
        height 100%
    .right_content
      width 100%
      .content_ul
        width 100%
        .content_ul_li
          font-size 12px
          text-align center
          display inline-block
          margin-right 14px
          .content_li_div
            width 72px
            height 108px
            img
              width 72px
              height 72px
</style>
