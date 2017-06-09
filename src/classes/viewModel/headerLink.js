/**
 * headerLink class 顶部栏的链接
 * 暂时没用
 */

class header {
	constructor(array) {
		this.links = [];
		let _temp = {};
		for (let item of array) {
			_temp.name = item.name;
			_temp.link = item.link;
			this.links.push(_temp);
			_temp = {};
		}
	}

	/*
	* @param：array 有两个字段 array.name,array.link
	* */
	// pushItem(array) {
	// 	let _temp = {};
	// 	for (let item of array) {
	// 		_temp.name = item.name;
	// 		_temp.link = item.link;
	// 		this.links.push(_temp);
	// 		_temp = {};
	// 	}
	// }
}

export {header};

