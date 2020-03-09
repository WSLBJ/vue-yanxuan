import { RECEIVE_NAV } from '../mutation-types'
import { reqNav } from '../../api'
const state = {
	nav: [] //头部导航数据
}
const mutations = {
	[RECEIVE_NAV] (state, nav) {
		state.nav = nav
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
	}
}
const getters = {}
export default {
	state,
	mutations,
	actions,
	getters
}