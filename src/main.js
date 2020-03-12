import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入store
import store from './store'
// 引入vant
import { Tab, Tabs, Swipe, SwipeItem, Lazyload, Grid, GridItem } from 'vant'
// rem适配
import './tools/rem.js'
//引入mock
import './mock/mock-server'
//使用vant
Vue.use(Tab).use(Tabs)
Vue.use(Grid).use(GridItem)
Vue.use(Swipe).use(SwipeItem).use(Lazyload)
// 引入swiper
import Swiper from './components/Swiper/Swiper.vue'
import MsiteHeader from './components/MsiteHeader/MsiteHeader.vue'
// 设置浏览器的控制台中是否显示提示信息
Vue.config.productionTip = false
// 注册全局组件
Vue.component(Swiper.name, Swiper)
Vue.component(MsiteHeader.name, MsiteHeader)
Vue.prototype.$bus = new Vue()
// 创建Vue的实例对象
/* eslint-disable no-new */
new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App />',
	router, // 配置路由器
	store // 配置store
})
