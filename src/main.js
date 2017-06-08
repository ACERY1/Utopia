import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router/index';
import ElementUI from 'element-ui'; // 导入elementUI
import 'element-ui/lib/theme-default/index.css';
import FastClick from 'fastclick';
import VueLazyLoad from 'vue-lazyload';

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}

Vue.use(ElementUI); // 注册使用elementUI

Vue.use(VueRouter); // 注册使用Router

Vue.use(VueLazyLoad); // 使用图偏懒加载

const router = new VueRouter({
	mode:'history',
	routes,
});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	router,
}).$mount('#app');
