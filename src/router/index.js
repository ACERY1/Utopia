import App from '../App';


const localTest = r => require.ensure([], () => r(require('../components/inputs/loginBar.vue')), 'localTest');

const test = r => require.ensure([], () => r(require('../TEST.vue')), 'test'); // 本地测试
const home = r => require.ensure([], () => r(require('../pages/home.vue')), 'home');
const hello = r => require.ensure([], () => r(require('../components/Hello.vue')), 'hello');


export default[{
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
			path: '/test',
			component: test
		},
		{
			path: '/local',
			component: localTest
		},
	]
}];
