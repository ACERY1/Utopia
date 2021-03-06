import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index';
import ElementUI from 'element-ui'; // 导入elementUI
import 'element-ui/lib/theme-default/index.css';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';
import './assets/css/iconfont.css'; // 使用icon-font

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

Vue.use(ElementUI); // 注册使用elementUI

Vue.use(VueRouter); // 注册使用Router

Vue.use(VueLazyLoad,{
	error: require('./assets/gifs/404.gif'),
	loading: require('./assets/gifs/loading.gif'),
	attempt: 1
}); // 使用pic懒加载


const router = new VueRouter({
	mode:'history',
	routes,
});


Vue.config.productionTip = false;

new Vue({
	router,
}).$mount('#app');
