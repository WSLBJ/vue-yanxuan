/** 
 * vuex最核心的管理对象
*/
import Vue from 'vue'
import Vuex from 'vuex'
import msite from './modules/msite'
// 使用vuex
Vue.use(Vuex)
export default new Vuex.Store({
	modules: {
		msite
	}
})