<template>
  <!-- 商品分类 -->
  <ul class="shop_categories">
    <li class="shop_categories_item"
        v-for="(category, index) in categories"
        :key="index">
      <img :src="category.picUrl"
           alt="">
      <span>{{category.text}}</span>
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MsiteCategories',
  computed: {
    ...mapState({
      categories: state => state.msite.categories
    })
  },
  mounted () {
    this.$store.dispatch('getCategories')
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
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
</style>