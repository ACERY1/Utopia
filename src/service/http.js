/**
 * 将axios方法绑定到vue实例上
 */
import axios from 'axios';

export default {
	install (Vue) {
		Vue.prototype.$http = axios;
		Vue.http = axios;
	},
	$http: axios
};

export const $http = axios;
