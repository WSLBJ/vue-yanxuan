import { RECEIVE_CATEGORIES_LEFT_DATA, RECEIVE_CATEGORIES_RIGHT_DATA } from '../mutation-types'
import { reqCategoriesLeftData, reqCategoriesRightData } from '../../api'
const state = {
	leftNavData: [], // 商品列表
	rightListData: [] // 商品分类
}
const mutations = {
	[RECEIVE_CATEGORIES_LEFT_DATA] (state, leftNavData) {
		state.leftNavData = leftNavData
	},
	[RECEIVE_CATEGORIES_RIGHT_DATA] (state, rightListData) {
		state.rightListData = rightListData
	}
}
const actions = {
	// 异步获取左侧数据
	async getCategoriesLeftData ({ commit }) {
		// 发送ajax请求
		const result = await reqCategoriesLeftData()
		// 成功后提交mutation
		if (result.code === 0) {
			commit(RECEIVE_CATEGORIES_LEFT_DATA, result.data)
		}
	},
	// 异步获取商品分类
	async getCategoriesRightData ({ commit }) {
		// 发送ajax请求
		const result = await reqCategoriesRightData()
		// 成功后提交mutation
		if (result.code === 0) {
			commit(RECEIVE_CATEGORIES_RIGHT_DATA, result.data)
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