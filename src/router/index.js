import App from '../App';


// localTest
const localTest = r => require.ensure([], () => r(require('../components/cards/mainCard.vue')), 'localTest');

const test = r => require.ensure([], () => r(require('../TEST.vue')), 'test'); // 本地测试
const home = r => require.ensure([], () => r(require('../pages/home.vue')), 'home'); //
const hello = r => require.ensure([], () => r(require('../components/Hello.vue')), 'hello');

/*用作开发*/
const dev = r => require.ensure([], () => r(require('../components/dialogs/footDialog.vue')), 'dev');


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
	}];
