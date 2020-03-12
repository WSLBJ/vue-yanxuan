<template>
  <div>
    <van-grid v-if="filterShop"
              icon-size="170px">
      <van-grid-item :icon="item.icon"
                     :text="item.name"
                     v-for="(item, index) in filterShop"
                     :key="index" />
    </van-grid>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'SearchShopList',
  computed: {
    ...mapState({
      shopListData: state => state.search.shopListData
    }),
    filterShop () {
      let shopList = []
      const { shopListData, $route: { query: { name } } } = this
      if (shopListData) {
        shopList = shopListData.filter(item => item.name.indexOf(name) !== -1)
      }
      return shopList
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped></style>