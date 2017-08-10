import App from '../App';


// localTest
const localTest = r => require.ensure([], () => r(require('../components/cards/mainCard.vue')), 'localTest');

const test = r => require.ensure([], () => r(require('../TEST.vue')), 'test'); // 本地测试
const home = r => require.ensure([], () => r(require('../pages/home.vue')), 'home'); //首页
const categories = r => require.ensure([], () => r(require('../pages/categories.vue')), 'categories'); // 分类
const admin = r => require.ensure([], () => r(require('../pages/admin.vue')), 'admin'); // 后台登录
const footPrint = r => require.ensure([], () => r(require('../pages/footPrint.vue')), 'footPrint'); // 足迹
const hello = r => require.ensure([], () => r(require('../components/Hello.vue')), 'hello');

/*用作开发*/
const dev = r => require.ensure([], () => r(require('../components/dialogs/newsDialog.vue')), 'dev');


export default[
	{
		path: '/',
		component: App,
		children: [
			{
				path: '',
				redirect: '/home'
			},
			{
				path: '/home',
				component: home
			},
			{
				path: '/categories',
				component: categories
			},
			{
				path: '/footPrint',
				component: footPrint
			},
			{
				path: '/test',
				component: test
			},
			{
				path: '/local',
				component: localTest
			},
			{
				path: '/dev',
				component: dev
			},
		]
	},
	{
		path: '/admin',
		component: admin
	},];
