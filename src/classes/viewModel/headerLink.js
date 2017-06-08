/**
 * headerLink class 顶部栏的链接
 */

class header {
	constructor() {
		this.links = [];
	}

	pushItem(name, link) {
		let _temp = {};
		_temp.name = name;
		_temp.link = link;
		this.links.push(_temp);
	}
}

export {header};

