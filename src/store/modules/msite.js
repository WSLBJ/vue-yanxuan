import { RECEIVE_NAV, RECEIVE_CATEGORIES } from '../mutation-types'
import { reqNav, reqCategories } from '../../api'
const state = {
	nav: [], //头部导航数据
	categories: [] // 商品分类
}
const mutations = {
	[RECEIVE_NAV] (state, nav) {
		state.nav = nav
	},
	[RECEIVE_CATEGORIES] (state, categories) {
		state.categories = categories
	}
}
const actions = {
	// 异步获取nav
	async getNav ({ commit }) {
		// 发送ajax请求
		const result = await reqNav()
		// 成功后提交mutation
		if (result.code === 0) {
			commit(RECEIVE_NAV, result.data)
		}
	},
	// 异步获取商品分类
	async getCategories ({ commit }) {
		// 发送ajax请求
		const result = await reqCategories()
		// 成功后提交mutation
		if (result.code === 0) {
			commit(RECEIVE_CATEGORIES, result.data)
		}
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}