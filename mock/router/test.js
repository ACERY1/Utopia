/**
 * for node
 * 路由配置示例
 */

const express = require('express');
const router = express.Router();
const staticUrl = require('../staticUrl');
const staticData = require('../staticData');
const commonMiddle = require('./commonMiddle');

// 挂载中间件
router.use(commonMiddle.fn);

// 配置路由以及相应数据
router.get(staticUrl.testUrl.about, (req, res) => {
	res.send(staticData.testData);
	res.end();
});


// 导出该路由
module.exports = router;


