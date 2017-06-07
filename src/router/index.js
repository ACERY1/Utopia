import App from '../App';

const test = r => require.ensure([], () => r(require('../TEST.vue')), 'test');
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
			component: hello
		},
		{
			path: '/test',
			component: test
		},
	]
}];
