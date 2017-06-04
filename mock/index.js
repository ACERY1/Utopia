/**
 * mockJs配置文件
 * 配置node服务起本地服务拿数据
 * 必须解决跨域问题
 * 所需组件 http/express
 */

// express框架
const express = require('express');

// 静态配置的Url
const staticUrl = require('./staticUrl');

// 导入路由模块
const test = require('./router/test'); // 用作测试

// 监听端口
const PORT = 3000;

let app = express();

// 挂载路由
app.use(staticUrl.testUrl.mainPath,test);


// 配置监听端口
app.listen(PORT, () => {
	console.log('now listen at %d', PORT);
});



