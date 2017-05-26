/**
 * 公用中间件
 */

// 设置允许C O R S
exports.fn = (req, res, next) => {
	console.log('receive from:\n' +req.protocol + '://' + req.get('host') + req.originalUrl+'    '+'method:'+req.method);
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};


