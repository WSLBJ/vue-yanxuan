<template>
  <div style="background-color: #eee;padding-bottom: 50px;">
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
      <van-tabs>
        <van-tab v-for="(navItem, index) in navList"
                 :key="index"
                 :title='navItem'>
        </van-tab>
      </van-tabs>
      <i class="iconfont icon-xiala toggleWrap"></i>
    </div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in bannerList"
                      :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>

    <!-- 轮播图下边小广告 -->
    <div class="advertising_bar">
      <ul class="advertising_bar_list">
        <li class="advertising_bar_item">
          <i class="advertising_bar_icon icon1"></i>
          <span class="advertising_bar_title">网易品牌自营</span>
        </li>
        <li class="advertising_bar_item">
          <i class="advertising_bar_icon icon2"></i>
          <span class="advertising_bar_title">30天无忧退货</span>
        </li>
        <li class="advertising_bar_item">
          <i class="advertising_bar_icon icon3"></i>
          <span class="advertising_bar_title">48小时快速退款</span>
        </li>
      </ul>
    </div>

    <!-- 商品分类 -->
    <ul class="shop_categories">
      <li class="shop_categories_item">
        <img src="./images/categories/1.png"
             alt="">
        <span>新品首发</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/2.png"
             alt="">
        <span>居家生活</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/3.png"
             alt="">
        <span>服饰鞋包</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/4.png"
             alt="">
        <span>美食酒水</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/5.png"
             alt="">
        <span>个护清洁</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/6.png"
             alt="">
        <span>母婴亲子</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/7.png"
             alt="">
        <span>运动旅行</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/8.png"
             alt="">
        <span>数码家电</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/9.png"
             alt="">
        <span>全球特色</span>
      </li>
      <li class="shop_categories_item">
        <img src="./images/categories/10.gif"
             alt="">
        <span>好货抄底</span>
      </li>
    </ul>

    <!-- 限时特惠 -->
    <div class="preferential">
      <div class="preferential_bar">
        <div class="preferential_bar_shops">
          <img src="./images/preferential/preferential_bar.png"
               alt="">
          <span class="preferential_bar_shops_price">￥768</span>
        </div>
      </div>
      <div class="preferential_masks">
        <img src="./images/preferential/kouzhao1.webp"
             alt="">
        <img src="./images/preferential/kouzhao2.webp"
             alt="">
      </div>
      <div class="preferential_timing_buy">
        <div class="preferential_item">
          <span>48H限时购</span>
          <span>女王专属7折起</span>
          <img src="./images/preferential/1.webp"
               alt="">
        </div>
        <div class="preferential_item">
          <span>女神专属爆款</span>
          <span>美妆29.9元起</span>
          <img src="./images/preferential/2.webp"
               alt="">
        </div>
        <div class="preferential_item">
          <span>3月春茶上市</span>
          <span>特价384元/罐</span>
          <img src="./images/preferential/3.webp"
               alt="">
        </div>
      </div>
    </div>

    <!-- 新人专享礼 -->
    <div class="new_user_gift">
      <h2 class="new_user_gift_title">
        <span>-</span>
        <p>新人专享礼</p>
        <span>-</span>
      </h2>
      <div class="new_user_gift_container">
        <div class="new_user_giftBag">
          <p>新人专享礼包</p>
          <img src="./images/newUserGiftBag.png"
               alt="">
        </div>
        <div class="welfare_association">
          <span class="welfare_association_title">福利社</span>
          <span class="today_special_price">今日特价</span>
          <img src="./images/tejia.webp"
               alt="">
          <div class="welfare_association_price">
            <span class="discounts_price">￥58</span>
            <span class="usually_price">￥68</span>
          </div>
        </div>
        <div class="new_user_spell_group">
          <span class="spell_team">新人拼团</span>
          <span class="free_mail">1元起包邮</span>
        </div>
      </div>
    </div>

    <!-- 类目热销榜 -->
    <div class="hot_categories">
      <h2 class="hot_categories_title">类目热销榜</h2>
      <div class="hot_categories_container">
        <div class="hot_categories_name">
          <img src="./images/hot_categories/hot_categories.webp"
               alt="">
          <h3>热销榜</h3>
          <span></span>
        </div>
        <div class="good_commment_name">
          <img src="./images/hot_categories/high_praise.webp"
               alt="">
          <h3>好评榜</h3>
          <span></span>
        </div>
        <div class="hot_categories_item">
          <span>居家生活榜</span>
          <img src="./images/hot_categories/1.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>美食酒水榜</span>
          <img src="./images/hot_categories/2.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>个护清洁榜</span>
          <img src="./images/hot_categories/3.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>服饰鞋包榜</span>
          <img src="./images/hot_categories/4.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>数码家电榜</span>
          <img src="./images/hot_categories/5.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>全球特色榜</span>
          <img src="./images/hot_categories/6.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>母婴亲子榜</span>
          <img src="./images/hot_categories/7.webp"
               alt="">
        </div>
        <div class="hot_categories_item">
          <span>运动旅行榜</span>
          <img src="./images/hot_categories/8.webp"
               alt="">
        </div>
      </div>
    </div>

    <!-- 限时购 -->
    <div class="time_limit_buy">
      <div class="time_limit_buy_title">
        <div class="time_limit_buy_title_left">
          <h2>限时购</h2>
          <div class="time">
            <span class="hours">00</span>
            <span class="colon">:</span>
            <span class="minutes">00</span>
            <span class="colon">:</span>
            <span class="seconds">00</span>
          </div>
        </div>
        <div class="time_limit_buy_title_right">
          <span class="more">更多</span>
        </div>
      </div>
      <div class="time_limit_buy_container">
        <div class="time_limit_buy_item">
          <div class="img_container">
            <img src="./images/time_limit_buy/1.webp"
                 alt="">
          </div>
          <div class="price">
            <span class="discounts_price">&yen;62</span>
            <span class="ordinarily_price">&yen;69</span>
          </div>
        </div>
        <div class="time_limit_buy_item">
          <div class="img_container">
            <img src="./images/time_limit_buy/2.webp"
                 alt="">
          </div>
          <div class="price">
            <span class="discounts_price">&yen;62</span>
            <span class="ordinarily_price">&yen;69</span>
          </div>
        </div>
        <div class="time_limit_buy_item">
          <div class="img_container">
            <img src="./images/time_limit_buy/3.webp"
                 alt="">
          </div>
          <div class="price">
            <span class="discounts_price">&yen;62</span>
            <span class="ordinarily_price">&yen;69</span>
          </div>
        </div>
        <div class="time_limit_buy_item">
          <div class="img_container">
            <img src="./images/time_limit_buy/4.webp"
                 alt="">
          </div>
          <div class="price">
            <span class="discounts_price">&yen;62</span>
            <span class="ordinarily_price">&yen;69</span>
          </div>
        </div>
        <div class="time_limit_buy_item">
          <div class="img_container">
            <img src="./images/time_limit_buy/5.webp"
                 alt="">
          </div>
          <div class="price">
            <span class="discounts_price">&yen;62</span>
            <span class="ordinarily_price">&yen;69</span>
          </div>
        </div>
        <div class="time_limit_buy_item">
          <div class="img_container">
            <img src="./images/time_limit_buy/6.webp"
                 alt="">
          </div>
          <div class="price">
            <span class="discounts_price">&yen;62</span>
            <span class="ordinarily_price">&yen;69</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 新品首发 -->
    <div class="new_product">
      <div class="new_product_title">
        <h2>新品首发</h2>
        <span class="more">更多</span>
      </div>
      <div class="new_product_container">
        <div class="new_product_item">
          <div class="img_container">
            <img src="./images/new_product/1.webp"
                 alt="">
          </div>
          <span class="product_des">复工装备随身防护,日本空气净化除菌卡</span>
          <span class="product_price">&yen;79</span>
          <span class="product_dis">满99减10</span>
        </div>
        <div class="new_product_item">
          <div class="img_container">
            <img src="./images/new_product/2.webp"
                 alt="">
          </div>
          <span class="product_des">复工装备随身防护 日本空气净化除菌卡</span>
          <span class="product_price">&yen;79</span>
          <span class="product_dis">满99减10</span>
        </div>
        <div class="new_product_item">
          <div class="img_container">
            <img src="./images/new_product/3.webp"
                 alt="">
          </div>
          <span class="product_des">复工装备随身防护 日本空气净化除菌卡</span>
          <span class="product_price">&yen;79</span>
          <span class="product_dis">满99减10</span>
        </div>
        <div class="new_product_item">
          <div class="img_container">
            <img src="./images/new_product/4.webp"
                 alt="">
          </div>
          <span class="product_des">复工装备随身防护 日本空气净化除菌卡</span>
          <span class="product_price">&yen;79</span>
          <span class="product_dis">满99减10</span>
        </div>
        <div class="new_product_item">
          <div class="img_container">
            <img src="./images/new_product/5.webp"
                 alt="">
          </div>
          <span class="product_des">复工装备随身防护 日本空气净化除菌卡</span>
          <span class="product_price">&yen;79</span>
          <span class="product_dis">满99减10</span>
        </div>
        <div class="new_product_item">
          <div class="img_container">
            <img src="./images/new_product/6.webp"
                 alt="">
          </div>
          <span class="product_des">复工装备随身防护 日本空气净化除菌卡</span>
          <span class="product_price">&yen;79</span>
          <span class="product_dis">满99减10</span>
        </div>
      </div>
    </div>

    <!-- 底部推荐 -->
    <div class="shop_recommend">
      <div class="shop_recommend_container">
        <h3 class="shop_recommend_title">断货补单王</h3>
        <span class="shop_recommend_tip">补仓疯抢中</span>
        <div class="img_container">
          <img src="./images/shop_recommend/1.webp"
               alt="">
          <img src="./images/shop_recommend/2.webp"
               alt="">
        </div>
      </div>
      <div class="shop_recommend_container">
        <h3 class="shop_recommend_title">断货补单王</h3>
        <span class="shop_recommend_tip">补仓疯抢中</span>
        <div class="img_container">
          <img src="./images/shop_recommend/3.webp"
               alt="">
          <img src="./images/shop_recommend/4.webp"
               alt="">
        </div>
      </div>
      <div class="shop_recommend_container">
        <h3 class="shop_recommend_title">断货补单王</h3>
        <span class="shop_recommend_tip">补仓疯抢中</span>
        <div class="img_container">
          <img src="./images/shop_recommend/5.webp"
               alt="">
          <img src="./images/shop_recommend/6.webp"
               alt="">
        </div>
      </div>
      <div class="shop_recommend_container">
        <h3 class="shop_recommend_title">断货补单王</h3>
        <span class="shop_recommend_tip">补仓疯抢中</span>
        <div class="img_container">
          <img src="./images/shop_recommend/7.webp"
               alt="">
          <img src="./images/shop_recommend/8.webp"
               alt="">
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <footer class="footer">
      <div class="footer_container">
        <div class="footer_link_container">
          <div class="footer_link_app">下载App</div>
          <div class="footer_link_pc">电脑版</div>
        </div>
        <div class="footer_company_info">
          网易公司版权所有 © 1997-2020
        </div>
        <div class="footer_company_license">食品经营许可证：JY13301080111719</div>
      </div>
    </footer>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Msite',
  data () {
    return {
      navList: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '全球特色', ''],
      bannerList: [
        'https://yanxuan.nosdn.127.net/be01331fb46a63943357fcb2f2c54e3a.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/0398d96236e228c33ab82ce09c0d45b6.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/be9724fb7bdeac5846517baba68f9996.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/1f5bb4a08cc1c485d16b1638b75e885b.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
        'https://yanxuan.nosdn.127.net/3c94dee964a791515434c3d13559a82f.jpg?type=webp&imageView&quality=75&thumbnail=750x0'
      ]
      // bannerList: ['./images/nav/1.jpg', './images/nav/2.jpg', './images/nav/3.webp', './images/nav/4.jpg', './images/nav/5.webp', './images/nav/6.webp', './images/nav/7.jpg', './images/nav/8.jpg']
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    goSearch (path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.header
  width 100%
  height 30px
  line-height 30px
  padding 6px 0
  display flex
  align-items center
  background-color #fff
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
  .toggleWrap
    position absolute
    top 0
    right 0
    width 60px
    line-height 44px
    text-align center
    background #fff
.van-swipe
  height 200px
  .van-swipe-item
    img
      display block
      width 100%
      height 100%
.advertising_bar
  height 20px
  line-height 20px
  padding 5px
  background-color #fff
  .advertising_bar_list
    display flex
    .advertising_bar_item
      display flex
      margin-left 10px
      .advertising_bar_icon
        width 30px
        display inline-block
        &.icon1
          background url('./images/advertising/1.png') no-repeat center center / 20px
        &.icon2
          background url('./images/advertising/2.png') no-repeat center center / 20px
        &.icon3
          background url('./images/advertising/3.png') no-repeat center center / 20px
      .advertising_bar_title
        text-align center
        font-size 12px
.shop_categories
  width 100%
  margin-bottom 5px
  display flex
  flex-wrap wrap
  background-color #fff
  .shop_categories_item
    display flex
    flex-direction column
    margin 9px
    img
      width 50px
      height 50px
      display block
      margin-bottom 6px
    span
      font-size 14px
.preferential
  width 100%
  overflow hidden
  background-color #fff
  .preferential_bar
    width 100%
    height 120px
    background url('./images/preferential/preferential-title.gif') no-repeat center top / contain
    position relative
    .preferential_bar_shops
      width 82px
      height 86px
      position absolute
      top 16px
      left 38px
      img
        width 100%
        height 100%
    .preferential_bar_shops_price
      display block
      width 72px
      height 14px
      font-size 12px
      color #fff
      text-align center
      border-radius 7px
      background orange
      position absolute
      bottom 4px
      left 5px
  .preferential_masks
    background-color #CC2356
    display flex
    justify-content space-around
    padding 8px 4px
    img
      width 176px
  .preferential_timing_buy
    display flex
    justify-content space-around
    background-color #CC2356
    padding 0 4px 8px
    .preferential_item
      width 115px
      height 110px
      background-color #FFFEFF
      font-size 14px
      color #AB0933
      border-radius 8px
      display flex
      flex-wrap wrap
      align-items center
      justify-content center
      span
        font-weight 700
      img
        width 60px
        height 60px
.new_user_gift
  width 100%
  margin 10px 0
  background-color #fff
  .new_user_gift_title
    heiht 30px
    line-height 30px
    display flex
    justify-content center
    span
      display block
      line-height 25px
      font-size 26px
    p
      line-height 30px
      font-size 14px
      margin 0 4px
  .new_user_gift_container
    height 230px
    padding 0 10px
    display flex
    flex-direction column
    align-items center
    flex-wrap wrap
    .new_user_giftBag
      width 160px
      height 220px
      background-color #F9E9CF
      text-align center
      p
        font-size 18px
        color #333
        margin 30px 0
      img
        width 120px
    .welfare_association
      width 140px
      height 70px
      padding 20px
      background-color #FBE2D3
      position relative
      .welfare_association_price
        width 40px
        height 40px
        text-align center
        font-size 12px
        border-radius 50%
        background-color rgba(245, 160, 44, 0.6)
        position absolute
        right 18px
        top 10px
        display flex
        flex-direction column
        justify-content center
        align-items center
        span
          color #fff
          &.usually_price
            text-decoration line-through
      span
        display block
        &.welfare_association_title
          font-size 16px
          color #333
          margin-bottom 5px
        &.today_special_price
          font-size 12px
          color #7F7F7F
      img
        width 100px
        float right
        margin-top -40px
        margin-right -10px
  .new_user_spell_group
    width 140px
    height 65px
    padding 20px
    margin-top 5px
    background-color #FFECC2
    .free_mail
      display block
      width 60px
      height 15px
      line-height 15px
      border-radius 4px
      font-size 12px
      color #fff
      text-align center
      background-color #CBB693
    .spell_team
      display block
      font-size 16px
      margin-bottom 5px
.hot_categories
  padding 5px 10px
  background-color #fff
  font-size 16px
  .hot_categories_title
    height 60px
    line-height 60px
    font-size 20px
    padding-left 4px
  .hot_categories_container
    display flex
    flex-wrap wrap
    justify-content space-around
    .hot_categories_name, .good_commment_name
      width 174px
      img
        display block
        width 100px
        float right
      h3
        color #333
        margin 35px 0 0 10px
      span
        &::before
          content ''
          display block
          width 30px
          height 3px
          background #333
          margin 8px 0 0 10px
      &.hot_categories_name
        background-color #F9F3E4
      &.good_commment_name
        background-color #EBEFF6
    .hot_categories_item
      width 85px
      height 90px
      margin 5px 0
      font-size 14px
      display flex
      flex-direction column
      justify-content center
      align-items center
      background-color #F5F5F5
      img
        display block
        width 60px
.time_limit_buy
  background-color #fff
  margin 10px 0
  padding 4px 10px
  .time_limit_buy_title
    width 100%
    display flex
    justify-content space-between
    align-items center
    .time_limit_buy_title_left
      height 50px
      font-size 18px
      color #333
      display flex
      align-items center
      h2
        height 20px
        line-height 20px
      .time
        display flex
        align-items center
        margin-left 10px
        .colon
          width 10px
          color #333
          background-color transparent
        span
          display block
          width 20px
          height 20px
          line-height 20px
          color #fff
          font-size 14px
          text-align center
          border-radius 4px
          background-color #333
    .time_limit_buy_title_right
      height 50px
      line-height 50px
      font-size 14px
      .more
        display block
        width 40px
        height 50px
        line-height 50px
        background url('./images/time_limit_buy/more.webp') no-repeat center right / 8px
  .time_limit_buy_container
    display flex
    justify-content space-between
    flex-wrap wrap
    .time_limit_buy_item
      width 115px
      margin-bottom 5px
      display flex
      flex-direction column
      .img_container
        background-color #F5F5F5
        img
          display block
          width 100%
      .price
        height 30px
        line-height 30px
        padding-left 10px
        font-size 14px
        display flex
        justify-content center
        .discounts_price
          color red
        .ordinarily_price
          color #7F7F7F
          margin-left 5px
          font-size 12px
          text-decoration line-through
.new_product
  background-color #fff
  padding 0 10px
  margin-bottom 10px
  .new_product_title
    height 50px
    line-height 50px
    display flex
    justify-content space-between
    h2
      width 100px
      font-size 18px
    .more
      width 40px
      font-size 14px
      background url('./images/time_limit_buy/more.webp') no-repeat center right / 8px
  .new_product_container
    display flex
    justify-content space-between
    flex-wrap wrap
    .new_product_item
      width 115px
      .img_container
        background-color #F5F5F5
        img
          display block
          width 100%
      .product_des
        line-height 20px
        text-align left
        margin 5px 0
        font-size 12px
        text-overflow ellipsis
        overflow hidden
        display -webkit-box
        -webkit-box-orient vertical
        -webkit-line-clamp 2
        word-break break-all
      .product_price
        display block
        color red
        font-size 18px
      .product_dis
        padding 0 2px
        font-size 12px
        color #DD1A21
        background rgba(255, 255, 255, 0.9)
        border 1px solid #DD1A21
        border-radius 5px
        vertical-align super
.shop_recommend
  background-color #fff
  padding 5px 10px 10px
  margin-bottom 10px
  display flex
  flex-wrap wrap
  justify-content space-between
  .shop_recommend_container
    width 175px
    height 120px
    margin-bottom 4px
    background-color #F5F5F5
    display flex
    flex-direction column
    justify-content flex-end
    .shop_recommend_title
      font-size 16px
      color #333
      margin-left 10px
      margin-bottom 2px
    .shop_recommend_tip
      margin-left 10px
      font-size 12px
      color #7F7F7F
    .img_container
      display flex
      img
        display block
        width 80px
.footer
  background-color #414141
  padding 20px 0
  .footer_container
    width 210px
    margin 0 auto
    .footer_link_container
      display flex
      justify-content space-between
      margin-bottom 10px
      .footer_link_app, .footer_link_pc
        width 80px
        height 24px
        line-height 24px
        color #fff
        font-size 18px
        text-align center
        border 1px solid pink
        border-radius 4px
    .footer_company_info, .footer_company_license
      font-size 12px
      color #999
      text-align center
      margin-bottom 4px
</style>
