/**
 * 放置公用的一些方法
 */

/**
 *
 * @param datetime
 *        毫秒数
 * @returns {string}
 *            返回示例："2017-06-09"
 */
let getTime = (datetime) => {
	let year = datetime.getFullYear();
	let month = datetime.getMonth() + 1;
	let date = datetime.getDate();
	if (month < 10) {
		month = '0' + month;
	}
	if (date < 10) {
		date = '0' + date;
	}
	return `${year}-${month}-${date}`;
};

let randomColor = () => {
	let _base = 255;
	let _r = 0;
	let _g = 0;
	let _b = 0;
	while (Math.abs(_r - _g) < 30 || Math.abs(_r - _b) < 30 || Math.abs(_g - _b) < 30 || _g>180||_b>180 ||_r>180){
		_r = parseInt(Math.random() * _base);
		_g = parseInt(Math.random() * _base);
		_b = parseInt(Math.random() * _base);
	}
	return {
		r:_r,
		g:_g,
		b:_b
	};
};
export {getTime,randomColor};
