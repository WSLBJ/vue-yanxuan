/** 
 * 路由器模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
// 使用路由
Vue.use(VueRouter)
// 实例化路由对象
const router = new VueRouter({
	mode: 'history',
	routes
})
// 暴露
export default router