import Vue from 'vue'
import App from './App.vue'
// rem适配
import './tools/rem.js'
// 引入路由
import router from './router'
// 引入头部广告
import HeaderTip from './components/HeaderTip/HeaderTip.vue'
// 设置浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false
// 注册全局组件
Vue.component(HeaderTip.name, HeaderTip)
// 创建Vue的实例对象
/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App />',
	router // 配置路由器
})
