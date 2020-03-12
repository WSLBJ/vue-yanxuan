/** 
 * vuex最核心的管理对象
*/
import Vue from 'vue'
import Vuex from 'vuex'
import msite from './modules/msite'
import categories from './modules/categories'
import search from './modules/search'
// 使用vuex
Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		msite,
		categories,
		search
	}
})