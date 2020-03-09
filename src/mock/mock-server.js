// 引入mock
import Mock from 'mockjs'
// 引入模拟数据
import IndexData from './datas/index.json'
import IndexNavData from './datas/indexCateModule.json'
// 拦截ajax请求，返回模拟数据
Mock.mock('/indexdata', { code: 0, data: IndexData })
Mock.mock('/indexnavdata', { code: 0, data: IndexNavData })