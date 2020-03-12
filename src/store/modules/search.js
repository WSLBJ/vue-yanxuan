import { RECEIVE_SEARCH_HOT, RECEIVE_SEARCH_SHOP_LIST, RECEIVE_SEARCH_SHOP_HISTORY } from '../mutation-types'
import { reqSearchHot, reqSearchList } from '../../api'
const state = {
	hotSearchData: [], // 热门搜索数据
	shopListData: [], // 商品列表数据
	historyScore: JSON.parse(localStorage.getItem('nameObj')) || {} // 搜索历史记录
}
const mutations = {
	[RECEIVE_SEARCH_HOT] (state, hotSearchData) {
		state.hotSearchData = hotSearchData
	},
	[RECEIVE_SEARCH_SHOP_LIST] (state, shopListData) {
		state.shopListData = shopListData
	},
	[RECEIVE_SEARCH_SHOP_HISTORY] (state, historyScore) {
		state.historyScore[historyScore] = historyScore
	}
}
const actions = {
	// 异步获取热门搜索数据
	async getSearchHot ({ commit }) {
		// 发送ajax请求
		const result = await reqSearchHot()
		// 成功后提交mutation
		if (result.code === 0) {
			commit(RECEIVE_SEARCH_HOT, result.data)
		}
	},
	// 异步获取搜索商品列表数据
	async getSearchShopList ({ commit }) {
		// 发送ajax请求
		const result = await reqSearchList()
		// 成功后提交mutation
		if (result.code === 0) {
			commit(RECEIVE_SEARCH_SHOP_LIST, result.data)
		}
	},
	getSearchShopHistory ({ commit }, obj) {
		console.log(obj.name)
		commit(RECEIVE_SEARCH_SHOP_HISTORY, obj.name)
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}