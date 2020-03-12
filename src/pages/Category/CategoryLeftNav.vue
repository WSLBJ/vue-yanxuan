<template>
  <!-- 左侧导航 -->
  <div class="classify_left_nav">
    <van-sidebar v-model="activeKey">
      <van-sidebar-item :title="leftNavItem.name"
                        class="nav_title"
                        :class="{active: index===activeKey}"
                        v-for="(leftNavItem, index) in leftNavData"
                        :key="index"
                        @click="toggleRightList(index)" />
    </van-sidebar>
  </div>
</template>
<script>
import { Icon, Sidebar, SidebarItem } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'CategoryLeftNav',
  components: {
    [Icon.name]: Icon,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem
  },
  data () {
    return {
      activeKey: 0
    }
  },
  computed: {
    ...mapState({
      leftNavData: state => state.categories.leftNavData.categoryL1List,
    })
  },
  mounted () {
    // 获取左侧导航数据
    this.$store.dispatch('getCategoriesLeftData')
    // 获取id
    this.$bus.$on('toggleIndex', (rightItemIndex) => {
      this.activeKey = rightItemIndex
    })
  },
  methods: {
    toggleRightList (index) {
      this.activeKey = index
      const { leftNavData, activeKey } = this
      this.$router.push({ path: 'category', query: { categoryId: leftNavData[activeKey].id } }, () => { })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.classify_left_nav
  height 100%
  width 23%
  position fixed
  .nav_title
    height 45px
    text-align center
    line-height 10px
    border-right 1px solid #EDEDED
    &.active
      color red
</style>