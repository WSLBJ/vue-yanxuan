<template>
  <div>
    <!-- 右侧内容 -->
    <div class="classify_right">
      <div class="top_img">
        <img src="./images/00.webp"
             alt="">
      </div>
      <div class="list_info"
           style="text-align:center">
        <van-grid :column-num="3"
                  icon-size="60px"
                  v-if="categoryLists">
          <van-grid-item :icon="categoryItem.wapBannerUrl"
                         :text="categoryItem.name"
                         v-for="(categoryItem, index) in (categoryLists.categoryList?categoryLists.categoryList:categoryLists.subCateList)"
                         :key="index" />
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'CategoryRightList',
  computed: {
    ...mapState({
      rightListData: state => state.categories.rightListData
    }),
    categoryLists () {
      // 获取id
      const id = +this.$route.query.categoryId
      let rightItemIndex = 0
      // id存在查找对应的分类数据
      if (id) {
        rightItemIndex = this.rightListData.findIndex(item => item.id === id)
      }
      this.$bus.$emit('toggleIndex', rightItemIndex)
      return this.rightListData[rightItemIndex]
    }
  },
  mounted () {
    // 获取右侧导航数据
    this.$store.dispatch('getCategoriesRightData')
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.classify_right
  width 77%
  float right
  box-sizing border-box
  padding 15px 15px 50px 15px
  .top_img
    width 100%
    height 96px
    margin-bottom 15px
    img
      width 100%
      height 100%
</style>