/**
 * 放置公用的一些方法
 */

/**
 *
 * @param datetime
 *  		毫秒数
 * @returns {string}
 * 			返回示例："2017-06-09"
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


export {getTime};
