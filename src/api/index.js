// 引入ajax
import ajax from './ajax'
// 设置地址
const BASE = '/api'
// 获取头部导航数据
export const reqNav = () => ajax.get(BASE + `/indexnavdata`)
