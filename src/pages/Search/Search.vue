<template>
  <div>
    <form action="/">
      <van-search v-model="value"
                  show-action
                  placeholder="请输入搜索关键词"
                  @search="onSearch"
                  @cancel="onCancel" />
    </form>

    <!-- 历史记录 -->
    <div class="m-searchSuggestions"
         v-show="!value">
      <header class="hd">
        <h3 class="tit">历史记录</h3>
      </header>
      <nav class="list"
           v-if="histories">
        <a class="item"
           @click="goToList(item)"
           v-for="(item, index) in histories"
           :key="index">{{item}}</a>
      </nav>
    </div>

    <!-- 热门搜索 -->
    <div class="m-searchSuggestions"
         v-show="!value">
      <header class="hd">
        <h3 class="tit">热门搜索</h3>
      </header>
      <nav class="list"
           v-if="hotSearchData">
        <a class="item"
           @click="goToList(item.keyword)"
           :class="{highlight: item.highlight===1}"
           v-for="(item, index) in hotSearchData"
           :key="index">{{item.keyword}}</a>
      </nav>
    </div>

    <!-- 搜索列表 -->
    <div class="searchList"
         v-show="value">
      <van-list v-if="filterShop">
        <van-cell v-for="(item, index) in filterShop"
                  :key="index"
                  :title="item.name"
                  @click="goToList(item.name)" />
      </van-list>
    </div>
  </div>
</template>
<script>
import { Search, List, Cell, CellGroup } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'Search',
  components: {
    [Search.name]: Search,
    [List.name]: List,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  computed: {
    ...mapState({
      hotSearchData: state => state.search.hotSearchData,
      shopListData: state => state.search.shopListData,
      historyScore: state => state.search.historyScore
    }),
    filterShop () {
      let shopList = []
      const { shopListData } = this
      if (shopListData) {
        shopList = shopListData.filter(item => item.name.indexOf(this.value) !== -1)
      }
      return shopList
    },
    histories () {
      let obj = {}
      if (this.historyScore) {
        obj = Object.keys(this.historyScore)
      }
      return obj
    }
  },
  mounted () {
    // 获取热门搜索数据
    this.$store.dispatch('getSearchHot')
    // 获取搜索商品列表数据
    this.$store.dispatch('getSearchShopList')
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onSearch (val) {
      this.saveHistoryScore(val)
      this.$router.push({ path: 'list', query: { name: val } }, () => { })
    },
    saveHistoryScore (name) {
      // 存localStorage
      if (!localStorage.getItem('nameObj')) {
        localStorage.setItem('nameObj', JSON.stringify({ [name]: name }))
      } else {
        let obj = JSON.parse(localStorage.getItem('nameObj'))
        obj[name] = name
        localStorage.setItem('nameObj', JSON.stringify(obj))
      }
      // 存vuex
      this.$store.dispatch('getSearchShopHistory', { name })
    },
    onCancel () {
      this.$router.push('/msite')
    },
    goToList (name) {
      this.saveHistoryScore(name)
      this.$router.push({ path: 'list', query: { name } }, () => { })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.m-searchSuggestions
  line-height 1.5
  color #333
  font-size 18px
  padding 0 0.4rem 0.4rem
  background-color #fff
  overflow hidden
  margin-bottom 0.26667rem
  .list
    line-height 1.5
    color #333
    font-size 24px
    display block
    margin-right -0.4rem
    margin-top 10px
    margin-bottom -0.42667rem
    .item
      font-size 14px
      text-decoration none
      outline 0
      float left
      padding 0 0.2rem
      margin-right 0.42667rem
      margin-bottom 0.42667rem
      line-height 0.61333rem
      border 1px solid #999
      border-radius 4px
      &.highlight
        border-color #DD1A21
        color #DD1A21
.searchList
  position absolute
  top 54px
  width 100%
  .van-cell
    border-bottom 1px solid #ddd
</style>