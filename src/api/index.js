// 引入ajax
import ajax from './ajax'
// 设置地址
const BASE = '/api'
// 获取头部导航数据
export const reqNav = () => ajax({
	method: 'GET',
	url: BASE + '/indexnavdata'
})
// 获取首页商品分类
export const reqCategories = () => ajax({
	method: 'GET',
	url: BASE + '/shopcategories'
})
// 获取分类里面左侧导航栏数据
export const reqCategoriesLeftData = () => ajax({
	method: 'GET',
	url: BASE + '/categoriesleftdata'
})
// 获取分类里面右侧导航栏数据
export const reqCategoriesRightData = () => ajax({
	method: 'GET',
	url: BASE + '/categoriesrightdata'
})
// 获取搜索热门数据
export const reqSearchHot = () => ajax({
	method: 'GET',
	url: BASE + '/searchhot'
})
// 获取搜索商品列表数据
export const reqSearchList = () => ajax({
	method: 'GET',
	url: BASE + '/searchlist'
})
