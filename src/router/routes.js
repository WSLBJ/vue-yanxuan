/**
 * 包含路由中所有路由的数组模块
*/
// 路由的懒加载--动态引入的方式---用到谁，就加载对应的js文件
const Msite = () => import('../pages/Msite/Msite.vue')
const Cart = () => import('../pages/Cart/Cart.vue')
const Category = () => import('../pages/Category/Category.vue')
const CategoryRightList = () => import('../pages/Category/CategoryRightList.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const WorthBuy = () => import('../pages/WorthBuy/WorthBuy.vue')
const Search = () => import('../pages/Search/Search.vue')
const MsiteTab = () => import('../components/MsiteTab/MsiteTab.vue')
const SearchShopList = () => import('../pages/Search/SearchShopList.vue')
export default [
	{
		path: '/msite',
		component: Msite,
		meta: {
			isShowFooter: true,
			isShowHeader: true
		}
	},
	{
		path: '/tab',
		component: MsiteTab,
		meta: {
			isShowFooter: true,
			isShowHeader: true
		}
	},
	{
		path: '/search',
		component: Search
	},
	{
		path: '/list',
		component: SearchShopList
	},
	{
		path: '/cart',
		component: Cart,
		meta: {
			isShowFooter: true
		}
	},
	{
		path: '/category',
		component: Category,
		meta: {
			isShowFooter: true
		},
		children: [
			{
				path: '/category?categoryId=:id',
				component: CategoryRightList
			}
		]
	},
	{
		path: '/worthbuy',
		component: WorthBuy,
		meta: {
			isShowFooter: true
		}
	},
	{
		path: '/personal',
		component: Personal,
		meta: {}
	},
	{
		path: '/',
		redirect: '/msite'
	}
]
