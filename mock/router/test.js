/**
 * for node
 * 路由配置示例
 */

const express = require('express');
const router = express.Router();
const staticUrl =	require('../staticUrl');
const staticData = require('../staticData');

let fn = (req, res, next) => {
	// fn是中间件
	next();
};

router.use(fn); // 挂载中间件

router.get(staticUrl.testUrl,(req,res)=>{
	// 定义该路由下的响应
});





