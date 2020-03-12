// 引入mock
import Mock from 'mockjs'
// 引入模拟数据
import IndexData from './datas/index.json'
import IndexNavData from './datas/indexCateModule.json'
import cateLists from './datas/cateLists.json'
import cateNavDatas from './datas/cateNavDatas.json'
import searchHot from './datas/searchHot.json'
import searchList from './datas/searchList.json'
// 拦截ajax请求，返回模拟数据
// 首页商品分类
Mock.mock('/api/shopcategories', { code: 0, data: IndexData.kingKongModule.kingKongList })
// 首页头部导航
Mock.mock('/api/indexnavdata', { code: 0, data: IndexNavData })
// 分类页左侧导航
Mock.mock('/api/categoriesleftdata', { code: 0, data: cateNavDatas })
// 分类页右侧导航
Mock.mock('/api/categoriesrightdata', { code: 0, data: cateLists })
// 搜索热门数据
Mock.mock('/api/searchhot', { code: 0, data: searchHot.data.hotKeywordVOList })
// 搜索商品数据
Mock.mock('/api/searchlist', { code: 0, data: searchList.searchList })