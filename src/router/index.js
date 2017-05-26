import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import TEST from '../TEST.vue';

Vue.use(Router);



export default new Router({
	mode: 'history', // 提示： 防止URL里面带上#号
	routes: [
		{
			path: '/',
			name: 'Hello',
			component: TEST
		}
	]
});
