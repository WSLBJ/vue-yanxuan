//引入axios
import axios from 'axios'
// 引入qs
import qs from 'qs'
import { Toast } from 'mint-ui'
// 引入router
import router from '../router'

//添加请求拦截器
axios.interceptors.request.use(config => {
	// 解构method和data
	const { method, data } = config
	if (method.toUpperCase() === 'POST' && data instanceof Object) {
		// 把url转化为urlEncoding的形式
		config.data = qs.stringify(data)
	}
	return config
})

// 添加响应拦截器
axios.interceptors.request.use(response => {
	return response.data
}, error => {
	// 中断错误信息
	return new Promise(() => { })
})

// 暴露axios
export default axios